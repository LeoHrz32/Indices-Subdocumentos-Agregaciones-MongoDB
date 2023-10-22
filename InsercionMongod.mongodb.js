use('TiendasD1');
db.getCollection('ProveedoresA').insertMany([
    {
        "Nombre": "Juan Zapata",
        "Telefono": "30132551234",
        "Direccion": "Calle 123, Ciudad A",
        "Nombre empresa": "Lechería ABC",
        "tipo productos": ["Cerveza", "Lacteos"],
        Participantes :{
            Nombre : "Juan luis guerra",
            FechaCompra :  "2023/10/21",
            PrecioCompra : 32.300,
        }
        
    },
    {
        "Nombre": "Juan Perez",
        "Telefono": "301221234",
        "Direccion": "Calle 112, Ciudad A",
        "Nombre empresa": "Lechería ADC",
        "tipo productos": ["leche", "queso"],
        Participantes :{
            Nombre : "jose perea guerra",
            FechaCompra :"2023/10/21",
            PrecioCompra : 12.300 ,
        }
    },
])