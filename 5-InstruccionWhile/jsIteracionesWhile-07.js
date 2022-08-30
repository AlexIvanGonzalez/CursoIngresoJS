/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	let promedio;

	contador = 0;
	acumulador = 0;

	respuesta = "si"; //primer paso variable condición.

	while(respuesta == "si") //segundo paso.
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado; //acumulador = acumulador + numeroIngresado;

		contador++; //contador = contador + 1;

		respuesta = prompt("queres ingresar otro numero?"); //tercer paso.
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN