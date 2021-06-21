package br.com.sedin.dto;

import java.time.Instant;
import java.time.LocalDate;


import br.com.sedin.entity.Cadastro;
import br.com.sedin.enums.TipoCadastro;


public class CadastroDTO {
	private Long id;	
	private String nomeCompleto;
	private String nomeUsuario;		
	private String email;
	private String senha;	
	private LocalDate dataNasc;
	private String cpf;
	private Instant dataCadastro;
	private TipoCadastro tipoCadastro;
	
	public CadastroDTO() {
		
	}

	public CadastroDTO(Long id, String nomeCompleto, String nomeUsuario, String email, String senha, LocalDate dataNasc,
			String cpf, Instant dataCadastro, TipoCadastro tipoCadastro) {
		this.id = id;
		this.nomeCompleto = nomeCompleto;
		this.nomeUsuario = nomeUsuario;
		this.email = email;
		this.senha = senha;
		this.dataNasc = dataNasc;
		this.cpf = cpf;
		this.tipoCadastro = tipoCadastro;
	}
	
	//copia os dados de uma entidade para o DTO
	public CadastroDTO(Cadastro entity) {
		id = entity.getId();
		nomeCompleto = entity.getNomeCompleto();
		nomeUsuario = entity.getNomeUsuario();
		email = entity.getEmail();
		senha = entity.getSenha();
		dataNasc = entity.getDataNasc();
		cpf = entity.getCpf();
		dataCadastro = entity.getDataCadastro();
	    tipoCadastro = entity.getTipoCadastro();
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
		return tipoCadastro;
	}

	public void setTipoCadastro(TipoCadastro tipoCadastro) {
		this.tipoCadastro = tipoCadastro;
	}

}
