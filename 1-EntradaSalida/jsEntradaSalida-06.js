/*Alex Ivan Gonzalez/Div:C/Ejer.06 Entrada-Salida
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//Tomo datos
	//parseInt(document.getElementById("txtIdNumeroUno").value); Parseo en la misma linea

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno); //parseInt(...) Toma numeros enteros.
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;
	
	//salida
	alert("La suma es "+ resultado);
}

/*let dolarOficial;
	let dolarBlue;
	let diferenciaDolar;
	let resultado;

	dolarOficial = document.getElementById("txtIdNumeroUno").value;
	dolarBlue = document.getElementById("txtIdNumeroDos").value;

	dolarOficial = parseInt(dolarOficial);
	dolarBlue = parseInt(dolarBlue);

	diferenciaDolar = dolarBlue - dolarOficial;

	resultado =  diferenciaDolar / dolarOficial * 100;
	
	alert("La diferencia porcentual del dólar es de un "+ resultado + "%");*/

