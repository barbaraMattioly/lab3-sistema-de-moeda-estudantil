package LDS3.LDS.Model;

public class EmailModel {
    private String destino;
    private String mensagem;
    private String assunto;

    public String getDestino(){
        return this.destino;
    }
    public void setDestino(String destino){
        this.destino = destino;
    }
    
    public String getMensagem(){
        return this.mensagem;
    }
    public void setMensagem(String mensagem){
        this.mensagem = mensagem;
    }

    public String getAssunto(){
        return this.assunto;
    }
    public void setAssunto(String assunto){
        this.assunto = assunto;
    }


    @Override
    public String toString() {
        return "{" +
            " destino='" + getDestino() + "'" +
            ", mensagem='" + getMensagem() + "'" +
            ", assunto='" + getAssunto() + "'" +
            "}";
    }

}
