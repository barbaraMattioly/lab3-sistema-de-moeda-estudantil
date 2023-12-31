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

import LDS3.LDS.Model.TrocaModel;
import LDS3.LDS.Repository.TrocaRepository;
import LDS3.LDS.Request.TrocarItemRequest;
import LDS3.LDS.Service.TrocaService;

@RestController
@RequestMapping("troca")
@CrossOrigin(origins = "http://localhost:5173")
public class TrocaController {
    @Autowired
    private TrocaRepository trocaRepository;

    @Autowired
    private TrocaService trocaService;    

    @GetMapping("/listarAluno/{id}")
    public Iterable<TrocaModel> listarTrocasAluno(@PathVariable Long id){
        return trocaRepository.findByAluno_Id(id);
    }

    @PostMapping("trocarItem")
    public ResponseEntity<?> trocarItem(@RequestBody TrocarItemRequest trocaRequest){
        return trocaService.trocarItem(trocaRequest);
    }
}