use('TiendasD1');


// MATCH 
// db.ProveedoresOne.aggregate([
//     { $match : { Nombre : 'camilo Diaz', Telefono : '30122221234' } }
//   ]).pretty()


// db.Clientes.aggregate([
// { $match : { Nombre : 'Leonardo',Correo: 'Herreraleo320@gmail.com' } }
// ]).pretty()


// db.Productos.aggregate([
// { $match : { Pnombre : 'queso suizo', codigo: '0002' } }
// ]).pretty()


// PROJECTT

// db.ProveedoresNew.aggregate([
//     {
//         $project: {
//             _id: 1,
//             Nombre: 1,
//             Direccion: 1,
//             tipoProductos: 1
//         }
//     }
// ])

// db.ProveedoresNew.aggregate([
//     {
//         $project: {
//             _id: 1,
//             Nombre: 1,
//             Apellido: 0,
//             Correo: 0,
//             Edad:1
//         }
//     }
// ])

// db.Clientes.aggregate([
//     { $group : { _id : '$nombre', totaldocs : { $sum : 1 } } }
//   ]).pretty()

//   db.Productos.aggregate([
//     { $group : { _id : '$nombre', totaldocs : { $sum : 1 } } }
//   ]).pretty()

// //   db.Proveedores.aggregate([
// //     { $group : { _id : '$nombre', totaldocs : { $sum : 1 } } }
//   ]).pretty()


// OUT

// db.Clientes.aggregate([
//     { $group : { _id : '$nombre', totaldocs : { $sum : 1 } } },
//     { $out : 'nuevaBD' }
//   ])

//   db.nuevaBD.find().pretty()

//   db.Productos.aggregate([
//     { $group : { _id : '$nombre', totaldocs : { $sum : 1 } } },
//     { $out : 'nuevaBD' }
//   ])

//   db.nuevaBD.find().pretty()


//   db.Proveedores.aggregate([
//     { $group : { _id : '$nombre', totaldocs : { $sum : 1 } } },
//     { $out : 'nuevaBD' }
//   ])

//   db.nuevaBD.find().pretty()

//UNWIND

// db.ProveedoresA.aggregate([
//     { $match : { Nombre : 'Juan Perez' } },
//     { $unwind :'$Participantes'}
//   ]).pretty()

//   db.Productos.aggregate([
//     { $match : { categoria : 'bebes'} },
//     { $unwind :'$productos'}
//   ]).pretty()

//    db.Productos.aggregate([
//      { $match : { categoria : 'carnes frías'} },
//      { $unwind :'$productos'}
//    ]).pretty()


// SORT
// db.Productos.aggregate([
//     { $match : {categoria: 'bebes' } },
//     { $unwind : '$productos' },
//     { $project : {_id :0, 'productos.Pnombre' :1, 'productos.precio' :1,'productos.codigo':1,'productos.sede':1} },
//     { $sort : { 'productos.precio' : 1 } }
//   ]).pretty()

//   db.Productos.aggregate([
//     { $match : {categoria: 'carnes frías' } },
//     { $unwind : '$productos' },
//     { $project : {_id :0, 'productos.Pnombre' :1, 'productos.precio' :1,'productos.codigo':1,'productos.sede':1} },
//     { $sort : { 'productos.precio' : 1 } }
//   ]).pretty()

//   db.Productos.aggregate([
//     { $match : {categoria: 'animales' } },
//     { $unwind : '$productos' },
//     { $project : {_id :0, 'productos.Pnombre' :1, 'productos.precio' :1,'productos.codigo':1,'productos.sede':1} },
//     { $sort : { 'productos.precio' : 1 } }
//   ]).pretty()


//LIMIT
// db.ProveedoresA.aggregate([
//     { $match: { Nombre: 'Juan Perez' } },
//     { $unwind: '$Participantes' },
//     { $project: {
//         _id: 1,
//         'Participantes.Nombre': 1,
//         'Participantes.FechaCompra': 1
//     } },
//     { $sort: { 'Participantes.PrecioCompra': -1 } },
//     { $limit: 2 }
// ]).pretty()

// db.ProveedoresA.aggregate([
//     { $match: { Nombre: 'Luis Diaz' } },
//     { $unwind: '$Participantes' },
//     { $project: {
//         _id: 1,
//         'Participantes.Nombre': 1,
//         'Participantes.FechaCompra': 1
//     } },
//     { $sort: { 'Participantes.PrecioCompra': -1 } },
//     { $limit: 2 }
// ]).pretty()


// ADDFIELDS
// db.Productos.aggregate([
//     { $match : { categoria: 'bebes' } },
//     { $addFields : { tallaPañal:"2XL"} }
//   ]).pretty()
  
//   db.Productos.updateMany(
//   { categoria: 'bebes' } ,
//   { $set: {tallaPañal: "2XL" }}
//  );

//  db.Productos.aggregate([
//     { $match : { categoria: 'bebes' } },
//     { $addFields : { Etapa:"3"} }
//   ]).pretty()
  
//   db.Productos.updateMany(
//   { categoria: 'bebes' } ,
//   { $set: {Etapa:"3" }}
//  );

//COUNT 
// db.Productos.aggregate([
//     { $unwind : '$categoria' },
//     { $count : 'total_documents' }
//     ]).pretty()

// db.Clientes.aggregate([
//     { $unwind : '$Tipo De Compras' },
//     { $count : 'total_documents' }
//     ]).pretty()

// db.Proveedores.aggregate([
//     { $unwind : '$tipo productos' },
//     { $count : 'total_documents' }
//     ]).pretty()


// LOOKUP
// db.ProveedoresA.aggregate([
//     { $match : { Nombre : 'Juan Perez' } },
//     { $project : { _id : 0, Nombre : 1,'Nombre Empresa' : 1 } },
//     { $lookup : {
//         from : 'Participantes',
//         localField : 'Nombre',
//         foreignField : 'PrecioCompra',
//         as : 'Oes'
//     } }
//   ]).pretty()
  
//   db.ProveedoresA.aggregate([
//     { $match : { Nombre : 'Luis Diaz' } },
//     { $project : { _id : 0, Nombre : 1,'Nombre Empresa' : 1 } },
//     { $lookup : {
//         from : 'Participantes',
//         localField : 'Nombre',
//         foreignField : 'PrecioCompra',
//         as : 'Oes'
//     } }
//   ]).pretty()

// db.ProveedoresA.aggregate([
//     { $sortByCount : '$Participantes' }
//   ]).pretty()
  
// db.Productos.aggregate([
// { $sortByCount : '$Categoria' }
// ]).pretty()

// db.Clientes.aggregate([
// { $sortByCount : '$Tipo De Compras' }
// ]).pretty()
