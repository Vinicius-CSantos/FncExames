package com.vinicius.fnc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vinicius.fnc.model.Paciente;


public interface PacienteRepository extends JpaRepository<Paciente, Long> {
}
