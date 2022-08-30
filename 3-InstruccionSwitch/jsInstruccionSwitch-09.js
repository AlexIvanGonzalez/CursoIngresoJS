function mostrar()
{
	let estacion;
	let destino;
	let mensaje;
	let tarifa;
	let porcentajeTarifa;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	tarifa = 15000;  
	porcentaje = 0;
	
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
				{
					case "Bariloche":
						porcentaje = 20;
					break;

					case "Cataratas":
					case "Cordoba":
						porcentaje = -10;
					break;

					case "Mar del plata":
						porcentaje = -20;
					break;
				}
		break;

		case "Verano":
			switch(destino)
				{
					case "Bariloche":
						porcentaje = -20;
					break;

					case "Cataratas":
					case "Cordoba":
						porcentaje = 10;
					break;

					case "Mar del plata":
						porcentaje = 20;
					break;
				}
		break;

		default:
			switch(destino)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						porcentaje = 10;
					break;
					
					case "Cordoba":
						porcentaje = 0;
					break;	
				}
		break;
	}

	porcentajeTarifa = tarifa * porcentaje / 100;
	precioFinal = tarifa + porcentajeTarifa;  

	alert("El precio es de $" + precioFinal);

}//FIN DE LA FUNCIÓN
//<select id="txtIdEstacion">,<select id="txtIdDestino">
