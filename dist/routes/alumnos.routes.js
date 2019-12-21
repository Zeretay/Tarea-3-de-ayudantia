"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnos_controller_1 = require("../controllers/alumnos.controller");
const router = express_1.Router();
router.route('/')
    .get(alumnos_controller_1.getAlumnos)
    .post(alumnos_controller_1.createAlumno);
router.route('/:alumnoid')
    .get(alumnos_controller_1.getAlumno)
    .delete(alumnos_controller_1.deleteAlumno)
    .put(alumnos_controller_1.updateAlumno);
exports.default = router;
