package br.com.sedin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;

public interface CadastroRepository extends JpaRepository<Cadastro, Long>{
	/* Optional<Cadastro> findByEmail(String email); */
	boolean existsByEmail(String email);
	boolean existsByCpf(String cpf);
	boolean existsByNomeUsuario(String nomeUsuario);
	boolean existsById(Long id);
	

    Optional<Cadastro> findByEmail(String email);
	Cadastro findByNomeUsuario(String nomeUsuario);
	CadastroDTO findByCpf(String cpf);
	//Cadastro findByEmail(String email);
	
}
