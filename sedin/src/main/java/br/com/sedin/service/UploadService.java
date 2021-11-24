package br.com.sedin.service;


import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;


import br.com.sedin.entity.UploadFile;
import br.com.sedin.exception.RegrasException;
import br.com.sedin.repository.UploadRepository;

@Service
public class UploadService {

	
	@Autowired
	private UploadRepository uploadRepository;
	
	 public UploadFile salvar(MultipartFile file) throws IOException {
		    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		    UploadFile uploadFile = new UploadFile(fileName, file.getContentType(), file.getBytes());

		    return uploadRepository.save(uploadFile);
		  }

		  public UploadFile getFile(String id) {		    
		     return uploadRepository.findById(id).get();
		  }
		  
		  public Stream<UploadFile> getAllFiles() {
		    return uploadRepository.findAll().stream();
		  }
		  
		  public Stream<UploadFile> getAllByOrder() {
			    return uploadRepository.findAllByOrderByIdDesc().stream();
		  }
		  
			public void deleteArquivo(String id) {
				try {
					uploadRepository.deleteById(id);
				} catch (EmptyResultDataAccessException e) {
					throw new RegrasException("Id (" + id + ") não encontrado");
				} 
			}
		  
	
}
