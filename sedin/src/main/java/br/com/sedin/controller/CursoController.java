package br.com.sedin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sedin.dto.CursoDTO;
import br.com.sedin.service.CursoService;

@RestController
@RequestMapping(value = "/cursos")
public class CursoController {
	
	@Autowired
	private CursoService service;
	
	@GetMapping
	public ResponseEntity <List<CursoDTO>> findAll(){
		List<CursoDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);		
	}
	
	

}
