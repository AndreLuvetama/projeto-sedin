package br.com.sedin.controller;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import br.com.sedin.dto.PresencaDTO;
import br.com.sedin.entity.Presenca;


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
	
	
	// @RequestMapping(value = "/inserir", method = RequestMethod.POST )
	@PostMapping
	 public ResponseEntity salvar(@RequestBody PresencaDTO dto){		
			Presenca presenca = presencaService.converter(dto);
			 presenca = presencaService.marcarPresenca(presenca);
			 return ResponseEntity.ok(presenca);
			
			}
	
	
    @RequestMapping(value = "/presencaPorIdCadastro/{id}", method = RequestMethod.GET )
	public ResponseEntity<List<Presenca>> buscarPresencaPorId(@PathVariable Long id){
		List<Presenca> presenca = presencaService.buscarPresencaPorId(id);
		return ResponseEntity.ok(presenca);
	}
	
	@RequestMapping(value = "/presencaPorIdCadastroIdCurso/{idCurso}/{iCadastro}", method = RequestMethod.GET )
	public ResponseEntity<Presenca> buscarPresencaPorCursoCadastro(@PathVariable Long idCurso, @PathVariable Long iCadastro){
		Presenca presenca = presencaService.buscarPresencaPorCursoCadastro(idCurso, iCadastro);
		return ResponseEntity.ok(presenca);
	}
		
	
}
