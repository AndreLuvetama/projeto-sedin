package br.com.sedin.interfaces;

import java.util.List;
import java.util.Optional;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;

public interface CadastroInterfaces {
	Cadastro autenticar(String nomeUsuario, String senha);
	Cadastro autenticarEmail(String email, String senha);	
	Cadastro salvarCadastro(Cadastro cadastro);
	CadastroDTO insert(CadastroDTO dto);
	CadastroDTO findByCpf(String cpf);
	Cadastro buscarPorNome(String nome);
	Cadastro buscarPorId(Long id);
	Cadastro findByEmail(String email);
	void deletarCadastro(Long id);
	Cadastro update(Long id, Cadastro cadastro);
	void updateCadastro(Cadastro entity, Cadastro cadastro);

	List<Cadastro>  findByTipoCadastro(Integer tipoCadastro);
	void validarEmail(String email);
	void recetarSenha(String senha);
	void validarNomeUsuario(String nomeUsuario);
    List<CadastroDTO> findAll();
	List<Cadastro> buscarTipoCadastro(Integer id);
	Optional<Cadastro> buscarPorId2(Long id);
}
