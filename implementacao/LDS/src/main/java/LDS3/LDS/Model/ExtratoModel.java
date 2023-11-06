package LDS3.LDS.Model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;

@Entity
@Table(name = "EXTRATO")
public class ExtratoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "alunoId", referencedColumnName = "id")
    private AlunoModel aluno;

    @OneToOne
    @JoinColumn(name = "professorId", referencedColumnName = "id")
    private ProfessorModel professor;

    private double valor;
    private String descricao;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AlunoModel getAluno() {
        return this.aluno;
    }

    public void setAluno(AlunoModel aluno) {
        this.aluno = aluno;
    }

    public ProfessorModel getProfessor() {
        return this.professor;
    }

    public void setProfessor(ProfessorModel professor) {
        this.professor = professor;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
