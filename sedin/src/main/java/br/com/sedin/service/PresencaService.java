package br.com.sedin.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sedin.controller.CadastroController;
import br.com.sedin.dto.PresencaDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Curso;
import br.com.sedin.entity.Presenca;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.interfaces.PresencaInterface;
import br.com.sedin.repository.CadastroRepository;
import br.com.sedin.repository.PresencaRepository;

@Service
public class PresencaService implements PresencaInterface{	
	private PresencaRepository repository;
	private CadastroService cadastroService;
	private CursoService cursoService;

	@Autowired
	public PresencaService(PresencaRepository repository, CadastroService cadastroService, CursoService cursoService) {
		 this.repository = repository;
		 this.cadastroService =  cadastroService;
		 this.cursoService = cursoService;
	}
	
	
	@Override
	public Presenca listarPresencaPorData(Date dataPresenca) {
		
		Presenca presenca = repository.findByDataPresenca(dataPresenca);
		if(presenca == null) {
			throw new RegrasException("A busca não trouxe informações, tenta com outra data valida");
		}		
		return presenca;
	}

	/*
	 * @Transactional public Presenca marcarPresenca(PresencaDTO dto) { Presenca
	 * presenca = converter(dto);
	 * 
	 * return repository.save(presenca); }
	 */
	

	public Presenca converter(PresencaDTO dto) {
		Presenca presenca = new Presenca();
		
		presenca.setDataPresenca(dto.getDataPresenca());
		
		Curso curso  = cursoService.buscarCursoPorId(dto.getCurso());
		Cadastro cadastro = cadastroService.buscarPorId(dto.getCadastro());
		
		presenca.setCadastro(cadastro);
		presenca.setCurso(curso);
		return presenca;
	}

	
	/*
	 * @Override public List<PresencaDTO> findAll() { List<Presenca> list =
	 * repository.findAll(); return list.stream().map(x -> new
	 * PresencaDTO(x)).collect(Collectors.toList()); }
	 */


	@Override
	@Transactional
	public Presenca marcarPresenca(Presenca presenca) {		
		return repository.save(presenca);
	}


	@Override
	public List<Presenca> findAll() {
		return repository.findAll();
	
	}

}
