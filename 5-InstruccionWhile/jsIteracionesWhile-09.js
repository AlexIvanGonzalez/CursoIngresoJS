/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero = "es el primero";

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "es el primero") 
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "ya se cargo el primer valor";
		}

		else
		{
			if (numeroIngresado > numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
			}
			//Unico caso donde se usan 2 IF
			if (numeroIngresado < numeroMinimo) 
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta = prompt("desea continuar?");
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN