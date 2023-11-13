package LDS3.LDS.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Troca") 
public class TrocaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "alunoId", referencedColumnName = "id")
    private AlunoModel aluno;

    @ManyToOne
    @JoinColumn(name = "vantagemId", referencedColumnName = "id")
    private VantagemModel vantagem;

    private int valor;

    public Long getId() {
        return this.id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public AlunoModel getAluno(){
        return this.aluno;
    }
    public void setAluno(AlunoModel alunoModel){
        this.aluno = alunoModel;
    }

    public VantagemModel getvantagem(){
        return this.vantagem;
    }
    public void setvantagem(VantagemModel vantagem){
        this.vantagem = vantagem;
    }

    public int getValor(){
        return this.valor;
    }
    public void setValor(int valor){
        this.valor = valor;
    }

}
