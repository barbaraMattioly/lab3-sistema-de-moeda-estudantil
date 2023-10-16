package LDS3.LDS.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.EmpresaModel;

@Repository
public interface EmpresaRepository extends JpaRepository<EmpresaModel, Long>{
    public Optional<EmpresaModel> findByEmailAndSenha(String email, String senha);
}