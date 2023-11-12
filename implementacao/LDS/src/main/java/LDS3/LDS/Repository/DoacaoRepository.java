package LDS3.LDS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.DoacaoModel;

@Repository
public interface DoacaoRepository extends JpaRepository<DoacaoModel, Long>{
    public Iterable<DoacaoModel> findByProfessor_Id(Long id);
    public Iterable<DoacaoModel> findByAluno_Id(Long id);
}
