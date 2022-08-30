/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{	
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un numero entre 0 y 9.");

	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9) //Se hace con or porq no existe un numero mas grande q 10 y menor q 0.
	{
		numeroIngresado = prompt("reingrese el numero.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	alert("Dato verificado.");

	document.getElementById("txtIdNumero").value = numeroIngresado;

}//FIN DE LA FUNCIÓN

//id="txtIdNumero"
