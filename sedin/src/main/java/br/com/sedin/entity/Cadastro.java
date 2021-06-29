package br.com.sedin.entity;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import br.com.sedin.enums.TipoCadastro;


@Entity
@Table(name = "tb_cadastro")
public class Cadastro implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nomeCompleto")
	private String nomeCompleto;
	
	@Column(name = "nomeUsuario")
	private String nomeUsuario;	
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "senha")
	private String senha;
	
	@Column(name = "dataNasc")
	private LocalDate dataNasc;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "dataCadastro")		
	private Instant dataCadastro;
	
	@Column(name = "tipoCadastro")
	private Integer tipoCadastro;
	
	public Cadastro() {}

	public Cadastro(Long id, String nomeCompleto, String nomeUsuario, String email, String senha, LocalDate  dataNasc,
			String cpf, Instant dataCadastro, TipoCadastro tipoCadastro) {
		this.id = id;
		this.nomeCompleto = nomeCompleto;
		this.nomeUsuario = nomeUsuario;
		this.email = email;
		this.senha = senha;
		this.dataNasc = dataNasc;
		this.cpf = cpf;
		this.dataCadastro = dataCadastro;
		setTipoCadastro(tipoCadastro);
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
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

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Instant getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Instant dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
		
	public TipoCadastro getTipoCadastro() {
		return TipoCadastro.valueOf(tipoCadastro);
	}

	public void setTipoCadastro(TipoCadastro tipoCadastro) {
		if(tipoCadastro != null) {
			this.tipoCadastro = tipoCadastro.getCode();
		}
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
		Cadastro other = (Cadastro) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
		
}
