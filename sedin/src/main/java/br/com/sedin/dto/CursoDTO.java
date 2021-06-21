package br.com.sedin.dto;

import java.time.LocalDate;

import br.com.sedin.entity.Curso;

public class CursoDTO {

	private Long id;
	private String nomeCurso;
	private String urlCurso;
	private Long qtdeHoras;
	private LocalDate dataCurso;
	
	public CursoDTO() {}

	public CursoDTO(Long id, String nomeCurso, String urlCurso, Long qtdeHoras, LocalDate dataCurso) {
		this.id = id;
		this.nomeCurso = nomeCurso;
		this.urlCurso = urlCurso;
		this.qtdeHoras = qtdeHoras;
		this.dataCurso = dataCurso;
	}
	
	public CursoDTO(Curso entity) {
		id = entity.getId();
		nomeCurso = entity.getNomeCurso();
		urlCurso = entity.getUrlCurso();
		qtdeHoras = entity.getQtdeHoras();
		dataCurso = entity.getDataCurso();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeCurso() {
		return nomeCurso;
	}

	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}

	public String getUrlCurso() {
		return urlCurso;
	}

	public void setUrlCurso(String urlCurso) {
		this.urlCurso = urlCurso;
	}

	public Long getQtdeHoras() {
		return qtdeHoras;
	}

	public void setQtdeHoras(Long qtdeHoras) {
		this.qtdeHoras = qtdeHoras;
	}

	public LocalDate getDataCurso() {
		return dataCurso;
	}

	public void setDataCurso(LocalDate dataCurso) {
		this.dataCurso = dataCurso;
	}


}

