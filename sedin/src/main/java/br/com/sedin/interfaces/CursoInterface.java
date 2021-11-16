package br.com.sedin.interfaces;

import java.util.List;

import br.com.sedin.dto.CursoDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Curso;

public interface CursoInterface {	
	List<CursoDTO> findAll();
	void deletarCurso(Long id);
	Curso update( Long id, Curso curso );
	void updateCurso(Curso entity, Curso cadastro);
	Curso buscarCursoPorNome(String nomeCurso);
	Curso buscarCursoPorId(Long id);
	Curso buscarUltimoCurso();
	
}
