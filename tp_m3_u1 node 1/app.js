const express = require ('express');

const app = express(); 

app.use(express.static('estatico'))

app.use(express.urlencoded())

app.get('/', (request, response) => {

    response.send('Ok, funciona');
})

app.post('/form01', (request, response) => {

    console.log(request.body.fname);
    console.log(request.body.lastname);
    console.log(request.body.phone);
    console.log(request.body.age);
    console.log(request.body.bcountry);
    console.log(request.body.acountry);


const respuesta = `<!DOCTYPE html>
                <html lang="es">
                <head>
                    <title>TP3respuesta</title>
                    <meta charset="utf-8">
                    <link rel="stylesheet" type="text/css" href="estilos.css">
                </head>
                    <body>
                        <div id="gracias">
                        <h1>Gracias por enviarnos su información</h1>
                        <p>Los datos ingresados por usted fueron los siguientes:</p>
                        <ul>
                        <li>Nombre: ` + request.body.fname + `</li>
                        <li>Apellido: ` + request.body.lastname + `</li>
                        <li>Teléfono: ` + request.body.phone + `</li>
                        <li>Edad:`+ request.body.age + `</li>
                        <li>País de Nacimiento: ` + request.body.bcountry + `</li>
                        <li>País de Residencia: ` + request.body.acountry + `</li>
                    </ul>
                    <a href="formtp2.html">Volver al formulario</a>
                    </div>>
                </body>
                </html>` ;

    response.send(respuesta);
    
})

app.listen (3000, () => {

    console.log ('La aplicacion esta corriendo!!!!!');

}) 