package br.com.sedin.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.service.CadastroService;

@RestController
@RequestMapping(value = "/cadastros")
public class CadastroController {

	@Autowired
	private CadastroService service;
	/*
	 * public CadastroController(CadastroService service) { this.service = service;
	 * }
	 */

	@GetMapping
	public ResponseEntity<List<CadastroDTO>> findAll() {
		List<CadastroDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<CadastroDTO> salvar(@RequestBody CadastroDTO dto) { 
		   dto = service.insert(dto);
		   URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{/id}").buildAndExpand(dto.getId()).toUri();
		   return ResponseEntity.created(uri).body(dto);	  
	  }
	 

}
