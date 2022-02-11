package com.retokruger.vacunacion.empleados.rest;

import java.net.URI;
import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.retokruger.vacunacion.empleados.model.Empleado;
//import com.retokruger.vacunacion.empleados.model.LoginVo;
//import com.retokruger.vacunacion.empleados.model.Usuarios;
import com.retokruger.vacunacion.empleados.service.EmpleadoService;
//import com.retokruger.vacunacion.empleados.service.UsuarioService;


@RestController
@RequestMapping ("/empleados")
public class EmpleadoREST {
	
	@Autowired
	private EmpleadoService empleadoService;
	//private UsuarioService usuarioService;
	
	@CrossOrigin(origins = "*")
	@GetMapping
	private ResponseEntity<List<Empleado>> listarEmpleados (){
		return ResponseEntity.ok(empleadoService.findAll());
	}	
	
	
	@CrossOrigin(origins = "*")
	@PutMapping
	private ResponseEntity<Empleado> modificarEmpleado (@RequestBody Empleado empleado){
		try {
			Empleado empleadoGuardado = empleadoService.save(empleado);
			return ResponseEntity.created(new URI("/empleados/"+empleadoGuardado.getId())).body(empleadoGuardado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}	
	}
	

}
