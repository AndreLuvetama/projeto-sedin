package br.com.sedin.exception;




public class RegrasException2 extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public RegrasException2(Object id) {
		super("Resource not found. Id " + id);
		
	}

}
