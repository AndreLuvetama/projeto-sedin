package br.com.sedin.entity;

import java.io.Serializable;
import java.time.LocalDate;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "tb_curso")
public class Curso implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nomeCurso")
	private String nomeCurso;
	@Column(name = "urlCurso")
	private String urlCurso;
	@Column(name = "qtdeHoras")
	private Long qtdeHoras;
	@Column(name = "dataCurso")
	private LocalDate dataCurso;
	
	public Curso() {}

	public Curso(Long id, String nomeCurso, String urlCurso, Long qtdeHoras, LocalDate dataCurso) {
		this.id = id;
		this.nomeCurso = nomeCurso;
		this.urlCurso = urlCurso;
		this.qtdeHoras = qtdeHoras;
		this.dataCurso = dataCurso;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Curso other = (Curso) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Curso [id=" + id + ", nomeCurso=" + nomeCurso + ", urlCurso=" + urlCurso + ", qtdeHoras=" + qtdeHoras
				+ ", dataCurso=" + dataCurso + "]";
	}
	
	
	

}
