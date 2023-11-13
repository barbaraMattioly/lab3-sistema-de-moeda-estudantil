package LDS3.LDS.Request;

import jakarta.validation.constraints.NotNull;

public record TrocarItemRequest(
        @NotNull Long idAluno,
        @NotNull Long idVantagem) {
}