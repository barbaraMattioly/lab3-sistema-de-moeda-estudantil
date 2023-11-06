package LDS3.LDS.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.ProfessorModel;
import LDS3.LDS.Repository.ProfessorRepository;

@RestController
@RequestMapping("professor")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfessorController {
    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping("/getQuantidadeMoedas/{id}")
    public ResponseEntity<?> cadastrar(@PathVariable Long id){
        Optional<ProfessorModel> professor = professorRepository.findById(id);
        
        if(!professor.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Professor não encontrados");
        }

        return ResponseEntity.status(HttpStatus.OK).body(professor.get().getqtdMoedas());
    }    
}
