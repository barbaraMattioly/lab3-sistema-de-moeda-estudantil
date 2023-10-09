package LDS3.LDS.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import LDS3.LDS.Model.AlunoModel;

public interface AlunoRepository extends JpaRepository<AlunoModel, Long>{
    
}
