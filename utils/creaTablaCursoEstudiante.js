const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'escolar',
	'backenduser',
	'j0129sep15',
	{
		host: 'localhost',
		dialect: 'mysql'
	});

const EstudianteCursos = sequelize.define('estudianteCursos',{
	clave: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: false
	} ,
	matricula: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: false
	} 
	
});
EstudianteCursos.sync({ force: true});