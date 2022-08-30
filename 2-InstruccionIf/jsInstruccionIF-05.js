function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

		if(edadIngresada < 13 || edadIngresada > 17)
		{
			alert("Usted no es adolecente");
		}

		/*if(edadIngresada > 12 && edadIngresada < 18)
		{
			esta muy mal visto porner un if vacio
		}
		
		else		
		{
			alert("Usted no es adolecente");
		}
		forma incorrecta de hacerlo (no es optimo ni  es buena practica)*/



		/*if(!(edadIngresada > 12 && edadIngresada < 18))		
		{
			alert("Usted no es adolecente");
		} otra forma de hacerlo pero menos practica*/ 

}//FIN DE LA FUNCIÓN