package LDS3.LDS.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "DOACAO")
public class DoacaoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "alunoId", referencedColumnName = "id")
    private AlunoModel aluno;

    @ManyToOne
    @JoinColumn(name = "professorId", referencedColumnName = "id")
    private ProfessorModel professor;

    private int valor;
    private String descricao;

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

    public ProfessorModel getProfessor(){
        return this.professor;
    }
    public void setProfessor(ProfessorModel professor){
        this.professor = professor;
    }

    public int getValor(){
        return this.valor;
    }
    public void setValor(int valor){
        this.valor = valor;
    }

    public String getDescricao(){
        return this.descricao;
    }
    public void setDescricao(String descricao){
        this.descricao = descricao;
    }    
    

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", aluno='" + getAluno() + "'" +
            ", professor='" + getProfessor() + "'" +
            ", valor='" + getValor() + "'" +
            ", descricao='" + getDescricao() + "'" +
            "}";
    }

}
