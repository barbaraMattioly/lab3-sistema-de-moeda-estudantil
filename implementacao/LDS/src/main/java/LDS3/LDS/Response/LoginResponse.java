package LDS3.LDS.Response;

import LDS3.LDS.Model.AlunoModel;
import LDS3.LDS.Model.EmpresaModel;

public record LoginResponse(
    AlunoModel aluno,
    EmpresaModel empresa,
    String tipoCadastro){
}