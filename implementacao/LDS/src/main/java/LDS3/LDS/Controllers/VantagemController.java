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

import LDS3.LDS.Model.EmpresaModel;
import LDS3.LDS.Model.VantagemModel;
import LDS3.LDS.Repository.EmpresaRepository;
import LDS3.LDS.Repository.VantagemRepository;
import LDS3.LDS.Request.VantagemRequest;
import LDS3.LDS.Service.ImagemService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("vantagem")
@CrossOrigin(origins = "http://localhost:5173")
public class VantagemController {
    @Autowired
    private VantagemRepository vantagemRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private ImagemService imagemService;    

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody @Valid VantagemRequest vantagemRequest){
        VantagemModel vantagemModel = new VantagemModel();
        BeanUtils.copyProperties(vantagemRequest, vantagemModel);

        Optional<EmpresaModel> empresa = empresaRepository.findById(vantagemRequest.idEmpresa());
        String linkImagem = "";
        try {
            linkImagem = imagemService.uploadImages(vantagemRequest.base64Imagem());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar imagem");
        }

        if(!empresa.isPresent()){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Empresa não encontrada para o id" + vantagemRequest.idEmpresa());
        }

        vantagemModel.setEmpresa(empresa.get());
        vantagemModel.setUrlImagem(linkImagem);
        VantagemModel vantagem = vantagemRepository.save(vantagemModel);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(vantagem);
    }

    @GetMapping("/listar")
    public Iterable<VantagemModel> getVantagens(){
       return vantagemRepository.findAll();
    }

    @GetMapping("/listarEmpresa/{idEmpresa}")
    public Iterable<VantagemModel> vetVantagensEmpresa(@PathVariable Long idEmpresa){
       return vantagemRepository.findByEmpresa_Id(idEmpresa);
    }    

    @GetMapping("/listarDetalhes/{id}")
    public Optional<VantagemModel> getVantagem(@PathVariable Long id){
       return vantagemRepository.findById(id);
    }    


}
