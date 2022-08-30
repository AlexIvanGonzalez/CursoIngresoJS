function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);
	//si la persona es adolecente, edad 13 y 17 años.

		if(edadIngresada > 12 && edadIngresada < 18)
		{
			alert("Usted es adolecente");
		}

}//FIN DE LA FUNCIÓN

/* operadores logicos 
&& (y/and), , || (o/or), !! */

/*
si hace calor y tengo electricidad, prendo el aire
si tengo ganas o tengo que hacer un mando, salgo de casa

1 y 2  r

v y v  v
f y v  f
v y f  f
f y f  f

1 o 2

v o v  v
f o v  v
v o f  v
f o f  f
*/