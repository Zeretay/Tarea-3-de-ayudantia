import { Router } from 'express';

import { getAlumnos, createAlumno, getAlumno, deleteAlumno, updateAlumno } from '../controllers/alumnos.controller';

const router = Router();


router.route('/')
    .get(getAlumnos)
    .post(createAlumno);

router.route('/:alumnoid')
    .get(getAlumno)
    .delete(deleteAlumno)
    .put(updateAlumno);

export default router;