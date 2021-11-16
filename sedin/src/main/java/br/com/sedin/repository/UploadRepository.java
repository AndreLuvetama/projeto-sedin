package br.com.sedin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.sedin.entity.UploadFile;

@Repository
public interface UploadRepository extends JpaRepository<UploadFile, String> {

List<UploadFile> findAllByOrderByIdDesc();

}
