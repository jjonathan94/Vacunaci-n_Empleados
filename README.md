# Inventario de vacunación de empleados  
  Reto Kruger - Prueba Técnica  
  Este proyecto es una aplicación empresarial que permitirá llevar un registro del inventario del estado de vacunación de los empleados.  
    
  Desarrolador por Rafael Jiménez  
  Email: jhonledesma94@gmail.com  
  Celular: 0995541822  
  
## Arquitectura de la Aplicación  
  
    Navegador   |
      ↓   ↑     |
    React.js    |
      ↓   ↑     |Arquitectura FullStack
    SpringBoot  |
      ↓   ↑     |
    PostgreSQL  |
                
## Back End  
### Proceso de contrucción:  
1. Se presenta el diseño de la aplicación    
   
        Empleado Model      |
            ↓   ↑           |
        Empleado Respository|
           ↓   ↑            |SpringBoot Application
        Empleado Rest       |
           ↓   ↑            | 
        PostgreSQL          |
       
2. Ya definida la arquitectura y el diseño de la aplicación se crea el proyecto 'vacunacion-empleados'.
3. Se configura la base de datos en PostgreSQL y se define los roles de administrador y empleado.
4. En el proyecto se configura la conexion con la DB en las propiedades de la aplicacion.
5. Dentro del proyecto se define el Springdata JPA Entity Model.
6. Luego se define el SpringBoot JPA Repository.
7. Posteriormente se impelementan los Controller para el CRUD RestAPI.
8. Adicionalemnte se implementa la congiguración Swagger en donde se implementa un Docket para la documentación de las APIs

### Proceso de ejecución:
1. Una vez cargado el proyecto 'vacunacion-empleados' en SpringTools se ejecuta la aplicación.
2. Ya ejecutada la aplicación se puede acceder a la documentación de las APIs mediante la siguiente URL: http://localhost:8080/swagger-ui.html#/

## Front End  
### Proceso de contrucción:  
1. Estructura del proyecto:

    Navegador |
      ↓   ↑   |
    Componentes|
    Administrador{Login, Insertar, Actualizar, Listar, Eliminar}|
    Empleados {Login, Actualizar, Listar}|
      ↓   ↑ |
    SpringBoot RestAPIs|

### Proceso de ejecución:
1. Se clona el proyecto del repositorio de GitHub
2. Luego abrimos el editor de texto con: 'code .' desde la carpeta donde se ubica el proyecto mediante la terminal.
3. Y para ejecuta se diga el siguiente comando mediante la terminal: 'npm start'
4. Posteriormente direccionará al navegador con la siguiente direccón: http://localhost:3000/auth/login la cual finalmente desplegará la GUI de la aplicación.
