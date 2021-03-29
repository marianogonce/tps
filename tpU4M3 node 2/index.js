const express = require ('express');

const mysql = require("mysql");

const morgan = require('morgan');

const app = express(); 

const util = require("util");

app.use(express.static('public'))

app.use(express.urlencoded())

app.use(morgan('dev'));


const conexion = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "", 
    database: "andraste_db"
});

conexion.connect((error)=>{
    if(error){throw error;} 
    console.log("Conexión con la base de datos establecida");
});

const query = util.promisify(conexion.query).bind(conexion);


app.get('/', (request, response) => {
   
    conexion.query('select * from prenda', (error, resultado) => {
          
        console.log(resultado)
        response.send(resultado)
    })

})

app.get('/prenda/:id', async (req, res) => {

     try {

    const respuesta = await query('select * from prenda where prenda_id=?', [req.params.id])
    res.send('Seleccionaste la prenda donada ' + req.params.id + ' que consiste en ' + respuesta[0].nombre + ' donada por ' + respuesta[0].donante + ' en fecha ' + respuesta[0].fecha_donacion) 

    } catch(e) {
        res.send('La prenda no existe')
    }

})

app.post('/form01', async (request, response) => {

  const campoautocompletado = 'DEFAULT'; 

  const prenda = request.body.nombre.toUpperCase();

  const categoria = request.body.categoria;

  const estado = request.body.estadodeprenda;

  const rangoetario = request.body.rango_etario;

  const donante = request.body.donante.toUpperCase();

  const fechadonacion = request.body.fecha.toUpperCase();

  const respuesta =  await query('insert into prenda (prenda_id, nombre, categoria, estado, rango_etario, donante, fecha_donacion) values (?,?,?,?,?,?,?)', [campoautocompletado, prenda,categoria,estado,rangoetario,donante,fechadonacion]);

  clave = await query('select prenda_id from prenda where nombre=? and donante=? and fecha_donacion=?', [prenda, donante, fechadonacion]);

  console.log(clave[0].prenda_id); 
  
  const categoriaaenviar = await query('select descripcion from categoria where (categoria_id) = (select categoria from prenda where prenda_id=?)', [clave[0].prenda_id]);

  const rangoetarioaenviar = await query('select descripcion from rango_etario where (id_rangoetario) = (select rango_etario from prenda where prenda_id=?)', [clave[0].prenda_id]);

  const estadoaenviar = await query('select descripcion from estado where (estado_id) = (select estado from prenda where prenda_id=?)', [clave[0].prenda_id]);
  
  console.log(rangoetarioaenviar[0].descripcion);

    const answer=  `<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <title>TP4respuesta</title>
                        <meta charset="utf-8">
                        <link rel="stylesheet" type="text/css" href="estilos.css">
                    </head>
                        <body>
                            <div id=andraste><h2>Casa de Andraste corazón de fuego – Beneficencia de prendas</h2></div>
                            <div id="gracias">
                            <h1>Gracias ` + request.body.donante + ` por hacer su donación</h1>
                            <p>Usted a realizado la siguiente  donación:</p>
                            <ul>
                            <li>Prenda Donada: ` + request.body.nombre + `</li>
                            <li>Categoria: ` + categoriaaenviar[0].descripcion + `</li>
                            <li>Estado: ` + estadoaenviar[0].descripcion + `</li>
                            <li>Rango Etario:`+ rangoetarioaenviar[0].descripcion + `</li>
                            <li>Fecha de Donación: ` + request.body.fecha + `</li>
                        </ul>
                        <a href="formtp2.html">Hacer una nueva donación</a>
                        </div>>
                    </body>
                    </html>`;

        response.send(answer); 
})

app.listen (3000, () => {

    console.log ('La aplicacion esta corriendo!!!!!');

}) 