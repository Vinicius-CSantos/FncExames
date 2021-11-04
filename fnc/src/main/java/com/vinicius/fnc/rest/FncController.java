package com.vinicius.fnc.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinicius.fnc.model.Exame;
import com.vinicius.fnc.model.Paciente;
import com.vinicius.fnc.model.Procedimento;
import com.vinicius.fnc.repository.ExameRepository;
import com.vinicius.fnc.repository.PacienteRepository;
import com.vinicius.fnc.repository.ProcedimentoRepository;

@RestController
@RequestMapping("/api/lab")
public class FncController {
	
	@Autowired
	private ExameRepository exameRepository;
	
	@Autowired
	private PacienteRepository pacienteRepository;
	
	@Autowired
	private ProcedimentoRepository procedimentoRepository;
	
	@GetMapping
	public List<Exame> Exames() {
		return this.exameRepository.findAll();
	}

	@PostMapping("/exameSalvo")
	public Exame exameSave (@RequestBody Exame exame) {
		return exameRepository.save(exame);
	}
	
	@PostMapping("/pacienteSalvo")
	public Paciente pacienteSave (@RequestBody Paciente paciente) {
		return pacienteRepository.save(paciente);
	}
	
	@PostMapping("/procedimentoSalvo")
	public Procedimento procedimentoSave (@RequestBody Procedimento procedimento) {
		return procedimentoRepository.save(procedimento);
	}

}
	
	