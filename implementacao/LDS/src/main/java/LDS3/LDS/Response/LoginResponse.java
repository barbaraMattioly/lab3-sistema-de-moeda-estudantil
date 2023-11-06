package LDS3.LDS.Response;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.EmpresaModel;
import LDS3.LDS.Model.ProfessorModel;

public record LoginResponse(
    AlunoModel aluno,
    EmpresaModel empresa,
    ProfessorModel professor,
    String tipoCadastro){
}