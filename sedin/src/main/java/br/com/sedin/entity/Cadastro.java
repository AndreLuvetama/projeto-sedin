package br.com.sedin.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.convert.Jsr310Converters;

@Entity
@Table(name = "tb_cadastro")
public class Cadastro {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nomeCompleto")
	private String nameCompleto;
	
	@Column(name = "nomeUsuario")
	private String nomeUsuario;	
	@Column(name = "email")
	private String email;
	@Column(name = "senha")
	private String senha;
	@Column(name = "dataNasc")
	private Date dataNasc;
	@Column(name = "cpf")
	private String cpf;
	@Column(name = "dataCadastro")
	@Convert(converter = Jsr310Converters.LocalDateTimeToDateConverter.class)
	private LocalDate dataCadastro;
	
	
	
	public Cadastro() {}

	public Cadastro(Long id, String nameCompleto, String nomeUsuario, String email, String senha, Date dataNasc,
			String cpf, LocalDate dataCadastro) {
		this.id = id;
		this.nameCompleto = nameCompleto;
		this.nomeUsuario = nomeUsuario;
		this.email = email;
		this.senha = senha;
		this.dataNasc = dataNasc;
		this.cpf = cpf;
		this.dataCadastro = dataCadastro;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameCompleto() {
		return nameCompleto;
	}

	public void setNameCompleto(String nameCompleto) {
		this.nameCompleto = nameCompleto;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Date getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(Date dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public LocalDate getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(LocalDate dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	
	
	public TipoCadastro getTipo() {
		return tipo;
	}

	public void setTipo(TipoCadastro tipo) {
		this.tipo = tipo;
	}


	@Column(name = "tipo")
	@Enumerated(value = EnumType.STRING)
	private TipoCadastro  tipo;



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
		Cadastro other = (Cadastro) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Cadastro [id=" + id + ", nameCompleto=" + nameCompleto + ", nomeUsuario=" + nomeUsuario + ", email="
				+ email + ", senha=" + senha + ", dataNasc=" + dataNasc + ", cpf=" + cpf + ", dataCadastro="
				+ dataCadastro + ", tipo=" + tipo + "]";
	}
	
	
	
	
	
}
