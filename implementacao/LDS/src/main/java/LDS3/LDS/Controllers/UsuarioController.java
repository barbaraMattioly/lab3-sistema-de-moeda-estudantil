package LDS3.LDS.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.EmpresaModel;
import LDS3.LDS.Repository.AlunoRepository;
import LDS3.LDS.Repository.EmpresaRepository;
import LDS3.LDS.Request.LoginRequest;
import LDS3.LDS.Response.LoginResponse;

@RestController
@RequestMapping("usuario")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.email();
        String senha = loginRequest.senha();
        Optional<AlunoModel> aluno = alunoRepository.findByEmailAndSenha(email, senha);

        if (aluno.isPresent()) {
            LoginResponse response = new LoginResponse(aluno.get(), null, "Aluno");
            return ResponseEntity.ok(response);
        } else {
            Optional<EmpresaModel> empresa = empresaRepository.findByEmailAndSenha(email, senha);

            if (empresa.isPresent()) {
                LoginResponse response = new LoginResponse(null, empresa.get(), "Empresa");
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não encontrado! Login ou senha inválidos");
            }
        }
    }    
}
