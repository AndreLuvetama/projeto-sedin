package br.com.sedin.controller;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.sedin.dto.CertificadoDTO;
import br.com.sedin.dto.CursoDTO;
import br.com.sedin.dto.PresencaDTO;
import br.com.sedin.entity.Presenca;
import br.com.sedin.service.CertificadoService;
import br.com.sedin.service.PresencaService;



@RestController
@RequestMapping(value = "/presenca")
public class PresencaController {

	
	@Autowired
	private PresencaService presencaService;
	
	
	@GetMapping
	public ResponseEntity<List<Presenca>> findAll(){
		List<Presenca> list = presencaService.findAll();
		return ResponseEntity.ok().body(list);		
	}
	
	@PostMapping
	public ResponseEntity salvar(@RequestBody PresencaDTO dto){		
	Presenca presenca = presencaService.converter(dto);
	 presenca = presencaService.marcarPresenca(presenca);
	 return ResponseEntity.ok(presenca);
	
	}
	
	
	
	
}
