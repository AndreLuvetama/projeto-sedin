package br.com.sedin.interfaces;

import java.util.List;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;

public interface CadastroInterfaces {
	Cadastro autenticar(String nomeUsuario, String senha);
	Cadastro autenticarEmail(String email, String senha);	
	Cadastro salvarCadastro(Cadastro cadastro);
	
	void validarEmail(String email);
	void recetarSenha(String senha);
	void validarNomeUsuario(String nomeUsuario);
    List<CadastroDTO> findAll();
}
