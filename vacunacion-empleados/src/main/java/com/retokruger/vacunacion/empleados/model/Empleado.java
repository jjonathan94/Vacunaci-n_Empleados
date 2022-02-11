package com.retokruger.vacunacion.empleados.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "empleado")

public class Empleado {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private int cedula;
	private String nombre;
	private String apellido;
	private String correo;
	private Date fechanacimiento;
	private String direccion;
	private int telefonomovil;
	private String estadovacunacion;
	private String tipovacuna;
	private Date fechavacunacion;
	private int numerodosis;
	/*
	@OneToOne(mappedBy = "empleado")
    private Usuarios usuarios;
	*/

	public Empleado(int cedula, String nombre, String apellido, String correo, Date fechanacimiento, String direccion,
			int telefonomovil, String estadovacunacion, String tipovacuna, Date fechavacunacion, int numerodosis) {
		super();
		this.cedula = cedula;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.fechanacimiento = fechanacimiento;
		this.direccion = direccion;
		this.telefonomovil = telefonomovil;
		this.estadovacunacion = estadovacunacion;
		this.tipovacuna = tipovacuna;
		this.fechavacunacion = fechavacunacion;
		this.numerodosis = numerodosis;
		//this.usuarios = usuarios;
	}

	public Empleado() {
			
		}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCedula() {
		return cedula;
	}

	public void setCedula(int cedula) {
		this.cedula = cedula;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public Date getFechanacimiento() {
		return fechanacimiento;
	}

	public void setFechanacimiento(Date fechanacimiento) {
		this.fechanacimiento = fechanacimiento;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public int getTelefonomovil() {
		return telefonomovil;
	}

	public void setTelefonomovil(int telefonomovil) {
		this.telefonomovil = telefonomovil;
	}

	public String getEstadovacunacion() {
		return estadovacunacion;
	}

	public void setEstadovacunacion(String estadovacunacion) {
		this.estadovacunacion = estadovacunacion;
	}

	public String getTipovacuna() {
		return tipovacuna;
	}

	public void setTipovacuna(String tipovacuna) {
		this.tipovacuna = tipovacuna;
	}

	public Date getFechavacunacion() {
		return fechavacunacion;
	}

	public void setFechavacunacion(Date fechavacunacion) {
		this.fechavacunacion = fechavacunacion;
	}

	public int getNumerodosis() {
		return numerodosis;
	}

	public void setNumerodosis(int numerodosis) {
		this.numerodosis = numerodosis;
	}
	/*
	public Usuarios getUser() {
		return usuarios;
	}

	public void setUser(Usuarios user) {
		this.usuarios = usuarios;
	}
	*/
	
}
