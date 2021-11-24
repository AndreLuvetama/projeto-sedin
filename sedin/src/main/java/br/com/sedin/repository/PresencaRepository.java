package br.com.sedin.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import br.com.sedin.entity.Presenca;

public interface PresencaRepository extends JpaRepository<Presenca, Long>{
	Presenca findByDataPresenca(Date dataPresenca);
	
	@Query(value ="SELECT * FROM TB_PRESENCA WHERE ID_CADASTRO = :id", nativeQuery =true)
	List<Presenca> findPresencaByIdCadastro(Long id);
	
	@Query(value ="SELECT * FROM TB_PRESENCA WHERE ID_CURSO = :cursoId AND ID_CADASTRO = :cadastroId", nativeQuery =true)
	Presenca findPresencaByIdCursoAndCadastro(Long cadastroId, Long cursoId);
	
	
	//List<Presenca> findPresencaByIdCursoAndCurso(Long idCurso, Long idCadastro);
	@Query(value ="SELECT * FROM TB_PRESENCA WHERE ID_CURSO = :cursoId AND ID_CADASTRO = :cadastroId", nativeQuery =true)
	Optional<Presenca>  findPresencaByIdCursoAndCadastro2(Long cadastroId, Long cursoId);
}
