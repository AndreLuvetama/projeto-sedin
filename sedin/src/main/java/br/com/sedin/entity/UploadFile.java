package br.com.sedin.entity;


import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name  = "db_upload")
public class UploadFile {
	
	 @Id
	 @GeneratedValue(generator =  "uuid")
	 @GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	private String nome;
	private String type;
	//private String documento;
	
	/*
	 * @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss") private LocalDateTime datatime;
	 */
	
	@Lob
	private byte[] data;
	public UploadFile() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public UploadFile( String nome, String type, byte[] data) {
		this.nome = nome;
		this.type = type;
		this.data = data;
		//this.datatime = datatime;
		//this.documento = documento;
	}

	public String getId() {
		return id;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public byte[] getData() {
		return data;
	}
	public void setData(byte[] data) {
		this.data = data;
	}


	/*
	public String getDocumento() {
		return documento;
	}

	
	 * public void setDocumento(String documento) { this.documento = documento; }
	 * 
	 * public LocalDateTime getDatatime() { return datatime; }
	 * 
	 * public void setDatatime(LocalDateTime datatime) { this.datatime = datatime; }
	 */	

}
