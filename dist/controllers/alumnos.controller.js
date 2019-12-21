"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
function getAlumnos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const coneccion = yield database_1.connect();
        const alumnos = yield coneccion.query('select id_alumno, nombre_alumno, promedio_alumno, situacion_alumno from alumnos');
        return res.json(alumnos[0]);
    });
}
exports.getAlumnos = getAlumnos;
function createAlumno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newAlumno = req.body;
        const coneccion = yield database_1.connect();
        newAlumno.promedio_alumno = (newAlumno.nota1_alumno + newAlumno.nota2_alumno + newAlumno.nota3_alumno + newAlumno.nota4_alumno) / 4;
        if (newAlumno.promedio_alumno >= 4) {
            newAlumno.situacion_alumno = 'Aprobado';
        }
        else if (newAlumno.promedio_alumno >= 2.95 && newAlumno.promedio_alumno < 3.95) {
            newAlumno.situacion_alumno = 'Examen';
        }
        else {
            newAlumno.situacion_alumno = 'Reprobado';
        }
        yield coneccion.query('insert into alumnos set ?', [newAlumno]);
        const datos_alumno = yield coneccion.query('select id_alumno, nombre_alumno, nota1_alumno, nota2_alumno, nota3_alumno, nota4_alumno from alumnos where nombre_alumno = ?', [newAlumno.nombre_alumno]);
        return res.json({
            message: 'Alumno ingresado correctamente',
            'Datos del alumno ingresado': datos_alumno[0]
        });
    });
}
exports.createAlumno = createAlumno;
function getAlumno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.alumnoid;
        const coneccion = yield database_1.connect();
        const alumno = yield coneccion.query('select nombre_alumno, promedio_alumno, situacion_alumno from alumnos where id_alumno = ?', [id]);
        return res.json(alumno[0]);
    });
}
exports.getAlumno = getAlumno;
function deleteAlumno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.alumnoid;
        const coneccion = yield database_1.connect();
        yield coneccion.query('delete from alumnos where id_alumno = ?', [id]);
        return res.json({
            message: 'Alumno eliminado correctamente',
            'Se elimino el alumno con el id: ': [id]
        });
    });
}
exports.deleteAlumno = deleteAlumno;
function updateAlumno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.alumnoid;
        const updateAlumno = req.body;
        updateAlumno.promedio_alumno = (updateAlumno.nota1_alumno + updateAlumno.nota2_alumno + updateAlumno.nota3_alumno + updateAlumno.nota4_alumno) / 4;
        if (updateAlumno.promedio_alumno >= 4) {
            updateAlumno.situacion_alumno = 'Aprobado';
        }
        else if (updateAlumno.promedio_alumno >= 2.95 && updateAlumno.promedio_alumno < 3.95) {
            updateAlumno.situacion_alumno = 'Examen';
        }
        else {
            updateAlumno.situacion_alumno = 'Reprobado';
        }
        const coneccion = yield database_1.connect();
        yield coneccion.query('update alumnos set ? where id_alumno = ?', [updateAlumno, id]);
        return res.json({
            message: 'Alumno actualizado correctamente',
            'Se actualizo el alumno con el id: ': [id]
        });
    });
}
exports.updateAlumno = updateAlumno;
