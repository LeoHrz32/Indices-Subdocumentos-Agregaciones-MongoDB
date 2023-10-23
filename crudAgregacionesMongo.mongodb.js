use('TiendasD1');

//  db.ProveedoresA.find({'Participantes.Nombre':'jose perea guerra'});
//  db.ProveedoresA.find({'Participantes.FechaCompra':'2023/10/21'});
//  db.ProveedoresA.find({'Participantes.Nombre':'Leonardo'});


// actualizar :


//  db.ProveedoresA.updateMany(
//      {Nombre: 'Luis Diaz'},
//      {
//         $set: {
//            'Participantes.Nombre': 'Leonardo',
//            'Participantes.FechaCompra': '20/10/2023',
//            'Participantes.PrecioCompra': 1000
//         }
//      }
//   );

//   db.ProveedoresA.updateMany(
//      {Telefono:301221234},
//      {
//         $set: {
//            'Participantes.Nombre': 'Juan gillermo cuadrado',
//            'Participantes.FechaCompra': '10/10/2023',
//            'Participantes.PrecioCompra': 100000
//         }
//      }
//   );

// db.ProveedoresA.updateMany(
//           {Direccion: 'Calle 123, Ciudad A'},
//           {
//              $set: {
//                 'Participantes.Nombre': 'falcao',
//                 'Participantes.FechaCompra': '20/10/2023',
//                'Participantes.PrecioCompra': 1012300
//              }
//           }
//        );


// Eliminar

// db.ProveedoresA.remove({'Participantes.Nombre' : 'falcao'})
// db.ProveedoresA.remove({'Participantes.FechaCompra' : '10/10/2023'})
// db.ProveedoresA.remove({'Participantes.PrecioCompra' : 1000})
 