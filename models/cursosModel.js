//cursosModel.js (MODELO PARA LA BASE DE DATOS)
const db = require ('../models/database/db');

//exporta los métodos
exports.findAll = findAll;
exports.findById = findById;
// exports.findByClave = findByClave;
exports.eraseId = eraseId;
// exports.eraseClave = eraseClave;


// exports.add=add;
// exports.savePut=savePut;

//busca cursos
async function findAll(){
	let cursos = await db.Curso.findAll();
	return cursos;
}
//busca cursos por ID
async function findById(id){
	let curso = await db.Curso.findAll(
	{
		where:
		{
			id:id
		}
	});
	return curso;
}
// //busca cursos por CLAVE
// async function findByClave(clave){
// 	let curso = await db.Curso.findAll({
// 		where:
// 			{
// 				clave: clave
// 			}
// 	});
// 	return curso;
// }
//borra curso por ID
async function eraseId(id){
	let curso = await db.Curso.destroy({
		where:  {
			      id: id
				}
		});
	return curso;
}
//
// //borra curso por CLAVE
// async function eraseClave(clave){
// 	let curso = await db.Curso.destroy({
// 		where:  {
// 			clave: clave
// 		}
// 	});
// 	return curso;
// }

// async function add (body){
// 	let curso = await db.Curso.create(
// 	{
// 		id:	body.id,
// 		nombre: body.nombre,
// 		clave: body.clave,
// 		creditos:body.creditos
// 	});
// 	return curso;
//
// }
// async function savePut (body,id){
// 	let curso = await db.Curso.update(
// 	{
// 		id:	body.id,
// 		nombre: body.nombre,
// 		clave: body.clave,
// 		creditos:body.creditos
// 	},
// 	{ where:
// 		{
// 			id: id
// 		}
// 	});
// 	return curso;
// }


