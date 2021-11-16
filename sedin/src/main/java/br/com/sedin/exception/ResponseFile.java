package br.com.sedin.exception;

import java.time.LocalDateTime;

public class ResponseFile {
	  private String name;
	  private String url;
	  private String type;
	  private long size;
	  //private String documento;
	  //private LocalDateTime datatime;

	  public ResponseFile(String name, String url, String type, long size) {
	    this.name = name;
	    this.url = url;
	    this.type = type;
	    this.size = size;
	   // this.datatime = datatime;
		//this.documento = documento;
	    
	  }

	  public String getName() {
	    return name;
	  }

	  public void setName(String name) {
	    this.name = name;
	  }

	  public String getUrl() {
	    return url;
	  }

	  public void setUrl(String url) {
	    this.url = url;
	  }

	  public String getType() {
	    return type;
	  }

	  public void setType(String type) {
	    this.type = type;
	  }

	  public long getSize() {
	    return size;
	  }

	  public void setSize(long size) {
	    this.size = size;
	  }

		/*

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	 * public LocalDateTime getDatatime() { return datatime; }
	 * 
	 * public void setDatatime(LocalDateTime datatime) { this.datatime = datatime; }
	 */
	  
	  
	}