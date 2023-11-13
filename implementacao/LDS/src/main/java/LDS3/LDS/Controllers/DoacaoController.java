package LDS3.LDS.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.DoacaoModel;
import LDS3.LDS.Repository.DoacaoRepository;
import LDS3.LDS.Request.CadastrarDoacaoRequest;
import LDS3.LDS.Service.DoacaoService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("doacao")
@CrossOrigin(origins = "http://localhost:5173")
public class DoacaoController {
    @Autowired
    private DoacaoRepository doacaoRepository;

    @Autowired
    private DoacaoService doacaoService;    


    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody @Valid CadastrarDoacaoRequest doacaoRequest){
        return doacaoService.cadastrarDoacao(doacaoRequest);
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
