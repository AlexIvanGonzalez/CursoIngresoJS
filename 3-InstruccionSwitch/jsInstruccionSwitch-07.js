/*Nombre: Alex Ivan Gonzalez/Div:C/SWITCH Ejer:07.

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	let destino;
	let mensaje;
	
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "Oeste.";
		break;

		case "Cataratas":
			mensaje = "Norte.";
		break;

		case "Mar del plata":
			mensaje = "Este.";
		break;

		default:
			mensaje = "Sur."
		break;	
	}

	alert(mensaje);

//<select id="txtIdDestino">

}//FIN DE LA FUNCIÓN