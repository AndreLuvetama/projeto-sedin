package br.com.sedin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sedin.entity.Cadastro;

public interface CadastroRepository extends JpaRepository<Cadastro, Long>{
	/* Optional<Cadastro> findByEmail(String email); */
	boolean existsByEmail(String email);
	boolean existsByNomeUsuario(String nomeUsuario);
	
	Optional<Cadastro> findByEmail(String email);
	Optional<Cadastro> findByNomeUsuario(String nomeUsuario);
	
}
