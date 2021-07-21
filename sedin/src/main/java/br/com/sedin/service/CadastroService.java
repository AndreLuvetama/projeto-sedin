package br.com.sedin.service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import antlr.RecognitionException;
import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.enums.TipoCadastro;
import br.com.sedin.exception.ErroAutenticacao;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.interfaces.CadastroInterfaces;
import br.com.sedin.repository.CadastroRepository;

@Service
public class CadastroService implements CadastroInterfaces {
	private CadastroRepository repository;

	@Autowired
	public CadastroService(CadastroRepository repository) {
		this.repository = repository;
	}

	@Override
	public Cadastro autenticar(String nomeUsuario, String senha) {
		Cadastro cadastro = repository.findByNomeUsuario(nomeUsuario);

		if (cadastro == null) {
			throw new RegrasException("Usuário não encontrado");
		}

		if (!cadastro.getSenha().equals(senha)) {
			throw new RegrasException("Senha inválida");
		}
		return cadastro;
	}

	@Override
	public Cadastro autenticarEmail(String email, String senha) {
		Optional<Cadastro> cadastro = repository.findByEmail(email);

		if (!cadastro.isPresent()) {
			throw new ErroAutenticacao("Usuário não encontrado");
		}

		if (!cadastro.get().getSenha().equals(senha)) {
			throw new ErroAutenticacao("Senha inválida");
		}
		return cadastro.get();
	}

	@Override
	@Transactional
	public Cadastro salvarCadastro(Cadastro cadastro) {
		validarEmail(cadastro.getEmail()); // verifica se o email existe
		return repository.save(cadastro);
	}

	@Override
	public void validarEmail(String email) {
		boolean existe = repository.existsByEmail(email);
		if (existe) {
			throw new RegrasException("Email já cadastrado, tente com outro");
		}

	}

	@Override
	public void validarNomeUsuario(String nomeUsuario) {
		boolean existe = repository.existsByNomeUsuario(nomeUsuario);
		if (existe) {
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

	@Transactional
	public CadastroDTO insert(CadastroDTO dto) {
		boolean existeEmail = repository.existsByEmail(dto.getEmail());
		if (existeEmail) {
			throw new RegrasException("Email já cadastrado, tente com outro");
		}
		boolean existeCPF = repository.existsByCpf(dto.getCpf());
		if (existeCPF) {
			throw new RegrasException("CPF já cadastrado, tente com outro");
		}

		Cadastro cadastro = new Cadastro(null, dto.getNomeCompleto(), dto.getNomeUsuario(), dto.getEmail(),
				dto.getSenha(), dto.getDataNasc(), dto.getCpf(), Instant.now(), TipoCadastro.AFILIADO);
		cadastro = repository.save(cadastro);
		return new CadastroDTO(cadastro);
	}

	@Override
	public Cadastro buscarPorNome(String nomeUsuario) {
		Cadastro cadastro = repository.findByNomeUsuario(nomeUsuario);
		if (cadastro == null) {
			throw new RegrasException("Nome do usuário não encontrado");
		}
		return cadastro;

	}

	@Override
	public CadastroDTO findByCpf(String cpf) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cadastro findByEmail(String email) {
		Optional<Cadastro> cadastro = repository.findByEmail(email);
		return cadastro.get();
	}

	public void deletarCadastro(Long id) {
		try {
			repository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {
			throw new RegrasException("Id (" + id + ") não encontrado");
		} catch (DataIntegrityViolationException e) {
			throw new RegrasException("Id com dependências(Certificado/Presença...) excluir primeiro as suas"
					+ " dependências");

		} 

	}
  
		
	public Cadastro update(Long id, Cadastro cadastro) {
		Optional<Cadastro> existId = repository.findById(id);	
		if(!existId.isPresent()) {
			throw new RegrasException("Id" + id + "não encontrado, tente com outro");			
		}		
		Cadastro entity = repository.getOne(id);
		updateCadastro(entity, cadastro);
		return repository.save(entity);
	}

	public void updateCadastro(Cadastro entity, Cadastro cadastro) {
		entity.setNomeCompleto(cadastro.getNomeCompleto());
		entity.setNomeUsuario(cadastro.getNomeUsuario());
		entity.setEmail(cadastro.getEmail());
		entity.setDataNasc(cadastro.getDataNasc());
		entity.setCpf(cadastro.getCpf());
	}

	@Override
	public Cadastro buscarPorId(Long id) {		
		Cadastro cadastro = repository.findById(id).orElse(null);
		if( cadastro == null) {
			throw new RegrasException("Id " + id + " não encontrado, tente com outro");
			
		}
		return cadastro;
	}

}
