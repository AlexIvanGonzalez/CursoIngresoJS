/*Alex Ivan Gonzalez/Div:C/Ejer.10 While.

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */

function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let acumuladorNegativos;
	let acumuladorPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	acumuladorNegativos = 0;
	acumuladorPositivos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	respuesta = "si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado < 0) 
		{	//1-Suma de los negativos.
			acumuladorNegativos += numeroIngresado;

			//4-Cantidad de negativos.
			contadorNegativos++;
		}

		else
		{	
			if (numeroIngresado > 0) 
			{
			//2-Suma de los positivos.
			acumuladorPositivos += numeroIngresado;

			//3-Cantidad de positivos.
			contadorPositivos++;
			}

			else
			{	//5-Cantidad de ceros.
				contadorCeros++;
			}
		}
		
		//6-Cantidad de números pares.
		if (numeroIngresado % 2 == 0) 
		{
			contadorPares++;
		}

		respuesta = prompt("desea continuar?");
	}//fin del while

	//Nota: Los promedios van fuera del While antes del final.
	
	//7-Promedio de positivos.
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	//8-Promedios de negativos.
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	//9-Diferencia entre positivos y negativos, (positivos-negativos).
	diferencia = acumuladorPositivos - acumuladorNegativos;

	document.write("la suma de negativos es: " + acumuladorNegativos + "<br>");
	document.write("la suma de positivos es: " + acumuladorPositivos + "<br>");
	document.write("la cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("la cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("la cantidad de números pares es: " + contadorPares + "<br>");
	document.write("el promedio de positivos es: " + promedioPositivos + "<br>");
	document.write("el promedio de negativos es: " + promedioNegativos + "<br>");
	document.write("la diferencia entre positivos y negativos es: " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN