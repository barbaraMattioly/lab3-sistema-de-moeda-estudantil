package LDS3.LDS.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.ExtratoModel;
import LDS3.LDS.Repository.ExtratoRepository;


@RestController
@RequestMapping("extrato")
@CrossOrigin(origins = "http://localhost:5173")
public class ExtratoController {
    @Autowired
    private ExtratoRepository extratoRepository;

    @GetMapping("/listar/{id}")
    public Iterable<ExtratoModel> returnAllProfessor(@PathVariable Long id){
        return extratoRepository.findByProfessor_Id(id);
    }

    @GetMapping("/listarAluno/{id}")
    public Iterable<ExtratoModel> returnAllAluno(@PathVariable Long id){
        return extratoRepository.findByAluno_Id(id);
    }
}
