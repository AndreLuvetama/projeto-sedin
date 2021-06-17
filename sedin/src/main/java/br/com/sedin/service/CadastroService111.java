package br.com.sedin.service;

import org.springframework.stereotype.Service;

import br.com.sedin.entity.Cadastro;

@Service
public interface CadastroService111 {
	Cadastro autenticar(String nomeUsuario, String senha);
	Cadastro autenticarEmail(String email, String senha);	
	Cadastro salvarCadastro(Cadastro cadastro);
	
	void validarEmail(String email);
	void recetarSenha(String senha);
	void validarNomeUsuario(String nomeUsuario);
	

	

}
