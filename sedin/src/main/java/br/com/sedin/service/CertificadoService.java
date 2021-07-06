package br.com.sedin.service;

import java.time.LocalDate;
import java.util.Optional;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import br.com.sedin.dto.CertificadoDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Certificado;
import br.com.sedin.entity.Presenca;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.interfaces.CertificadoInterface;
import br.com.sedin.repository.CadastroRepository;
import br.com.sedin.repository.CertificadoRepository;
import br.com.sedin.repository.PresencaRepository;


@Service
public class CertificadoService implements CertificadoInterface{
	private CertificadoRepository repository;
	private PresencaRepository repositoryPresenca;
	private CadastroRepository repositoryCadastro;
	
	public CertificadoService(CertificadoRepository repository, PresencaRepository repositoryPresenca, CadastroRepository repositoryCadastro) {
		this.repository = repository;
		this.repositoryPresenca = repositoryPresenca;
		this.repositoryCadastro = repositoryCadastro;
	}
	
	@Override
	public Certificado buscarCertificadoPorId(Long id) {
		Optional<Certificado> certificado = repository.findById(id);
		if(!certificado.isPresent()) {
			throw new RegrasException("Certificado não encontrado");
		}
		return certificado.get();
	}
	
	public boolean confirmarPresenca(Long id) {
		return false;
	}
	
	
	//Salava o certificado do ultimo curso realizado e envia para tela ao mesmo tempo
	public CertificadoDTO emitirCertificado(CertificadoDTO dto, LocalDate localData, Long idCadastro) {	
		salvarCertificado(dto, idCadastro);
		if(salvarCertificado(dto, idCadastro) != null) {				
			throw new RegrasException("Dados não salvo");			
	 }
	     Certificado certificado = repository.findCadastroByDataCertificado(localData);
		return new CertificadoDTO(certificado);
	}
	
	@Transactional
	public CertificadoDTO salvarCertificado(CertificadoDTO dto, Long idCadastro) {
		Optional<Cadastro> existId = repositoryCadastro.findById(idCadastro);
		if (!existId.isPresent()) {
			throw new RegrasException("Falha na gravação dos dados");	
		}
		Certificado certificado = new Certificado(null, dto.getDataCertificado(), dto.getCadastro(), dto.getCurso(), dto.getPresenca());
		certificado = repository.save(certificado);
		return new CertificadoDTO(certificado);
	}

		
	


}
