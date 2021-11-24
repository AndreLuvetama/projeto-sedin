package br.com.sedin.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.sedin.dto.CursoDTO;
import br.com.sedin.entity.Curso;
import br.com.sedin.entity.Presenca;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.interfaces.CursoInterface;
import br.com.sedin.repository.CursoRepository;

@Service
public class CursoService implements CursoInterface {

	private CursoRepository repository;
	
	public CursoService(CursoRepository repository) {
		this.repository = repository;
	}

	@Transactional
	public CursoDTO insert(CursoDTO dto) {		
		Curso curso = new Curso(null, dto.getNomeCurso(), dto.getUrlCurso(), dto.getQtdeHoras(), dto.getDataCurso());		
		curso = repository.save(curso);
		return new CursoDTO(curso);
	}
	
	

	/*
	 * @Override
	 * 
	 * @Transactional public Curso salvarCurso(Curso curso) { return
	 * repository.save(curso); }
	 */

	/*
	 * @Override public List<CursoDTO> findAll() { List<Curso> list =
	 * repository.findAll(); return list.stream().map(x -> new
	 * CursoDTO(x)).collect(Collectors.toList()); }
	 */
	

	 @Override 
	 public List<CursoDTO> findAll() { 
		 List<Curso> list = repository.listarCursos(); 
		 return list.stream().map(x -> new  CursoDTO(x)).collect(Collectors.toList());
		 }
	 
	
	
	
	public void deletarCurso(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new RegrasException("Id (" + id + ") não encontrado");
		} 

	}
  	
	
	public Curso update( Long id, Curso curso) {
		Optional<Curso> existId = repository.findById(id);	
		if(!existId.isPresent()) {
			throw new RegrasException("Id" + id + "não encontrado, tente com outro");			
		}		
		Curso entity = repository.getOne(id);
		updateCurso(entity, curso);
		return repository.save(entity);
	}
	
	
	public void updateCurso(Curso entity, Curso curso) {
		entity.setDataCurso(curso.getDataCurso());
		entity.setNomeCurso(curso.getNomeCurso());
		entity.setQtdeHoras(curso.getQtdeHoras());
		entity.setUrlCurso(curso.getUrlCurso());
	}
	

	@Override
	public Curso buscarCursoPorNome(String nomeCurso) {
		Curso curso = repository.findByNomeCurso(nomeCurso);
		if (curso == null) {
			throw new RegrasException("Curso não encontrado");
		}
		return curso;

	}
	

	@Override
	public Curso buscarCursoPorId(Long id) {
		Optional<Curso> curso = repository.findById(id);
		if (!curso.isPresent()) {
			throw new RegrasException("Curso não encontrado");
		}
		return curso.get();

	}
	

	@Override
	public Curso buscarUltimoCurso() {		
		return repository.ultimoCurso();
	}
	

}
