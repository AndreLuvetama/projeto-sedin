package br.com.sedin.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.sedin.repository.CadastroRepository;

@SpringBootTest
@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class CadasatroServiceTeste {
	@Autowired
	CadastroService service;
	@Autowired
	CadastroRepository repository;
	
	@Test(expected = Test.None.class)
	public void validarEmail() {
		repository.deleteAll();
		
		service.validarEmail("andreluares30@gmail.com");
	}
	

}
