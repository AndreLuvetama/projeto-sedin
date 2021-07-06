package br.com.sedin.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sedin.dto.PresencaDTO;
import br.com.sedin.entity.Presenca;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.interfaces.PresencaInterface;
import br.com.sedin.repository.PresencaRepository;

@Service
public class PresencaService implements PresencaInterface{	
	private PresencaRepository repository;

	@Autowired
	public PresencaService(PresencaRepository repository) {
		 this.repository = repository;
	}
	
	
	@Override
	public Presenca listarPresencaPorData(Date dataPresenca) {
		
		Presenca presenca = repository.findByDataPresenca(dataPresenca);
		if(presenca == null) {
			throw new RegrasException("A busca não trouxe informações, tenta com outra data valida");
		}		
		return presenca;
	}

	@Transactional
	public PresencaDTO marcarPresenca(PresencaDTO dto) {
		Presenca presenca = new Presenca(null, dto.getDataPresenca(), dto.getCadastro(), dto.getCurso());
		presenca = repository.save(presenca);
		return new PresencaDTO(presenca);
	}

	@Override
	public List<PresencaDTO> findAll() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Presenca marcarPresenca(Presenca presenca) {
		// TODO Auto-generated method stub
		return null;
	}

}
