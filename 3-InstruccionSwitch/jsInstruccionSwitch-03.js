/*Nombre: Alex Ivan Gonzalez/Div:C/SWITCH Ejer:03.

Enunciado:
al seleccionar un mes informar:
1.si es Febrero: " Este mes no tiene más de 29 días."
2.si NO es Febrero: "Este mes tiene 30 o más días"

*/

function mostrar()
{
	let mesDelAño;
	let mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
		break;

		default:
			mensaje = "Este mes tiene 30 o más días.";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN