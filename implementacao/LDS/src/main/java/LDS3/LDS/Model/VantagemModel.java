package LDS3.LDS.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table (name = "VANTAGEM")
public class VantagemModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "idEmpresa", referencedColumnName = "id")
    private EmpresaModel empresa;

    private String descricao;
    private int valor;
    private String nome;
    private String urlImagem;

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public EmpresaModel getEmpresa(){
        return empresa;
    }
    public void setEmpresa(EmpresaModel empresa){
        this.empresa = empresa;
    }

    public String getDescricao(){
        return descricao;
    }
    public void setDescricao(String descricao){
        this.descricao = descricao;
    }

    public int getValor(){
        return valor;
    }
    public void setValor(int valor){
        this.valor = valor;
    }

    public String getNome(){
        return nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }

    public String getUrlImagem(){
        return urlImagem;
    }
    public void setUrlImagem(String urlImagem){
        this.urlImagem = urlImagem;
    }
}
