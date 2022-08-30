/*Nombre: Alex Ivan Gonzalez/Div:C/SWITCH Ejer:01.

Enunciado:
al seleccionar un mes informar:
1.Si es Enero: "que comiences bien el año!!!."
2.Si es Marzo: "a clases!!!."
3.Si es Julio: "se vienen las vacaciones!!!."
4.Si es Diciembre: "Felices fiesta!!!."

*/

function mostrar()
{
	let mesDelAño;
	let mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
		break;
		
		case "Marzo":
			mensaje = "a clases!!!.";
		break;

		case "Julio":
			mensaje = "se vienen las vacaciones!!!";
		break;

		case"Diciembre":
			mensaje = "Felices fiesta!!!.";
		break;

		default:
			mensaje = "mes incorrecto";	
		break;
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN

/*let letra;

	letra = prompt("es una vocal?");


	switch(letra)// switch(variable) variable a comparar por igualdad de caracteres, strings, enteros, etc.
	{
		case "a":
			alert("es la letra a"); //aca puedo hacer lo q quiera, importa el orden.
		break;//si no pongo el break me va a tomar hasta donde lo cierre otro break.

		case "e":
			alert("es la letra e");
		break;

		case "i": //puedo comparar con numeros u otros casos.
			alert("es la letra i");
		break;

		case "o":
			alert("es la letra o");
		break;

		default:
			alert("es otra letra");
		break;

	}*/

/*hago un if para tomar vocales.
	let letra

	if(letra == "a")
	{
	
	}
	else
	{
		if(letra == "e")
		{
	
		}
		else
		{
			if(letra == "o")
		}
	}
Por este tipo de ejemplos combiene usar el switch.
*/ 