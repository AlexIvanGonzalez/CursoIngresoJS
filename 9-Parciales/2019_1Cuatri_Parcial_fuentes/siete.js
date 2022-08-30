/*Alex Ivan Gonzalez/Div:C/Ejer.07 Parcial 2019.

Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/

//ejer 04 y 05 while

function mostrar()
{
	let respuesta;
	let alturaIngresada;
	let sexoIngresado;
	let promedioAlturas;

	//respuesta = "si";

	alturaIngresada = prompt("Ingrese su altura (entre 0 cm y 250 cm).");
	alturaIngresada = parseInt(alturaIngresada);

	while(alturaIngresada < 0 || alturaIngresada > 250)
	{
		alturaIngresada = prompt("reingrese el dato.");
		alturaIngresada = parseInt(alturaIngresada);
	}

	alert("Dato valido.");

	/*sexoIngresado = prompt("ingrese f ó m.");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("reingrese el dato.");
	}

	alert("Dato valido.");*/

	document.write("prueba 1: " + alturaIngresada + "<br>");
	document.write("prueba 2: " + sexoIngresado + "<br>");

	//document.write("El promedio de las alturas totales es:" + (...) + "<br>");
	//document.write("La altura más baja y el sexo de esa persona es:" + (...) + "<br>");
	//document.write("La cantidad de mujeres que su altura supere los 190 centimetros es:" + (...) + "<br>");

}
