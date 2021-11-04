package com.vinicius.fnc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Exame {
	
	@Id
	@Column
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private String dataColeta;
	
	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private String dataEntrega;
	
	@Column
	private String paciente;
	
	@Column
	private String procedimento;

}
