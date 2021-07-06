package br.com.sedin.controller;

import java.net.URI;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.sedin.dto.CertificadoDTO;
import br.com.sedin.service.CertificadoService;

@RestController
@RequestMapping(value = "certificado")
public class CertificadoController {
	
	@Autowired
	private CertificadoService certificadoService;
	
	public ResponseEntity<CertificadoDTO> salvar(@RequestBody CertificadoDTO dto, LocalDate localData, Long idCadastro){
		dto = certificadoService.emitirCertificado(dto, localData, idCadastro);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{/idCadastro}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	

}
