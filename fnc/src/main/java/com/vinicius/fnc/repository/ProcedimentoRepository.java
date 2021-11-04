package com.vinicius.fnc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinicius.fnc.model.Procedimento;

public interface ProcedimentoRepository extends JpaRepository<Procedimento, Long> {

}