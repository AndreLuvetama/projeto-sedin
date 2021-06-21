package br.com.sedin.interfaces;

import java.util.List;

import br.com.sedin.dto.CursoDTO;
import br.com.sedin.entity.Curso;

public interface CursoInterface {
	
	Curso salvarCurso();
	List<CursoDTO> findAll();
	
}
