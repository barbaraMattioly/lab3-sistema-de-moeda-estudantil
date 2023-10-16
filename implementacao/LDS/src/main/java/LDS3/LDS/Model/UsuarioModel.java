package LDS3.LDS.Model;

import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public class UsuarioModel {
    private String nome;
    private String email;
    private String senha;

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}