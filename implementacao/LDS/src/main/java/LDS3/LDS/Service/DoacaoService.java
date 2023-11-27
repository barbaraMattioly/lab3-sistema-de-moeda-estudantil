package LDS3.LDS.Service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.DoacaoModel;
import LDS3.LDS.Model.EmailModel;
import LDS3.LDS.Model.ProfessorModel;
import LDS3.LDS.Repository.AlunoRepository;
import LDS3.LDS.Repository.DoacaoRepository;
import LDS3.LDS.Repository.ProfessorRepository;
import LDS3.LDS.Request.CadastrarDoacaoRequest;
import LDS3.LDS.Request.EmailRequest;

@Service
public class DoacaoService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private ProfessorRepository professorRepository;

    @Autowired
    private DoacaoRepository doacaoRepository;

    @Autowired
    private EmailService emailService;    

    public ResponseEntity<?> cadastrarDoacao(CadastrarDoacaoRequest doacaoRequest){
        DoacaoModel doacaoModel = new DoacaoModel();
        BeanUtils.copyProperties(doacaoRequest, doacaoModel);

        Optional<AlunoModel> aluno = alunoRepository.findById(doacaoRequest.idAluno());
        Optional<ProfessorModel> professor = professorRepository.findById(doacaoRequest.idProfessor());
        
        if(!aluno.isPresent() || !professor.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Professor ou aluno não encontrados");
        }

        if(professor.get().getqtdMoedas() < doacaoRequest.valor()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Quantidade de moedas insuficiente");
        }

        doacaoModel.setAluno(aluno.get());
        doacaoModel.setProfessor(professor.get());
        int saldoMoedasProfessor = professor.get().getqtdMoedas() - doacaoRequest.valor();
        professor.get().setqtdMoedas(saldoMoedasProfessor);
        professorRepository.save(professor.get());

        int saldoMoedasAluno = aluno.get().getSaldoMoedas() + doacaoRequest.valor();
        aluno.get().setSaldoMoedas(saldoMoedasAluno);
        
        DoacaoModel doacaoCadastrada = doacaoRepository.save(doacaoModel);
        enviarEmailProfessor(doacaoCadastrada.getValor(), professor.get().getEmail(), aluno.get().getNome(), saldoMoedasProfessor);
        enviarEmailAluno(doacaoCadastrada.getValor(), aluno.get().getEmail(), professor.get().getNome(), doacaoCadastrada.getDescricao(), aluno.get().getSaldoMoedas());
        return ResponseEntity.status(HttpStatus.CREATED).body(doacaoCadastrada);  
    }

    private void enviarEmailAluno(int qtdMoedas, String emailAluno, String nomeProfessor, String descricao, int saldoMoedas){
        StringBuilder mensagemEmailAluno = new StringBuilder();
        mensagemEmailAluno.append("Olá! Você recebeu ").append(qtdMoedas).append(" moedas\n");
        mensagemEmailAluno.append(" - De: ").append(nomeProfessor).append("\n");
        mensagemEmailAluno.append(" - Descrição: ").append(descricao);
        mensagemEmailAluno.append("\nSaldo atual de moedas: ").append(saldoMoedas);

        String assunto = "Você recebeu moedas";
        EmailRequest emailAlunoRequest = new EmailRequest(emailAluno, mensagemEmailAluno.toString(), assunto);
        EmailModel emailModel = new EmailModel();
        BeanUtils.copyProperties(emailAlunoRequest, emailModel);
        emailService.enviarEmail(emailModel);
    }

    private void enviarEmailProfessor(int qtdMoedas, String email, String nomeAluno, int saldoMoedas){
        StringBuilder mensagemEmailProfessor = new StringBuilder();
        mensagemEmailProfessor.append("Olá! Você acabou de enviar ").append(qtdMoedas).append(" moedas para o(a) aluno(a): ").append(nomeAluno);
        mensagemEmailProfessor.append(".\nSeu saldo atual é de: ").append(saldoMoedas).append(" moedas.");

        String assunto = "Você enviou moedas";
        EmailRequest emailProfessorRequest = new EmailRequest(email, mensagemEmailProfessor.toString(), assunto);
        EmailModel emailModel = new EmailModel();
        BeanUtils.copyProperties(emailProfessorRequest, emailModel);
        emailService.enviarEmail(emailModel);
    }    
}
