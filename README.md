# Tarea-3-de-ayudantia
Integrantes: Nicolas Alarcon//Cristobal Morales//Israel Flores


la api rest esta realizada en nodejs con mysql, haciendo uso de typescript y javascript, sin embargo solo se trabajó el codigo
en typescript ya que haciendo uso del comando $ npm run build, el codigo de typescript se pasa a javascript automaticamente.

la api rest esta subida completamente, es decir no se necesitan descargar los modulos de node

instalacion de software necesario

	- instalar nodejs
	- instalar mysql workbench y el servidor de bdd

clonar

	git clone 
	cd  Tarea-3-ayudantia

crear la bdd

	ir a mysql workbench y ejecutar el script database.sql

configurar coneccion de bdd

	ir al archivo database.ts y poner en password la clave que se tiene
	y si el puerto de mysql workbench no esta por defecto (3306),
	agregar una linea despues de database con port: puerto y guardar

ejecucion

	npm run build
	node ./dist/index.js
	el puerto por defecto asociado es 4200

pruebas con la api

	cuando se realice una peticion post (http://localhost:4200/alumnos) debe tener la siguiente estructura
		
		{"nombre_alumno": "paula", 
		"nota1_alumno": 2.0, 
		"nota2_alumno": 3.0, 
		"nota3_alumno": 4.0, 
		"nota4_alumno": 6.0}
	
	la respuesta a esta peticion post debe ser

		{message: "Alumno ingresado correctamente",
		"Datos del alumno ingresado": 
			{"id_alumno": 1
			"nombre_alumno": "paula", 
			"nota1_alumno": 2.0, 
			"nota2_alumno": 3.0, 
			"nota3_alumno": 4.0, 
			"nota4_alumno": 6.0}}

	cuando se realice una peticion get (http://localhost:4200/alumnos) mostrara lo siguiente (muestra todos los alumnos)

		{"id_alumno": 1, 
		"nombre_alumno": "paula", 
		"promedio_alumno": 3.75 , 
		"situacion_alumno": "Examen"}

	para realizar una peticion get de 1 alumno (especifica), se debe agregar el id en el servidor,
	por ejemplo, seria http://localhost:4200/alumnos/1, con ello se mostrara solo el alumno con el id 1, esto
	debera entregar lo siguiente

		{"nombre_alumno": "paula", 
		"promedio_alumno": 3.75 , 
		"situacion_alumno": "Examen"}

	para realizar una peticion update (actualizar), se debe conocer el id del alumno (se consigue con el get que muestra a todos),
	con ello al igual que con el get de 1 alumno se debe colocar http://localhost:4200/alumnos/1 y colocar la siguiente informacion
	
		{"nombre_alumno": "nuevonombre", 
		"nota1_alumno": 1.0, 
		"nota2_alumno": 1.0, 
		"nota3_alumno": 7.0, 
		"nota4_alumno": 7.0}

	la respuesta a esto debera ser la siguiente

		 {message: "Alumno actualizado correctamente",
		  "Se actualizo el alumno con el id:" 1}

	para realizar una peticion put o delete (eliminar), se debe conocer el id del alumno (se consigue con el get que muestra a todos),
	con ello con ello al igual que con el get de 1 alumno se debe colocar http://localhost:4200/alumnos/1 y esto debera mostrar
	la siguiente respuesta

		{message: "Alumno eliminado correctamente",
		  "Se elimino el alumno con el id:" 1}
		  
		  
		  
#Modo de ejecutar con docker

Crea la imagen

	- docker build -t "nombre de imagen" .
	
Para ver las imagen

	- docker images
	
Para correr la imagen

	- docker run "nombre de imagen"

