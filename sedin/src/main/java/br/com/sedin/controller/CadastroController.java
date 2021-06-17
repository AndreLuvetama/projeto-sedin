package br.com.sedin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.service.CadastroService;
import br.com.sedin.service.CadastroService111;

@RestController
@RequestMapping(value = "/cadastros")
public class CadastroController {
	
	@Autowired
	private CadastroService  service;
	/*
	 * public CadastroController(CadastroService service) { this.service = service;
	 * }
	 */
	
	@GetMapping
	public ResponseEntity<List<CadastroDTO>> findAll(){
		List<CadastroDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	
	/*
	 * public ResponseEntity salvar(@RequestBody CadastroDTO dto) { Cadastro
	 * cadastro = new Cadastro(); cadastro = dto.getNameCompleto();
	 * 
	 * 
	 * }
	 */
	
	

}
