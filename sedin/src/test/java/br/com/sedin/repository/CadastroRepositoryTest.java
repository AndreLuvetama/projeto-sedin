package br.com.sedin.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import br.com.sedin.entity.Cadastro;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
public class CadastroRepositoryTest{
	
	@Autowired
	CadastroRepository repository;
	
	@Test
	public void verificarExistenciaDeEmail() {
		Cadastro cadastro = new Cadastro();
		cadastro.setNomeCompleto("Mbiyavanga");
		cadastro.setNomeUsuario("andre123");
		cadastro.setEmail("andreluares30@gmail.com");
		cadastro.setSenha("teste");
		cadastro.setCpf("23455594884");
		cadastro.setDataCadastro(null);
		cadastro.setDataNasc(null);		
		repository.save(cadastro);
		
		boolean result = repository.existsByEmail("andreluares30@gmail.com");
		
		Assertions.assertThat(result).isTrue();
		
	}
	
	public  void deveRetornarFalsoQuandoNaoHouverCadastroComEmail() {
		repository.deleteAll();
		boolean result = repository.existsByEmail("andreluar30@gmail.com");
		Assertions.assertThat(result).isFalse();
	}
	

	
}