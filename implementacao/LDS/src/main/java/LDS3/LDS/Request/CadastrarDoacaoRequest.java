package LDS3.LDS.Request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record CadastrarDoacaoRequest(
                @NotNull Long idAluno,
                @NotNull Long idProfessor,
                @NotNull int valor,
                @NotEmpty String descricao
                ) {
    
}
