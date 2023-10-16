package LDS3.LDS.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ENDERECO_ALUNO")
public class EnderecoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "idAluno", referencedColumnName = "id")
    private AlunoModel aluno;

    private String rua;
    private String bairro;
    private int numero;
    private String complemento;

    //#region GETTERS E SETTERS
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    
    public AlunoModel getAluno(){
        return this.aluno;
    }
    public void setAluno(AlunoModel aluno){
        this.aluno = aluno;
    }
    
    public String getRua(){
        return this.rua;
    }
    public void setRua(String rua){
        this.rua = rua;
    }
    
    public String getBairro(){
        return this.bairro;
    }
    public void setBairro(String bairro){
        this.bairro = bairro;
    }
    
    public int getNumero(){
        return this.numero;
    }
    public void setNumero(int numero){
        this.numero = numero;
    }

    public String getComplemento(){
        return this.complemento;
    }
    public void setComplemento(String complemento){
        this.complemento = complemento;
    }
    //#endregion
}
