package br.com.sedin.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "id not found")
public class Erro extends RuntimeException {
		private static final long serialVersionUID = 1L;
	public String message;

    public Erro(String message) {
        this.message = message;
    }

}
