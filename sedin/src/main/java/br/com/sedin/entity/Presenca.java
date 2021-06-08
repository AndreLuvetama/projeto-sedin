package br.com.sedin.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.convert.Jsr310Converters;

@Entity
@Table(name = "tb_presenca")
public class Presenca {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "dataPresenca")
	@Convert(converter = Jsr310Converters.LocalDateTimeToDateConverter.class)
	private LocalDate dataPresenca;
	
	@ManyToOne
	@JoinColumn(name = "idCadastro")
	private Cadastro cadastro;
	
	@ManyToOne
	@JoinColumn(name = "idCurso")
	private Curso curso;

	public Presenca() {}

	public Presenca(Long id, LocalDate dataPresenca, Cadastro cadastro, Curso curso) {
		this.id = id;
		this.dataPresenca = dataPresenca;
		this.cadastro = cadastro;
		this.curso = curso;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDataPresenca() {
		return dataPresenca;
	}

	public void setDataPresenca(LocalDate dataPresenca) {
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
		Presenca other = (Presenca) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Presenca [id=" + id + ", dataPresenca=" + dataPresenca + ", cadastro=" + cadastro + ", curso=" + curso
				+ "]";
	}
	
	
}
