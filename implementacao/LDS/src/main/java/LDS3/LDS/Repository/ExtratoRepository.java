package LDS3.LDS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.ExtratoModel;

@Repository
public interface ExtratoRepository extends JpaRepository<ExtratoModel, Long>{
    public Iterable<ExtratoModel> findByProfessor_Id(Long id);
    public Iterable<ExtratoModel> findByAluno_Id(Long id);
}
