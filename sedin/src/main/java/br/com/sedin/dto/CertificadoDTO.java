package br.com.sedin.dto;

import java.time.LocalDate;

import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Certificado;
import br.com.sedin.entity.Curso;
import br.com.sedin.entity.Presenca;

public class CertificadoDTO {
	private Long id;
	private LocalDate dataCertificado;
	private Cadastro cadastro;
	private Curso curso;
	private Presenca presenca;
	
	public CertificadoDTO() {}

	public CertificadoDTO(Long id, LocalDate dataCertificado, Cadastro cadastro, Curso curso, Presenca presenca) {
		this.id = id;
		this.dataCertificado = dataCertificado;
		this.cadastro = cadastro;
		this.curso = curso;
		this.presenca = presenca;
	}
	
	public CertificadoDTO(Certificado entity) {
		id = entity.getId();
	    dataCertificado = entity.getDataCertificado();
		cadastro = entity.getCadastro();
		curso = entity.getCurso();
		presenca = entity.getPresenca();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDataCertificado() {
		return dataCertificado;
	}

	public void setDataCertificado(LocalDate dataCertificado) {
		this.dataCertificado = dataCertificado;
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

	public Presenca getPresenca() {
		return presenca;
	}

	public void setPresenca(Presenca presenca) {
		this.presenca = presenca;
	}
	
	

}
