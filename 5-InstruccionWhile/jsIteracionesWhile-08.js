/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let numeroIngresado;
	let contadorNegativos;

	acumuladorPositivos = 0;
	acumuladorNegativos = 1;
	contadorNegativos = 0;

	respuesta = "si"; //primer paso variable condición.

	while(respuesta == "si") //segundo paso.
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0) 
		{
			acumuladorNegativos *= numeroIngresado; //acumulador = acumulador + numeroIngresado;
			contadorNegativos++;
		}

		else
		{
			acumuladorPositivos += numeroIngresado;
		}

		if (contadorNegativos == 0) 
		{
			acumuladorNegativos = 0;
		}

		respuesta = prompt("queres ingresar otro numero?"); //tercer paso.

	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;
	

}//FIN DE LA FUNCIÓN