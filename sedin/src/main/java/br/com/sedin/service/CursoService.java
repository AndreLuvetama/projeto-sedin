package br.com.sedin.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.com.sedin.dto.CursoDTO;
import br.com.sedin.entity.Curso;
import br.com.sedin.interfaces.CursoInterface;
import br.com.sedin.repository.CursoRepository;

@Service
public class CursoService implements CursoInterface {

	private CursoRepository repository;
	
	public CursoService(CursoRepository repository) {
		this.repository = repository;
	}
	@Override
	public Curso salvarCurso() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CursoDTO> findAll() {
		List<Curso> list = repository.findAll();		
		return list.stream().map(x -> new CursoDTO(x)).collect(Collectors.toList());
	}

}
