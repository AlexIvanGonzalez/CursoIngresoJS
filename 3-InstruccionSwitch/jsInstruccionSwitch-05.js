/*Nombre: Alex Ivan Gonzalez/Div:C/SWITCH Ejer:05.

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

*/

function mostrar()
{
	let hora;
	let mensaje;
	
	hora = document.getElementById("txtIdHora").value;


	switch(hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
		break;

		default:
			mensaje = "otras horas";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

//id="txtIdHora">

/* Otra forma de hacerlo:

	let hora;
	let mensaje;
	
	hora = document.getElementById("txtIdHora").value;

	hora = parseInt(hora);

	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
		break;

		default:
			mensaje = "otras horas";
		break;
	}

	alert(mensaje);
*/