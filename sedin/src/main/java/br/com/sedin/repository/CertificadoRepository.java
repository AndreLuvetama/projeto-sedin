package br.com.sedin.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import br.com.sedin.entity.Certificado;

public interface CertificadoRepository extends JpaRepository<Certificado, Long>{
	Optional<Certificado> findById(Long id);
	boolean existsById(Long id);
		
	@Query(value ="SELECT cer.id, cer.dataCertificado FROM certificado cer JOIN cad.nomeCompleto, cad.cpf ON cad.id =:idCadastro JOIN "
			+ " cur.nomeCurso, cur.qtdeHoras, cur.dataCurso ON cur.id = :idCurso WHERE "
			+ "cer.dataCertificado = :localData", nativeQuery =true)
	Certificado findCadastroByDataCertificado(LocalDate localData); //Data certificado é data da relização do curso
	

}
