package LDS3.LDS.Request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AlunoRequest(
                @NotBlank String nome,
                @NotBlank String cpf,
                @NotBlank String rg,
                @NotNull Long idInstituicao,
                @NotNull EnderecoRequest endereco,
                @NotBlank String email,
                @NotBlank String senha,
                @NotBlank String curso,
                @NotBlank String instituicao
                ) {
    
}
