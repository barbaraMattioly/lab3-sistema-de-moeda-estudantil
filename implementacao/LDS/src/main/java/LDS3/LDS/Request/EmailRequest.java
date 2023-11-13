package LDS3.LDS.Request;

public record EmailRequest(
        String destino,
        String mensagem,
        String assunto) {
}
