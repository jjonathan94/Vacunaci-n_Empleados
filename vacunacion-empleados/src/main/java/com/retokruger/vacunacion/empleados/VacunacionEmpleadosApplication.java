package com.retokruger.vacunacion.empleados;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class VacunacionEmpleadosApplication {

	public static void main(String[] args) {
		SpringApplication.run(VacunacionEmpleadosApplication.class, args);
	}

}
