package br.com.sedin.interfaces;

import java.util.Date;
import java.util.List;

import br.com.sedin.dto.PresencaDTO;
import br.com.sedin.entity.Presenca;

public interface PresencaInterface {
	Presenca listarPresencaPorData(Date dataPresenca);
	Presenca marcarPresenca(Presenca presenca);
	List<Presenca> findAll();

}
