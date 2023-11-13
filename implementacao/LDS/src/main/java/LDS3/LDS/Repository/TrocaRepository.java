package LDS3.LDS.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import LDS3.LDS.Model.TrocaModel;

@Repository
public interface TrocaRepository extends JpaRepository<TrocaModel, Long>{
    public Iterable<TrocaModel> findByAluno_Id(Long id);
}
