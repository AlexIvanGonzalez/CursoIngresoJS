function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 18 && estadoCivil != "Soltero")
		{
			alert("Es muy pequeño para No ser soltero");
		}

}//FIN DE LA FUNCIÓN