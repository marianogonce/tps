let productos = [

 {
 	nombre: "Harina",
 	precio:35,
 	imagen: "url(harina.jpg)"
 }, 

{  
    nombre:"Pan",
    precio:25,
 	imagen: "url(pan.jpg)"

},

{
    
     nombre: "Papa",
     precio: 52,
 	imagen: "url(papa.jpg)"
},


{
     nombre: "Palta",
     precio: 55,
 	 imagen: "url(palta.jpg)"
},

{

	nombre: "Fideos",
	precio: 85,
 	imagen: "url(fideo.jpg)"
},


{

	nombre: "Aceite",
	precio: 350,
 	imagen: "url(aceite.jpg)"
},

{
	nombre: "Sopa",
	precio: 86,
 	imagen: "url(sopa.jfif)"
},

{
	nombre: "Mermelada",
	precio: 108,
 	imagen: "url(mermelada.jpg)"
},

{
	nombre: "Poroto",
	precio: 69,
 	imagen: "url(poroto.jpg)"
},

{
	nombre: "Lentejas",
	precio: 85,
 	imagen:  "url(lentejas.jpg)"
},

{
	nombre: "Mandarina",
	precio: 43,
 	imagen:  "url(mandarina.jpeg)"
},

{
	nombre: "Banana",
	precio: 79,
 	imagen:  "url(bananna.jpg)"
},

{
	nombre: "Leche de almendras",
	precio: 145,
 	imagen:  "url(lechealmendras.jpg)"
},

{
	nombre: "Papel higiénico",
	precio: 147,
 	imagen:  "url(papelhigienico.jpg)"
},

{
	nombre: "Lavandina",
	precio: 55,
 	imagen:  "url(lavandina.jpg)"
},

{
	nombre: "Alcohol en gel",
	precio: 123,
 	imagen:  "url(alcholengel.jpg)"
},

{
	nombre: "Shampoo",
	precio: 400,
 	imagen:  "url(shampoo.jpg)"
},

{
    nombre: "Arroz",
    precio: 66,
 	imagen:  "url(rice.jpeg)"
},
{
	nombre: "Salsa de tomate",
	precio: 35,
 	imagen:  "url(tomatosauce.jpg)"
},

];

       
	    let section = document.createElement("section"); 
	    document.body.appendChild(section); 

	    let fotoCarrito = document.createElement("img");
	    section.appendChild(fotoCarrito);
	    fotoCarrito.style.height ="200px";
	    fotoCarrito.style.width= "250px";
	    fotoCarrito.style.float= "left";
	    fotoCarrito.style.clear= "both";
	    fotoCarrito.style.marginLeft ="350px";

	    let source = document.createAttribute("src"); 
		source.value = "carrito.jpg"; 
		fotoCarrito.setAttributeNode(source); 

	    let tituloproductos = document.createElement("h1"); 
	    let contenidodetituloproductos = document.createTextNode("LISTA DE PRODUCTOS");
	    tituloproductos.appendChild(contenidodetituloproductos);
	    section.appendChild(tituloproductos);
	    tituloproductos.style.display ="block";
	    tituloproductos.style.float= "left";
	    tituloproductos.style.clear= "both";
	    tituloproductos.style.marginLeft ="350px";
	    

		let listadeproductos = document.createElement("ul"); 
		section.appendChild(listadeproductos);
		listadeproductos.style.display = "inline-block";

		for(let i = 0; i <productos.length ; i++) {         

		    let producto = document.createElement("li");
		    listadeproductos.appendChild(producto);

		    let li = document.getElementsByTagName("li")[i];
		    li.style.display = "inline-block";
		    li.style.float = "left";


            let textoProducto = document.createElement("h4");
            producto.appendChild(textoProducto);
            textoProducto.style.marginLeft = "23px";
            let contenidoTextProducto = document.createTextNode(productos[i].nombre + ":  $" + productos[i].precio);
			textoProducto.appendChild(contenidoTextProducto);
			let att = document.createAttribute("onclick"); 
			att.value = "cargarCarrito()"; 
			textoProducto.setAttributeNode(att); 

			let identificador = document.createAttribute("class");     
		    identificador.value = "listaselectora"; 
		    textoProducto.setAttributeNode(identificador);
            
		    let proimg = document.createElement("div");
		    producto.appendChild(proimg);

		    proimg.style.backgroundImage = productos[i].imagen;
		    proimg.style.height = "100px";
		    proimg.style.width = "250px";
		    proimg.style.backgroundSize = "cover";
		    proimg.style.border = "2px solid #666666";
		    proimg.style.margin = "12px";
		    proimg.style.display ="block";

		       
		}

        
	    let titulocarrito = document.createElement("h1"); 
	    let contenidodetitulocarrito = document.createTextNode("Productos Agregados al Carrito"); 
	    titulocarrito.appendChild(contenidodetitulocarrito);
	    section.appendChild(titulocarrito);

	    let listadecompra = document.createElement("ul"); 
		section.appendChild(listadecompra);

        let cargarCarrito = () => {    
       
        	let elementoClickeado = event.target; 

        	let  encontrarIndice = (elementoClickeado) => {
       
	        		let i=0;

	        		a = elementoClickeado.parentNode;
	        
	        		while(a.previousElementSibling) {
	          
	          		a=a.previousElementSibling;
	          
	         		i++;
	       
	        		}
        
         	   return i;
       
       		 }

        	if (carrito.includes(productos[encontrarIndice(elementoClickeado)]) == false) { 
		        
		           carrito.push(productos[encontrarIndice(elementoClickeado)]);
			    
			       let productocomprado = document.createElement("li");
			     
			       let contenidodecompra = document.createTextNode(event.target.textContent);
			     
			       productocomprado.appendChild(contenidodecompra);
			       
			       listadecompra.appendChild(productocomprado);

 	       }
         
         console.log(encontrarIndice(elementoClickeado));
        }


	    let carrito = new Array ();

	    let botoncomprar = document.createElement("h2");
	    botoncomprar.style.display = "block";
	    botoncomprar.style.width = "200px";
	    let contenidobotoncomprar = document.createTextNode("Comprar");
	    botoncomprar.appendChild(contenidobotoncomprar);
	    section.appendChild(botoncomprar);
	    
	    let h2 = document.getElementsByTagName("h2")[0];  
		let attcompra = document.createAttribute("onclick");
		attcompra.value = "clickcomprar()";                             
		h2.setAttributeNode(attcompra);   
       
        let resumenDeCompra = document.createElement("p");
        section.appendChild(resumenDeCompra);
        resumenDeCompra.textContent = "Haga Click en el Boton Comprar cuando esté listo; Tenga en cuenta que  sólo puede comprar una unidad por producto."; 
        
        let resumen = new Array(); 
        
        let conceptos = new Array(); 

        let clickcomprar = () => {

			    for (let i = 0; i < carrito.length; i++) {
		        
			          resumen.push(carrito[i].nombre);
			         
			          conceptos.push(carrito[i].precio);

		        }  
        
		        let sumaTotal = (sum, item) => {
		        
		              return sum += item;

		        }

		        let total = conceptos.reduce(sumaTotal);

		        let resumenDeCompra = document.createElement("p");
		        section.appendChild(resumenDeCompra);
		        resumenDeCompra.textContent = "Ha comprado con éxito los siguientes productos: " + resumen + ". Por un total de $" + total;
		        
		        let identificadortotal = document.createAttribute("class");       
		        identificadortotal.value = "resumen";                           
		        resumenDeCompra.setAttributeNode(identificadortotal);  
		        
		        let desbutton = document.getElementsByTagName("h2")[0];
		        desbutton.onclick = "";
		        desbutton.style.display = "none";
		        alert("Compra realizada!");

		        let desresumen = document.getElementsByTagName("p")[0];
		        desresumen.textContent = "¡Gracias por su compra! Por motivos de seguridad no podrá realizar más cargas al carrito ni concretar transacciones en esta sesión. Para realizar otra operación actualice la página con el botón F5"; 

		        let desclick = document.getElementsByClassName("listaselectora");
		        
		        for (let i=0; i < desclick.length; i++) {
		           
		              desclick[i].onclick = "";

		        }
   }
        




