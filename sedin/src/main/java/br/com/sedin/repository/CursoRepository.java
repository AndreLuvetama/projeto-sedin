package br.com.sedin.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sedin.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	Curso findByNomeCurso(String nomeCurso);
	


}
