package br.com.sedin.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "tb_certificado")
public class Certificado implements Serializable {
	private static final long serialVersionUID = 1L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "dataCertificado")
	//@Convert(converter = Jsr310Converters.LocalDateTimeToDateConverter.class)
	private LocalDate dataCertificado = LocalDate.now();;
	
	@ManyToOne
	@JoinColumn(name = "idCadastro")
	private Cadastro cadastro;
	
	@ManyToOne
	@JoinColumn(name = "idCurso")
	private Curso curso;
	
	@ManyToOne
	@JoinColumn(name = "idPresenca")
	private Presenca presenca;
	
	public Certificado() {}

	public Certificado(Long id, LocalDate dataCertificado, Cadastro cadastro, Curso curso, Presenca presenca) {
		this.id = id;
		this.dataCertificado = dataCertificado;
		this.cadastro = cadastro;
		this.curso = curso;
		this.presenca = presenca;
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
		Certificado other = (Certificado) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Certificado [id=" + id + ", dataCertificado=" + dataCertificado + ", cadastro=" + cadastro + ", curso="
				+ curso + ", presenca=" + presenca + "]";
	}
	
	
}
