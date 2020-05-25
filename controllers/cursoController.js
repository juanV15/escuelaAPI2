//cursoController.js (CONTROL DE LOS MODELOS DE LA BASE DE DATOS)
// const {Curso} = require ('../models/database/db');
const cursoModel=require('../models/cursosModel');//obtiene la ruta de los métodos

//exporta las funciones
exports.getAllCursos = getAllCursos;
exports.getCursoId = getCursoId;
// exports.getCursoClave = getCursoClave;
exports.deleteCursoId = deleteCursoId;
// exports.deleteCursoClave= deleteCursoClave;

//muestra cursos
function  getAllCursos (req,res){
	console.log("Entro");//para ver si entra al código
		cursoModel.findAll().then((cursos) =>{
			res.status(200).send(cursos);
		}).catch(err =>
		{
			res.status(500).send('No se encontraron Cursos');
		});
}
//muestra curso por ID
function getCursoId(req,res){
	console.log("Entro");//para ver si entra al código
	cursoModel.findById(req.params.id).then((curso) =>{
		res.status(200).send(curso);
	}).catch(err =>
	{
		res.status(500).send(`No se encontro el Curso `);
	});
}
// //muestra curso por CLAVE
// function getCursoClave(req,res){
// 	console.log("Entro");//para ver si entra al código
// 	cursoModel.findByClave(req.params.clave).then((curso) =>{
// 		res.status(200).send(curso);
// 	}).catch(err =>
// 	{
// 		res.status(500).send(`No se encontro el Curso `);
// 	});
// }
//borra curso por ID
function deleteCursoId(req,res){
	if(cursoModel.eraseId(req.params.id)){
		res.status(200).json({msg:`id: ${req.params.id} deleted succesfully`})
	} else {
		res.status(500). json({error:`could not delete id: ${req.params.id}`})
	}
}
// //borra curso por CLAVE
// function deleteCursoClave(req,res) {
// 	if(cursoModel.eraseClave(req.params.clave)){
// 		res.status(200).json({msg:`clave: ${req.params.clave} deleted succesfully`})
// 	} else {
// 		res.status(500). json({error:`could not delete matricula: ${req.params.clave}`})
// 	}
// }

// //crea curso POST
// function createCurso(req,res){
//     console.log(req.body);
// 	cursoModel.add(req.body).then((curso)=>{
// 		res.status(200).send(`Se creo el curso exitosamente`);
// 	}).catch(err =>{
// 		res.status(500).send(`No se pudo agregar el Curso: ${req.body}`);
// 	});
// }
// //actualiza estudiante PUT
// function updateCursoPut (req,res){
// 	cursoModel.savePut(req.body,req.params.id).then((curso)=>
// 	{
// 		res.status(200).send(`Se modifico el curso exitosamente`);
// 	}).catch(err =>
// 	{
// 		res.status(500).send(`No se pudo modificar el Curso: ${req.params.id}`);
// 	});
// }
