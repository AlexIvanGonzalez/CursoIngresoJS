/*Alex Ivan Gonzalez/Div:C/Ejer.07 Entrada-Salida
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;

	//tomo datos, aca numero1 y numero 2 son texto
	//parseInt(document.getElementById("txtIdNumeroUno").value); Parseo en la misma linea
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	//aca el texto se pasa a entero
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	//realizo la suma
	resultado = numero1 + numero2;

	alert("La suma es "+ resultado);	
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 - numero2;

	alert("La resta es "+ resultado);
	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 * numero2;

	alert("La multiplicación es "+ resultado);
	
}

function dividir()
{	let numero1;
	let numero2;
	let resultado;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 / numero2;

	alert("La divición es "+ resultado);
	
}

