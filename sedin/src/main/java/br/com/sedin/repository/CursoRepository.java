package br.com.sedin.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.sedin.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	Curso findByNomeCurso(String nomeCurso);
	
	@Query(value ="SELECT *FROM tb_curso order by id desc limit 10", nativeQuery = true)
	List<Curso> listarCursos();
	
	 @Query(value =  "SELECT *FROM tb_curso order by id desc limit 1", nativeQuery = true)
	 Curso ultimoCurso();
	 
	 @Query(value =  "SELECT *FROM tb_curso order by id desc limit 10", nativeQuery = true)
	 List<Curso> cursosRealizadoss();
	 
	 @Query(value =  "SELECT *FROM tb_curso order by id desc limit 10", nativeQuery = true)
	 List<Curso>  cursosNrealizados();
	
	


}
