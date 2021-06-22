package br.com.sedin.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;





/*Classe que trata dos erros do controller*/


@ControllerAdvice
public class ControllerExceptionHandler {
	
	@ExceptionHandler(RegrasException.class)
	public ResponseEntity<StandarError> objectNotFound(RegrasException e, HttpServletRequest request){		
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandarError err = new StandarError(System.currentTimeMillis(), 
				status.value(), "Não encontrado",
				e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(status).body(err);
	}

}
