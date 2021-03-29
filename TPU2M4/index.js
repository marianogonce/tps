const express = require('express');
const mysql = require('mysql');
const util = require('util');
const jwt = require('jsonwebtoken');
const unless = require('express-unless');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ? process.env.PORT : 3000;

const conexion = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "", 
    database: "andraste_db"
});
conexion.connect();
const query = util.promisify(conexion.query).bind(conexion);

const auth = (req, res, next) => {
    try {
      let token = req.headers['authorization'];
  
      if (!token) {
        throw new Error('No estas logueado');
      }
  
      token = token.replace('Bearer ', '');
  
      jwt.verify(token, 'Secreto', (err, user) => {
        if (err) {
          throw new Error('Token invalido');
        }
      });
  
      next();
    } catch (e) {
      res.status(403).send({ message: e.message });
    }
  };
  
  auth.unless = unless;
  
  app.use(
    auth.unless({
      path: [
        { url: '/login', methods: ['POST'] },
        { url: '/registro', methods: ['POST'] },
      ],
    }),
  );
  
  app.post('/registro', async (req, res) => {
    try {
      if (!req.body.nombre_usuario || !req.body.email || !req.body.clave) {
        throw new Error('No enviaste todos los datos necesarios');
      }
      const validacionUsuario = await query('select * from usuario where nombre_usuario=?', [req.body.nombre_usuario]);
      if (validacionUsuario.length > 0) {
        throw new Error('El usuario ya existe');
      }
  
       const claveEncriptada = await bcrypt.hash(req.body.clave, 10);
  
      const usuario = {
        nombre_usuario: req.body.nombre_usuario,
        clave: claveEncriptada,
        email: req.body.email,
      };
  
        await query('insert into usuario (nombre_usuario, email, clave) values (?,?,?)', [
        usuario.nombre_usuario,
        usuario.email,
        usuario.clave,
      ]);
  
      res.send({ message: 'Se registro correctamente' });
    } catch (e) {
      res.status(413).send({ message: e.message });
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      if (!req.body.nombre_usuario || !req.body.clave) {
        throw new Error('No enviaste los datos necesarios');
      }
  
      const usuario = await query('select * from usuario where nombre_usuario=?', [req.body.nombre_usuario]);
      if (usuario.length == 0) {
        throw new Error('Usuario/Password incorrecto');
      }
     
      const claveCoincide = bcrypt.compareSync(req.body.clave, usuario[0].clave);

      console.log(usuario[0].clave);
      console.log(req.body.clave);
      console.log(claveCoincide);

        
      if (!claveCoincide) {
        throw new Error('/Password incorrecto');
      }
  
     
      const tokenData = {
        nombre_usuario: usuario[0].nombre_usuario,
        email: usuario[0].email,
        usuario_id: usuario[0].usuario_id,
      };
  
      const token = jwt.sign(tokenData, 'Secreto', {
        expiresIn: 60 * 60 * 24, // expires in 24 hours
      });
  
      res.send({ token });
    } catch (e) {
      res.status(413).send({ message: e.message });
    }
  });



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



app.listen (PORT, () => {

    console.log ('La aplicacion esta corriendo en el puerto ' + PORT);

}); 