package br.com.sedin.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.sedin.dto.CadastroDTO;
import br.com.sedin.dto.CursoDTO;
import br.com.sedin.entity.Cadastro;
import br.com.sedin.entity.Curso;
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
	

	@PostMapping
	public ResponseEntity<CursoDTO> salvar(@RequestBody CursoDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{/id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@RequestMapping(value = "/{nomeCurso}", method = RequestMethod.GET)
	public ResponseEntity<CursoDTO> buscarPorNome(@PathVariable String nomeCurso) {
		Curso curso = service.buscarCursoPorNome(nomeCurso);
		return ResponseEntity.ok().body(new CursoDTO(curso));
	}
	
	@RequestMapping(value = "/ultimoCurso", method = RequestMethod.GET)
	public ResponseEntity<CursoDTO> buscarUltimoCurso() {
		Curso curso = service.buscarUltimoCurso();
		return ResponseEntity.ok().body(new CursoDTO(curso));
	}


	@RequestMapping(value = "/cursoId/{id}", method = RequestMethod.GET)
	public ResponseEntity<CursoDTO> buscarPorId(@PathVariable Long id) {
		Curso curso = service.buscarCursoPorId(id);
		return ResponseEntity.ok().body(new CursoDTO(curso));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deletarCurso(@PathVariable Long id) {
		service.deletarCurso(id);
		return ResponseEntity.noContent().build();
	}



	@PutMapping(value = "/{id}")
	public ResponseEntity<Curso> update(@PathVariable @RequestBody Curso curso, Long id) {			
		curso = service.update(curso, id);
			return ResponseEntity.ok().body(curso);

	}
	

}
