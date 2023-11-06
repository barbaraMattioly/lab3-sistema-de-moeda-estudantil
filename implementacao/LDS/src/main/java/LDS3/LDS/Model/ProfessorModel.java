package LDS3.LDS.Model;

import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "PROFESSOR")
public class ProfessorModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String cpf;

    private String departamento;
    private int qtdMoeadas;

    @OneToOne
    @JoinColumn(name = "idInstituicao", referencedColumnName = "id")
    private InstituicaoModel instituicao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public int getQtdMoeadas() {
        return qtdMoeadas;
    }

    public void setQtdMoeadas(int qtdMoeadas) {
        this.qtdMoeadas += qtdMoeadas;
    }

}
