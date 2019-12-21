import { Request, Response } from 'express';

import { connect } from '../database';
import { Alumno } from '../interface/alumnos.interface';

export async function getAlumnos(req : Request, res:Response): Promise<Response>{
    const coneccion = await connect();
    const alumnos = await coneccion.query('select id_alumno, nombre_alumno, promedio_alumno, situacion_alumno from alumnos');
    return res.json(alumnos[0]);
}

export async function createAlumno(req: Request, res: Response){
    const newAlumno: Alumno = req.body;
    const coneccion = await connect();
    newAlumno.promedio_alumno = (newAlumno.nota1_alumno + newAlumno.nota2_alumno + newAlumno.nota3_alumno + newAlumno.nota4_alumno) / 4;
    if (newAlumno.promedio_alumno >=4){
        newAlumno.situacion_alumno = 'Aprobado';
    }
    else if (newAlumno.promedio_alumno >=2.95 && newAlumno.promedio_alumno <3.95 ){
        newAlumno.situacion_alumno = 'Examen';
    }
    else{
        newAlumno.situacion_alumno = 'Reprobado';
    }
    await coneccion.query('insert into alumnos set ?', [newAlumno]);
    const datos_alumno = await coneccion.query('select id_alumno, nombre_alumno, nota1_alumno, nota2_alumno, nota3_alumno, nota4_alumno from alumnos where nombre_alumno = ?', [newAlumno.nombre_alumno]);
    return res.json({
        message: 'Alumno ingresado correctamente',
        'Datos del alumno ingresado': datos_alumno[0]
    });
}

export async function getAlumno(req : Request, res:Response): Promise<Response>{
    const id = req.params.alumnoid;
    const coneccion = await connect();
    const alumno = await coneccion.query('select nombre_alumno, promedio_alumno, situacion_alumno from alumnos where id_alumno = ?', [id]);
    return res.json(alumno[0]);
}

export async function deleteAlumno(req : Request, res:Response): Promise<Response>{
    const id = req.params.alumnoid;
    const coneccion = await connect();
    await coneccion.query('delete from alumnos where id_alumno = ?', [id]);
    return res.json({
        message: 'Alumno eliminado correctamente',
        'Se elimino el alumno con el id: ': [id]
    });
}

export async function updateAlumno(req : Request, res:Response){
    const id = req.params.alumnoid;
    const updateAlumno: Alumno = req.body;
    updateAlumno.promedio_alumno = (updateAlumno.nota1_alumno + updateAlumno.nota2_alumno + updateAlumno.nota3_alumno + updateAlumno.nota4_alumno) / 4;
    if (updateAlumno.promedio_alumno >=4){
        updateAlumno.situacion_alumno = 'Aprobado';
    }
    else if (updateAlumno.promedio_alumno >=2.95 && updateAlumno.promedio_alumno <3.95 ){
        updateAlumno.situacion_alumno = 'Examen';
    }
    else{
        updateAlumno.situacion_alumno = 'Reprobado';
    }
    const coneccion = await connect();
    await coneccion.query('update alumnos set ? where id_alumno = ?', [updateAlumno, id]);
    return res.json({
        message: 'Alumno actualizado correctamente',
        'Se actualizo el alumno con el id: ': [id]
    });
}