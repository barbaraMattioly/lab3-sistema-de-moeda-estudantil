package LDS3.LDS.Repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.ProfessorModel;

@Repository
public interface ProfessorRepository extends JpaRepository<ProfessorModel, Long>{
    public Optional<ProfessorModel> findByEmailAndSenha(String email, String senha);    
}