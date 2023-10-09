package LDS3.LDS.Controllers;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.EmpresaModel;
import LDS3.LDS.Repository.EmpresaRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("empresa")
public class EmpresaController {
    @Autowired
    private EmpresaRepository empresaRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody @Valid EmpresaRepository empresaRequest){
        EmpresaModel empresaModel = new EmpresaModel();
        BeanUtils.copyProperties(empresaRequest, empresaModel);

        EmpresaModel empresaCadastrada = empresaRepository.save(empresaModel);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(empresaCadastrada);
    }

    @PutMapping("/update")
    public EmpresaModel upadateEmpresa(@RequestBody EmpresaModel updatedEmpresa){
        return empresaRepository.save(updatedEmpresa);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        empresaRepository.deleteById(id);
    }

    @GetMapping("/empresas")
    public Iterable<EmpresaModel> returnAll(){
       return empresaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<EmpresaModel> returnById(@PathVariable Long id){
       return empresaRepository.findById(id);
    }
}