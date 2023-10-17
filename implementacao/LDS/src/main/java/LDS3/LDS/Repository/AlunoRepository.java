package LDS3.LDS.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.AlunoModel;

@Repository
public interface AlunoRepository extends JpaRepository<AlunoModel, Long>{
    public Optional<AlunoModel> findByEmailAndSenha(String email, String senha);
}
