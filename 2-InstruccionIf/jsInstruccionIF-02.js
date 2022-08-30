function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	
	edadIngresada = parseInt(edadIngresada)

	if(edadIngresada > 17)
	{
		alert("Usted es mayor de edad");
	} //mejor esta manera porq sobrecarga menos el procesador.

	/*if(edadIngresada >= 18)//verdadera o falsa (true or false)
	{
		alert("Usted es mayor de edad");
	}*/

	//alert("prueba de funcionamiento");

}//FIN DE LA FUNCIÓN