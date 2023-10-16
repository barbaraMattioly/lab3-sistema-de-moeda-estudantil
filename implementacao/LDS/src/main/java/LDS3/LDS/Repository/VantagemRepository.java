package LDS3.LDS.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.VantagemModel;

@Repository
public interface VantagemRepository extends JpaRepository<VantagemModel, Long>{
    
}
