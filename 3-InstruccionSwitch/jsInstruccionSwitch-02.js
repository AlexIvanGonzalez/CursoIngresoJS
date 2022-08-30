/*Nombre: Alex Ivan Gonzalez/Div:C/SWITCH Ejer:02.

Enunciado:
al seleccionar un mes informar:
1.si estamos en Invierno: "Abrigate que hace frio."
2.si aún no llego el Invierno: "Falta para el invierno."
3.si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."

ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.

*/

function mostrar()
{	
	let mesDelAño;
	let mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
		break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
		break;

		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN