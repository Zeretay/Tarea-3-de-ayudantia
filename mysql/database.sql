create database if not exists universidad;

use universidad;

create table alumnos(
    id_alumno int not null auto_increment primary key,
    nombre_alumno varchar(30) default null,
    nota1_alumno float default null,
    nota2_alumno float default null,
    nota3_alumno float default null,
    nota4_alumno float default null,
    promedio_alumno float default null,
    situacion_alumno varchar(30) default null
);