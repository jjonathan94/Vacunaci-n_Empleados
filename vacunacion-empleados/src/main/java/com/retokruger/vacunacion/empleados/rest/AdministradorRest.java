package com.retokruger.vacunacion.empleados.rest;

import java.net.URI;
import java.util.List;

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
import com.retokruger.vacunacion.empleados.service.EmpleadoService;


@RestController
@RequestMapping ("/administrador")

public class AdministradorRest {
	
	@Autowired
	private EmpleadoService empleadoService;
	//private UsuarioService usuarioService;
	
	@CrossOrigin(origins = "*")
	@GetMapping
	private ResponseEntity<List<Empleado>> listarEmpleados (){
		return ResponseEntity.ok(empleadoService.findAll());
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping
	private ResponseEntity<Empleado> registrarEmpleado (@RequestBody Empleado empleado){
		try {
			Empleado empleadoGuardado = empleadoService.save(empleado);
			return ResponseEntity.created(new URI("/empleados/"+empleadoGuardado.getId())).body(empleadoGuardado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}	
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
	
	@CrossOrigin(origins = "*")
	@DeleteMapping (value = "/eliminar/{id}")
	private ResponseEntity<Boolean> borrarEmpleado (@PathVariable ("id") Long id){
		empleadoService.deleteById(id);
		return ResponseEntity.ok(!(empleadoService.findById(id)!=null));
	}
	/*
	@CrossOrigin(origins = "*")
	@PostMapping(value = "/login/")
	private ResponseEntity<Optional<Usuarios>> login (@RequestBody Usuarios usuario){
		try {
			
			String email = usuario.getUsuario();
			String password = usuario.getPassword();
			
			//Optional<Usuarios> usuarioObtenido = usuarioService.findByUsuarioAndPassword(email, password);
			return ResponseEntity.ok(usuarioService.findByUsuarioAndPassword(email, password));
					//ResponseEntity.created(new URI("/login/"+usuarioObtenido.getId())).body(empleadoGuardado);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}	
	}
	*/

}
