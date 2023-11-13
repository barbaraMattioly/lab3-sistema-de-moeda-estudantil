package LDS3.LDS.Controllers;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.DoacaoModel;
import LDS3.LDS.Model.ProfessorModel;
import LDS3.LDS.Repository.AlunoRepository;
import LDS3.LDS.Repository.DoacaoRepository;
import LDS3.LDS.Repository.ProfessorRepository;
import LDS3.LDS.Request.CadastrarDoacaoRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("doacao")
@CrossOrigin(origins = "http://localhost:5173")
public class DoacaoController {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private ProfessorRepository professorRepository;

    @Autowired
    private DoacaoRepository doacaoRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody @Valid CadastrarDoacaoRequest doacaoRequest){
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
        int qtdMoedas = professor.get().getqtdMoedas() - doacaoRequest.valor();
        professor.get().setqtdMoedas(qtdMoedas);
        professorRepository.save(professor.get());
        
        DoacaoModel doacaoCadastrada = doacaoRepository.save(doacaoModel);

        return ResponseEntity.status(HttpStatus.CREATED).body(doacaoCadastrada);
    }    

    @GetMapping("/listarProfessor/{id}")
    public Iterable<DoacaoModel> returnAllProfessor(@PathVariable Long id){
        return doacaoRepository.findByProfessor_Id(id);
    }

    @GetMapping("/listarAluno/{id}")
    public Iterable<DoacaoModel> returnAllAluno(@PathVariable Long id){
        return doacaoRepository.findByAluno_Id(id);
    }
}
