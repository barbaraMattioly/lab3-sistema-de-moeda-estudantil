package LDS3.LDS.Request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record VantagemRequest(
    @NotNull Long idEmpresa,
    @NotNull int valor,
    @NotEmpty String descricao,
    @NotEmpty String nome,
    @NotEmpty String base64Imagem){
}