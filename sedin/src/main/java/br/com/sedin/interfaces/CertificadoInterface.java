package br.com.sedin.interfaces;

import java.time.LocalDate;

import br.com.sedin.dto.CertificadoDTO;
import br.com.sedin.entity.Certificado;

public interface CertificadoInterface {
	Certificado buscarCertificadoPorId(Long id);
	CertificadoDTO emitirCertificado(CertificadoDTO dto, LocalDate dataLocal, Long idCadastro);

}
