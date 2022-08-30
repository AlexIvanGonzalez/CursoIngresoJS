/*Nombre: Alex Ivan Gonzalez/Div:C/SWITCH Ejer:04.

Enunciado:
al seleccionar un mes informar:
1.si tiene 28 días.
2.si tiene 30 días.
3.si tiene 31 días.

*/

function mostrar()
{
	let mesDelAño;
	let mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "28 días.";
		break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "31 días.";
		break;  

		default:
			mensaje = "30 días";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN