package br.com.sedin.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import antlr.LexerSharedInputState;
import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;


@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long>{
	/* Optional<Cadastro> findByEmail(String email); */
	Optional<Cadastro> findById(Long id);
	boolean existsByEmail(String email);
	List<Cadastro> findByTipoCadastro(Integer tipoCadastro);
	boolean existsByCpf(String cpf);
	boolean existsByNomeUsuario(String nomeUsuario);
	boolean existsById(Long id);
	
	
	
	
	/*
	 * @Query(value = "SELECT  * FROM tb_cadastro where TIPO_CADASTRO = :id ",
	 * nativeQuery = true) Cadastro buscarTipoCadastro();
	 */
	 
	
    Optional<Cadastro> findByEmail(String email);
	Cadastro findByNomeUsuario(String nomeUsuario);
	CadastroDTO findByCpf(String cpf);
	//Cadastro findByEmail(String email);	
	
}
