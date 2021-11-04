package com.vinicius.fnc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vinicius.fnc.model.Exame;

public interface ExameRepository extends JpaRepository<Exame, Long>{
	
}
