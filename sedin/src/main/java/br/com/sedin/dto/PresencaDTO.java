package br.com.sedin.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Curso;
import br.com.sedin.entity.Presenca;

public class PresencaDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private LocalDateTime dataPresenca;
	private Long idCadastro;
	private Long idCurso;
	
	public PresencaDTO() {}

	
	
	/*
	 * public PresencaDTO(Long id, LocalDateTime dataPresenca, Cadastro cadastro,
	 * Curso curso) { this.id = id; this.dataPresenca = dataPresenca; this.cadastro
	 * = cadastro; this.curso = curso; }
	 * 
	 * public PresencaDTO(Presenca entity) { id = entity.getId();
	 * 
	 * dataPresenca = entity.getDataPresenca(); cadastro = entity.getCadastro();
	 * curso = entity.getCurso(); }
	 */

	public PresencaDTO(Long id, LocalDateTime dataPresenca, Long idCadastro, Long idCurso) {
		this.id = id;
		this.dataPresenca = dataPresenca;
		this.idCadastro = idCadastro;
		this.idCurso = idCurso;
	}

	public PresencaDTO(Presenca entity) {
		id = entity.getId();
		dataPresenca = entity.getDataPresenca();
		idCadastro = entity.getCadastro().getId();
		idCurso = entity.getCurso().getId();
		
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getDataPresenca() {
		return dataPresenca;
	}

	public void setDataPresenca(LocalDateTime dataPresenca) {
		this.dataPresenca = dataPresenca;
	}



	public Long getIdCadastro() {
		return idCadastro;
	}



	public void setIdCadastro(Long idCadastro) {
		this.idCadastro = idCadastro;
	}



	public Long getIdCurso() {
		return idCurso;
	}



	public void setIdCurso(Long idCurso) {
		this.idCurso = idCurso;
	}





	
}
