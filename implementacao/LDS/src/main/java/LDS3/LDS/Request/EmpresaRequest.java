package LDS3.LDS.Request;

import jakarta.validation.constraints.NotBlank;

public record EmpresaRequest(
                @NotBlank String nome,
                @NotBlank String cnpj,
                @NotBlank String email,
                @NotBlank String senha
                        ) {
    
}
