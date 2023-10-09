package LDS3.LDS.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.AlunoModel;

public interface AlunoRepository extends JpaRepository<AlunoModel, Long>{
    
}
