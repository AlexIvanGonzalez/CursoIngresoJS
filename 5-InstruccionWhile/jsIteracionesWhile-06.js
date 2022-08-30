function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;
	acumulador = 0;
	vueltas = 5;
	

	while(contador < vueltas)
	{
		numeroIngresado = prompt("ingrese un numero.");

		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado;

		contador ++;
	}

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = acumulador / vueltas;

}//FIN DE LA FUNCIÓN