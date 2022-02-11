package com.retokruger.vacunacion.empleados.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retokruger.vacunacion.empleados.model.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long>{

}
