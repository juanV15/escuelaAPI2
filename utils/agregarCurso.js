const db = require('../models/database/db');

// db.Curso.create({
// 	nombre: 'JavaScript',
// 	clave: 2125,
// 	creditos: 7
// }).then(() => {
// 	console.log('Curso creado');
// }).catch(err => {
// 	console.log(err);
// }).then(() => {
// 	console.log('Cerrando conexion');
// 	db.sequelize;
// });

db.Curso.create({
	nombre: 'IA',
	clave: 11336,
	creditos: 8
}).then(() => {
	console.log('Curso creado');
}).catch(err => {
	console.log(err);
}).then(() => {
	console.log('Cerrando conexion');
	db.sequelize;
});
