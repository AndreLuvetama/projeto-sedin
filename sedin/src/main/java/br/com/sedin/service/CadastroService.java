package br.com.sedin.service;

import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.exception.ErroAutenticacao;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.interfaces.CadastroInterfaces;
import br.com.sedin.repository.CadastroRepository;

@Service
public class CadastroService implements CadastroInterfaces{
	private CadastroRepository repository;
	
	@Autowired
	public CadastroService(CadastroRepository repository) {
		super();
		this.repository = repository;
	}

	
	@Override
	public Cadastro autenticar(String nomeUsuario, String senha) {
		Optional<Cadastro> cadastro = repository.findByNomeUsuario(nomeUsuario);
		
		if(!cadastro.isPresent()) {
			throw new ErroAutenticacao("Usuário não encontrado");
		}
		
		if(!cadastro.get().getSenha().equals(senha)) {
			throw new ErroAutenticacao("Senha inválida");
		}
		return cadastro.get();
	}
	
	@Override
	public Cadastro autenticarEmail(String email, String senha) {
		Optional<Cadastro> cadastro = repository.findByEmail(email);
		
		if(!cadastro.isPresent()) {
			throw new ErroAutenticacao("Usuário não encontrado");
		}
		
		if(!cadastro.get().getSenha().equals(senha)) {
			throw new ErroAutenticacao("Senha inválida");
		}
		return cadastro.get();
	}

	@Override
	@Transactional
	public Cadastro salvarCadastro(Cadastro cadastro) {
		validarEmail(cadastro.getEmail()); //verifica se o email existe		
		return repository.save(cadastro);
	}

	@Override
	public void validarEmail(String email) {
		boolean existe = repository.existsByEmail(email);
		if(existe) {
			throw new RegrasException("Email já cadastrado, tente com outro");
		}
		
	}
	

	@Override
	public void validarNomeUsuario(String nomeUsuario) {
		boolean existe = repository.existsByNomeUsuario(nomeUsuario);
		if(existe) {
			throw new RegrasException("Nome de usuário já cadastrado, tente com outro");
		}
	}

	@Override
	public void recetarSenha(String senha) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public List<CadastroDTO> findAll() {
		List<Cadastro> list = repository.findAll();
		return list.stream().map(x -> new CadastroDTO(x)).collect(Collectors.toList());
	}

}
