package LDS3.LDS.Service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.EmailModel;
import LDS3.LDS.Model.TrocaModel;
import LDS3.LDS.Model.VantagemModel;
import LDS3.LDS.Repository.AlunoRepository;
import LDS3.LDS.Repository.TrocaRepository;
import LDS3.LDS.Repository.VantagemRepository;
import LDS3.LDS.Request.EmailRequest;
import LDS3.LDS.Request.TrocarItemRequest;

@Service
public class TrocaService {
    @Autowired
    private TrocaRepository trocaRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private VantagemRepository vantagemRepository;

    @Autowired
    private EmailService emailService;    

    public ResponseEntity<?> trocarItem(TrocarItemRequest trocaRequest){
        TrocaModel troca = new TrocaModel();
        BeanUtils.copyProperties(trocaRequest, troca);
        
        Optional<AlunoModel> aluno = alunoRepository.findById(trocaRequest.idAluno());
        Optional<VantagemModel> vantagem = vantagemRepository.findById(trocaRequest.idVantagem());
        
        if(!aluno.isPresent() || !vantagem.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Aluno ou vantagem não encontrados");
        }

        if(aluno.get().getSaldoMoedas() < vantagem.get().getValor()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Quantidade de moedas insuficiente");
        }

        troca.setAluno(aluno.get());
        troca.setVantagem(vantagem.get());
        troca.setValor(vantagem.get().getValor());
        troca.setCupom(gerarCupom());
        TrocaModel trocaEfetuada = trocaRepository.save(troca);
        
        int saldoAtualMoedasAluno = aluno.get().getSaldoMoedas() - vantagem.get().getValor();
        aluno.get().setSaldoMoedas(saldoAtualMoedasAluno);

        alunoRepository.save(aluno.get());

        enviarEmailAluno(trocaEfetuada.getId(), trocaEfetuada.getCupom(), vantagem.get().getDescricao(), trocaEfetuada.getValor(), aluno.get().getEmail(), aluno.get().getSaldoMoedas());
        enviarEmailEmpresa(trocaEfetuada.getId(), aluno.get().getNome(), vantagem.get().getDescricao(), trocaEfetuada.getValor(), vantagem.get().getEmpresa().getEmail(), trocaEfetuada.getCupom());
        
        return ResponseEntity.status(HttpStatus.CREATED).body(troca);        
    }

    private void enviarEmailAluno(Long codigoTroca, String cupom, String descricao, int valor, String emailAluno, int saldoMoedas){
        StringBuilder mensagemEmailAluno = new StringBuilder();
        mensagemEmailAluno.append("Olá! Aqui está o cupom para resgatar sua vantagem: ").append(cupom);
        mensagemEmailAluno.append("\nCódigo da troca: ").append(codigoTroca).append("\n");
        mensagemEmailAluno.append("Item resgatado: ").append(descricao).append("\n");
        mensagemEmailAluno.append("Valor: ").append(valor).append("\n");
        mensagemEmailAluno.append("Saldo atual de moedas: ").append(saldoMoedas);

        String assunto = "Cupom para resgate do item: " + descricao;
        EmailRequest emailAlunoRequest = new EmailRequest(emailAluno, mensagemEmailAluno.toString(), assunto);
        EmailModel emailModel = new EmailModel();
        BeanUtils.copyProperties(emailAlunoRequest, emailModel);
        emailService.enviarEmail(emailModel);
    }

    private void enviarEmailEmpresa(Long codigoTroca, String nomeAluno, String descricao, int valor, String emailEmpresa, String cupom){
        StringBuilder mensagemEmailEmpresa = new StringBuilder();
        mensagemEmailEmpresa.append("Olá! Resgate efetuado pelo aluno: ").append(nomeAluno);
        mensagemEmailEmpresa.append("\nDetalhes: \n");
        mensagemEmailEmpresa.append("  - Item: ").append(descricao).append("\n");
        mensagemEmailEmpresa.append("  - Valor: ").append(valor);
        mensagemEmailEmpresa.append("\n  - Cupom para resgate: ").append(cupom);

        String assunto = "Resgate do item: " + descricao + " | " + nomeAluno;

        EmailRequest emailAlunoRequest = new EmailRequest(emailEmpresa, mensagemEmailEmpresa.toString(), assunto);
        EmailModel emailModel = new EmailModel();
        
        BeanUtils.copyProperties(emailAlunoRequest, emailModel);

        emailService.enviarEmail(emailModel);
    }

    private String gerarCupom(){
        SecureRandom random = new SecureRandom();
        return new BigInteger(10 * 5, random).toString(32).toUpperCase().substring(0, 10);        
    }
}
