package LDS3.LDS.Request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record EnderecoRequest(
        @NotBlank String rua,
        @NotBlank String bairro,
        @NotNull int numero) {
}
