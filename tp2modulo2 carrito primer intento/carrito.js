var productos = [

 {
 	nombre: "Harina",
 	precio:35
 }, 

{  
    nombre:"Pan",
    precio:25

},

{
    
     nombre: "Papa",
     precio: 52
},


{
     nombre: "Palta",
     precio: 55
},

{

	nombre: "Fideos",
	precio: 85
},


{

	nombre: "Aceite",
	precio: 350
},

{
	nombre: "Sopa",
	precio: 86
},

{
	nombre: "Mermelada",
	precio: 108
},

{
	nombre: "Poroto",
	precio: 69
},

{
	nombre: "Lentejas",
	precio: 85
},

{
	nombre: "Mandarina",
	precio: 43
},

{
	nombre: "Banana",
	precio: 79
},

{
	nombre: "Leche de almendras",
	precio: 145
},

{
	nombre: "Papel higiénico",
	precio: 147
},

{
	nombre: "Lavandina",
	precio: 55
},

{
	nombre: "Alcohol en gel",
	precio: 123
},

{
	nombre: "Shampoo",
	precio: 400
},

{
    nombre: "Arroz",
    precio: 66
},

{
	nombre: "Harina",
	precio: 35
},
{
	nombre: "Salsa de tomate",
	precio: 35
},

];


    var section = document.createElement("section");
    document.body.appendChild(section);

    var tituloproductos = document.createElement("h1");
    var contenidodetituloproductos = document.createTextNode("Lista de Productos");
    tituloproductos.appendChild(contenidodetituloproductos);
    section.appendChild(tituloproductos);


	var carrito = new Array ();

	var listadeproductos = document.createElement("ul"); 
	section.appendChild(listadeproductos);

for(let i = 0; i <20 ; i++) { 

    var producto = document.createElement("li");
    var contenido = document.createTextNode(productos[i].nombre + " $" + productos[i].precio);
    producto.appendChild(contenido);
    listadeproductos.appendChild(producto);

    var li = document.getElementsByTagName("li")[i];  
	var att = document.createAttribute("onclick");
	att.value = "comprar(event)";                             
	li.setAttributeNode(att);


	var identificador = document.createAttribute("class");       
    identificador.value = "listaselectora";                           
    li.setAttributeNode(identificador);                          
}


    var titulocarrito = document.createElement("h1");
    var contenidodetitulocarrito = document.createTextNode("Productos Agregados al Carrito");
    titulocarrito.appendChild(contenidodetitulocarrito);
    section.appendChild(titulocarrito);

    var listadecompra = document.createElement("ul"); 
	section.appendChild(listadecompra);



 function comprar(event) {
       
        var elementoClickeado = event.target;


        function nodeIndex(elementoClickeado) {
        var i=0;
        while(elementoClickeado.previousElementSibling) {
        elementoClickeado=elementoClickeado.previousElementSibling;
        i++;
        }
        return i;
        }

        if (carrito.includes(productos[nodeIndex(elementoClickeado)]) == false) { 
        carrito.push(productos[nodeIndex(elementoClickeado)]);
	    var productocomprado = document.createElement("li");
	    var contenidodecompra = document.createTextNode(event.target.textContent);
	    productocomprado.appendChild(contenidodecompra);
	    listadecompra.appendChild(productocomprado);
  }
 }


	    var botoncomprar = document.createElement("h2");
	    var contenidobotoncomprar = document.createTextNode("Comprar");
	    botoncomprar.appendChild(contenidobotoncomprar);
	    section.appendChild(botoncomprar);
	    var h2 = document.getElementsByTagName("h2")[0];  
		var attcompra = document.createAttribute("onclick");
		attcompra.value = "clickcomprar(event)";                             
		h2.setAttributeNode(attcompra);   



        var resumenDeCompra = document.createElement("p");
        section.appendChild(resumenDeCompra);
        resumenDeCompra.textContent = "Haga Click en el Boton Comprar cuando esté listo; Tenga en cuenta que  sólo puede comprar una unidad por producto."; 


       var resumen = new Array(); 
       var conceptos = new Array(); 
  
       var clicked = false;

function clickcomprar(event) {

	    for (let i = 0; i < carrito.length; i++) {
        resumen.push(carrito[i].nombre);
        conceptos.push(carrito[i].precio);

}  
        
        function myFunc(total, num) {
        return total + num;
        }

        var total = conceptos.reduce(myFunc);

        var resumenDeCompra = document.createElement("p");
        section.appendChild(resumenDeCompra);
        resumenDeCompra.textContent = "Ha comprado con éxito los siguientes productos: " + resumen + ". Por un total de $" + total;
        var identificadortotal = document.createAttribute("class");       
        identificadortotal.value = "resumen";                           
        resumenDeCompra.setAttributeNode(identificadortotal);  
        
        var desbutton = document.getElementsByTagName("h2")[0];
        desbutton.onclick = "";
        desbutton.style.display = "none";
        alert("Compra realizada!");

        var desresumen = document.getElementsByTagName("p")[0];
        desresumen.textContent = "¡Gracias por su compra! Por motivos de seguridad no podrá realizar más cargas al carrito ni concretar transacciones en esta sesión. Para realizar otra operación actualice la página con el botón F5"; 

        var desclick = document.getElementsByClassName("listaselectora");
        for (var i=0; i < desclick.length; i++) {
        desclick[i].onclick = "";

        }
}
        

console.log(resumen);