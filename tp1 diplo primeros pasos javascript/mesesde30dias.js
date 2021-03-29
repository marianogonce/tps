var meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diasDelMes= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var mesesde30 = new Array();

var mesesde31 = new Array();

for (let i=0; i<12; i++)  {

    if (diasDelMes[i] == 30) {
        mesesde30 = meses[i];
     }

    if (diasDelMes[i] == 31) {
        mesesde31 = meses[i];
    }
     
}

console.log ("Los meses que tienen 30 días son " + mesesde30)

console.log ("Los meses que tienen 31 días son " + mesesde31);







