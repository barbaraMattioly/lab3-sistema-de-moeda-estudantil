package LDS3.LDS.Controllers;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.EmpresaModel;
import LDS3.LDS.Model.VantagemModel;
import LDS3.LDS.Repository.EmpresaRepository;
import LDS3.LDS.Repository.VantagemRepository;
import LDS3.LDS.Request.VantagemRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("vantagem")
@CrossOrigin(origins = "http://localhost:5173")
public class VantagemController {
    @Autowired
    private VantagemRepository vantagemRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody @Valid VantagemRequest vantagemRequest){
        VantagemModel vantagemModel = new VantagemModel();
        BeanUtils.copyProperties(vantagemRequest, vantagemModel);

        Optional<EmpresaModel> empresa = empresaRepository.findById(vantagemRequest.idEmpresa());

        if(!empresa.isPresent()){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Empresa não encontrada para o id" + vantagemRequest.idEmpresa());
        }

        vantagemModel.setEmpresa(empresa.get());
        VantagemModel vantagem = vantagemRepository.save(vantagemModel);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(vantagem);
    }

    @GetMapping("/listar")
    public Iterable<VantagemModel> getVantagens(){
       return vantagemRepository.findAll();
    }    
}
