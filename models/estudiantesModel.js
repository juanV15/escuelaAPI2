// estudiantesModel.js (MODELO PARA LA BASE DE DATOS)
const db = require ('../models/database/db');

//exporta los métodos
exports.findAll = findAll;
exports.findById = findById;
// exports.findByMatricula = findByMatricula;
exports.eraseId = eraseId;
// exports.eraseMatricula = eraseMatricula;

//busca estudiantes
async function findAll(){
    let estudiantes = await db.Estudiante.findAll();
    return estudiantes;
}
//busca estudiante por ID
async function findById(id){
    let estudiante = await db.Estudiante.findAll({
        where:{
               id : id
              }
    });
    return estudiante;
}
// //busca estudiante por Matricula
// async function findByMatricula(matricula){
//     let estudiante = await db.Estudiante.findAll({
//         where: {
//                  matricula: matricula
//                }
//     });
//     return estudiante;
// };
//borra estudiante por ID
async function eraseId(id) {
    let estudiante = await db.Estudiante.destroy({
        where: {
                 id: id
               }
    });
    return estudiante;
};
// //borra estudiante por MATRICULA
// async function eraseMatricula(matricula) {
//     let estudiante = await db.Estudiante.destroy({
//         where: {
//             matricula: matricula
//         }
//     });
//     return estudiante;
// };

// async function findbyMatricula(mat){
//     let estudiante = await db.Estudiante.findAll({
//         where:
//             {
//                 matricula:mat
//             }
//     });
//
//     let cursos =await estudiante[0].getCursos();
//     let listaEstudiantes=[];
//
//     for (let i=0;i<cursos.length;i++)
//     {
//         cursos[i]='http://localhost:4000/cursos/'+cursos[i].id;
//     }
//     for(let j=0;j<estudiante.length;j++)
//     {
//         listaEstudiantes[j]=
//             {
//                 "id": estudiante[j].id,
//                 "nombre": estudiante[j].nombre,
//                 "matricula": estudiante[j].matricula,
//                 "semestreIngreso":estudiante[j].semestreIngreso,
//                 "creditosCursados":estudiante[j].creditosCursados,
//                 "cursos":cursos
//             };
//     }
//     return listaEstudiantes;
// }
//
// async function findAll(){
//     let estudiantes = await db.Estudiante.findAll();
//     let listaEstudiantes=[];
//
//     for(let j=0;j<estudiantes.length;j++){
//         let cursos=await estudiantes[j].getCursos();
//
//         if(cursos.length!=0){
//             for (let i=0;i<cursos.length;i++){
//                 cursos[i]='http://localhost:4000/cursos/'+cursos[i].id;
//             }
//         }
//
//         listaEstudiantes[j]={
//             "id":   estudiantes[j].id,
//             "nombre": estudiantes[j].nombre,
//             "matricula": estudiantes[j].matricula,
//             "semestreIngreso":estudiantes[j].semestreIngreso,
//             "creditosCursados":estudiantes[j].creditosCursados,
//             "cursos":cursos
//
//
//         };
//     }
//
//     return listaEstudiantes;
//
// // };
// async function savePut (body,identificador){
//     let estudiante=await db.Estudiante.update({
//             id: body.id,
//             nombre: body.nombre,
//             matricula: body.matricula,
//             semestreIngreso:body.semestreIngreso,
//             creditosCursados:body.creditosCursados
//         },
//         { where:
//                 {
//                     id: identificador
//                 }
//         });
//     return estudiante;
// }
//
// async function add(body){
//
//     let estudiante= await db.Estudiante.create({
//         id: body.id,
//         nombre: body.nombre,
//         matricula: body.matricula,
//         semestreIngreso:body.semestreIngreso,
//         creditosCursados:body.creditosCursados
//     });
//
//     return estudiante;
//
// }
// async function savePatch (body,identificador){
//     if(body.nombre!=undefined)
//     {
//         let estudiante=await db.Estudiante.update(
//             {
//                 nombre: body.nombre
//             },
//             { where:
//                     {
//                         id: identificador
//                     }
//             });
//     }
//     if(body.semestreIngreso!=undefined){
//         estudiante=await db.Estudiante.update(
//             {
//                 semestreIngreso: body.semestreIngreso
//             },
//             { where:
//                     {
//                         id: identificador
//                     }
//             });
//     }
//     if(body.creditosCursados!=undefined)
//     {
//         estudiante=await db.Estudiante.update(
//             {
//                 creditosCursados: body.creditosCursados
//             },
//             { where:
//                     {
//                         id: identificador
//                     }
//             });
//     }
//     return estudiante;
// }
// exports.add=add;
// exports.savePut=savePut;
// exports.erase = erase;
// exports.findByID = findByID;
// exports.findbyMatricula = findbyMatricula;
// // exports.findAll = findAll;
// exports.savePatch=savePatch;