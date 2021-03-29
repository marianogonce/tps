
	let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	let diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


	let cuerpo = document.createElement("section");
		document.body.appendChild(cuerpo);


	let titulo = document.createElement("h1");
		cuerpo.appendChild(titulo);
		titulo.innerHTML = "Tabla de Meses";


	let tabla = document.createElement("table");
	cuerpo.appendChild(tabla);

 function headercreator() {

	let encabezado  = document.createElement("tr");
	tabla.appendChild(encabezado);
	
	let encabezado1 = document.createElement("th");
	encabezado.appendChild(encabezado1); 
	encabezado1.innerHTML="Meses";

	let encabezado2 = document.createElement("th");
	encabezado.appendChild(encabezado2); 
	encabezado2.innerHTML="Días";

}

    setTimeout (headercreator, 100);

	function iniTimeOut(i) {

		setTimeout (()=> rowcreato(i), 500);
	}

	function rowcreato(i) {

		let datemeses  = document.createElement("tr");
		tabla.appendChild(datemeses);
	
		let datem = document.createElement("td");
		datemeses.appendChild(datem);
		datem.innerHTML = meses[i];

		let dated = document.createElement("td");
		datemeses.appendChild(dated);
		dated.innerHTML = diasDelMes[i];

		i++;
        
        if (i < 12) {
        
        iniTimeOut(i); 
        
        }
	}

	 iniTimeOut(0); 


	/*  for (i=0; i<meses.length; i++) {
      
		let datemeses  = document.createElement("tr");
		tabla.appendChild(datemeses);
	
		let datem = document.createElement("td");
		datemeses.appendChild(datem);
		datem.innerHTML = meses[i];

		let dated = document.createElement("td");
		datemeses.appendChild(dated);
		dated.innerHTML = diasDelMes[i];

	};

	*/


	let botonNocturno = document.createElement("h2");
	cuerpo.appendChild(botonNocturno);
	botonNocturno.innerHTML="Modo Noche";

	let botonDiurno = document.createElement("h2");
	cuerpo.appendChild(botonDiurno);
	botonDiurno.innerHTML="Modo Diurno";

    let attDiurno = document.createAttribute("onclick");
	attDiurno.value = "diurno()";
	
	let attNocturno = document.createAttribute("onclick");
	attNocturno.value = "nocturno()";   
    
    botonDiurno.setAttributeNode(attDiurno);
	botonNocturno.setAttributeNode(attNocturno);
	


	function diurno() {
           
		let cuerpo = document.getElementsByTagName("section")[0];
		cuerpo.style.background= "linear-gradient(56deg, rgba(193,171,0,1) 0%, rgba(224,246,0,1) 31%, rgba(233,138,4,1) 100%)";
		let tabla = document.getElementsByTagName("table")[0];
		tabla.style.color = "#000000"; 
		let titulo = document.getElementsByTagName("h1")[0];
		titulo.style.color = "#000000";
		for (i=0; i<2; i++) {let encabezado = document.getElementsByTagName("th")[i];
		encabezado.style.backgroundColor= "#f0e38d";}

		
	}


	function nocturno() {

		let cuerpo = document.getElementsByTagName("section")[0];
		cuerpo.style.background= "linear-gradient(56deg, rgba(60,60,60,1) 0%, rgba(116,116,116,1) 100%)"; 
		let tabla = document.getElementsByTagName("table")[0];
		tabla.style.color = "#ffffff";
		let titulo = document.getElementsByTagName("h1")[0];
		titulo.style.color = "#ffffff";
		for (i=0; i<2; i++) {let encabezado = document.getElementsByTagName("th")[i];
		encabezado.style.backgroundColor= "#222c47";}
		
	}




	










