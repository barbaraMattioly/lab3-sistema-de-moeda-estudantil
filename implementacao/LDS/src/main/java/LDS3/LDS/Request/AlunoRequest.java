package LDS3.LDS.Request;

import jakarta.validation.constraints.NotBlank;

public record AlunoRequest(
                @NotBlank String nome,
                @NotBlank String cpf,
                @NotBlank String rg,
                //@NotBlank String login,
                @NotBlank String endereco,
                @NotBlank String email,
                @NotBlank String senha,
                @NotBlank String curso,
                @NotBlank String instituicao
                ) {
    
}
