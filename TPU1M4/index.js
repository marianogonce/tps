const express = require ('express');

const mysql = require("mysql");

const morgan = require('morgan');

const app = express(); 

const util = require("util");

app.use(morgan('dev'));

app.use(express.json());

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


app.get('/api/prendasdonadas', (request, response) => {
   
    conexion.query('select * from prenda', (error, resultado) => {
    response.json(resultado)
    })

});

app.get('/api/prendasdonadas/:id', async (req, res) => {

     try {

        const respuesta = await query('select * from prenda where prenda_id=?', [req.params.id]);
        if (respuesta.length == 1) {
            res.json(respuesta[0]);
        } else {
            res.status(404).send();
        }
        res.json(respuesta[0]);

    } catch(e) {
        res.status(500).send('Algo no salió bien');
    }

});

app.post('/api/prendasdonadas', async (request, response) => {

  const campoautocompletado = 'DEFAULT'; 

  const nombre = request.body.nombre;

  const categoria = request.body.categoria;

  const estado = request.body.estado;

  const rango_etario = request.body.rango_etario;

  const donante = request.body.donante;

  const fecha_donacion = request.body.fecha_donacion;

  const donado = request.body.donado;

  const destino = request.body.destino; 

  const respuesta =  await query('insert into prenda (prenda_id, nombre, categoria, estado, rango_etario, donante, fecha_donacion, donado, destino) values (?,?,?,?,?,?,?,?,?)', [campoautocompletado, nombre,categoria,estado,rango_etario,donante,fecha_donacion, donado, destino]);

  const registroinsertado = await query('select * from prenda where prenda_id=?', [respuesta.insertId]) 
  
  response.json(registroinsertado[0]);  
});

app.put('/api/prendasdonadas/:id', async (request, response) => {

    const nombre = request.body.nombre;

    const categoria = request.body.categoria;
  
    const estado = request.body.estado;
  
    const rango_etario = request.body.rango_etario;
  
    const donante = request.body.donante;
  
    const fecha_donacion = request.body.fecha_donacion;
  
    const donado = request.body.donado;
  
    const destino = request.body.destino; 
  
    const respuesta =  await query('update prenda set nombre=?, categoria=?, estado=?, rango_etario=?, donante=?, fecha_donacion=?, donado=?, destino=? where prenda_id=?', [nombre,categoria,estado,rango_etario,donante,fecha_donacion, donado, destino, request.params.id]);
    
    const registromodificado = await query('select * from prenda where prenda_id=?', [request.params.id]) 
    
    response.json(registromodificado[0]);  
  
  });



app.delete('/api/prendasdonadas/:id', async (req, res) => {

    
    
    try {
            const registro = await query('select * from prenda where prenda_id=?', [req.params.id]); 
            if (registro.length == 1) {
                await query ('delete from prenda where prenda_id=?', [req.params.id]);
                res.status(204).send();
            } else {
                res.status(404).send();
            }
    } catch (e) {
        res.status(500).send('Error en la aplicación');
    }
});



app.listen (3000, () => {

    console.log ('La aplicacion esta corriendo!!!!!');

}); 