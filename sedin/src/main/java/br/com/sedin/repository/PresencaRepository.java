package br.com.sedin.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sedin.entity.Presenca;

public interface PresencaRepository extends JpaRepository<Presenca, Long>{
	Presenca findByDataPresenca(Date dataPresenca);

}
