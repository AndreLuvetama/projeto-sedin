package br.com.sedin.enums;

public enum TipoCadastro {
	ADMIN(1),
	AFILIADO(2);
	
	
	private int code;
	
	private TipoCadastro(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}

	public static TipoCadastro valueOf(int code) {
		for (TipoCadastro value : TipoCadastro.values()) {
			if(value.getCode() == code) {
				return value;
			}
		}
		throw new IllegalArgumentException("Incalid TipoCadastro code");
	}
	
}
