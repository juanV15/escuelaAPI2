//index.js (RUTAS)
const express = require ('express');
const router = express.Router();

const estudiantesController=require('../controllers/estudiantesController');
const cursosController=require('../controllers/cursoController');

router.use(express.json());

router.get('/estudiantes',estudiantesController.getAllEstudiante);//Obtiene todos los estudiantes
router.get('/estudiantes/:id',estudiantesController.getEstudianteId);//Obtiene estudiante por ID
// router.get('/estudiantes/:matricula',estudiantesController.getEstudianteMatricula);//Obtiene estudiante por MATRICULA
router.delete('/estudiantes/:id',estudiantesController.deleteEstudianteId);//Borra estudiante por ID
// router.delete('/estudiantes/:matricula',estudiantesController.deleteEstudianteMatricula);//Borra estudiante por ID
// router.post('/estudiantes',estudiantesController.createEstudiante);//Crea estudiante
// router.put('/estudiantes/:id',estudiantesController.updateEstudiante);//actualiza estudiante por ID
// router.patch('/estudiantes/:id',estudiantesController.updateEstudiante);//actualiza estudiante por ID

router.get('/cursos',cursosController.getAllCursos);//Obtiene cursos
router.get('/cursos/:id',cursosController.getCursoId);//Obtiene curso por ID
// router.get('/cursos/:clave',cursosController.getCursoClave);//Obtiene curso por Clave
router.delete('/cursos/:id',cursosController.deleteCursoId);//Borra curso por ID
// router.delete('/cursos/:clave',cursosController.deleteCursoClave);//Borra curso por ID

//exporta el express
module.exports = router;

