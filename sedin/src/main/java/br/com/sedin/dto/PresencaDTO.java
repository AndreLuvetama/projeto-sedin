package br.com.sedin.dto;

import java.time.LocalDateTime;

import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Curso;
import br.com.sedin.entity.Presenca;

public class PresencaDTO {
	private Long id;
	private LocalDateTime dataPresenca;
	private Cadastro cadastro;
	private Curso curso;
	
	public PresencaDTO() {}

	
	
	
	public PresencaDTO(Long id, LocalDateTime dataPresenca, Cadastro cadastro, Curso curso) {
		this.id = id;
		this.dataPresenca = dataPresenca;
		this.cadastro = cadastro;
		this.curso = curso;
	}

	public PresencaDTO(Presenca entity) {
		id = entity.getId();
		dataPresenca = entity.getDataPresenca();
		cadastro = entity.getCadastro();
		curso = entity.getCurso();
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

	public Cadastro getCadastro() {
		return cadastro;
	}

	public void setCadastro(Cadastro cadastro) {
		this.cadastro = cadastro;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}
	
}
