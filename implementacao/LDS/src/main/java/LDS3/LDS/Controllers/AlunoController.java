package LDS3.LDS.Controllers;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.EnderecoModel;
import LDS3.LDS.Repository.AlunoRepository;
import LDS3.LDS.Repository.EnderecoRepository;
import LDS3.LDS.Request.AlunoRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("aluno")
@CrossOrigin(origins = "http://localhost:5173")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody @Valid AlunoRequest alunoRequest){
        AlunoModel alunoModel = new AlunoModel();
        BeanUtils.copyProperties(alunoRequest, alunoModel);

        AlunoModel alunoCadastrado = alunoRepository.save(alunoModel);
        
        EnderecoModel endereco = new EnderecoModel();
        BeanUtils.copyProperties(alunoRequest.endereco(), endereco);
        endereco.setAluno(alunoCadastrado);
        enderecoRepository.save(endereco);

        return ResponseEntity.status(HttpStatus.CREATED).body(alunoCadastrado);
    }

    @PutMapping("/update")
    public AlunoModel updateAluno(@RequestBody AlunoModel updatedAluno){
        return alunoRepository.save(updatedAluno);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        alunoRepository.deleteById(id);
    }

    @GetMapping("/alunos")
    public Iterable<AlunoModel> returnAll(){
       return alunoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<AlunoModel> returnById(@PathVariable Long id){
       return alunoRepository.findById(id);
    }
}
