/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (entre 5 a 13 años) o es bebe(menor a 4 años)
o si supera los 60 años de edad es anciano
tambien la edad ingresada*/

	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 59)
		{
			alert(edadIngresada + " anciano");
		}
		else
		{ 
			if(edadIngresada > 17)
			{
				alert(edadIngresada + " adulto");
			}

			else {
				if(edadIngresada > 12)
				{
					alert(edadIngresada + " adolecente");
				}
				else
				{
					if (edadIngresada > 4) 
					{
						alert(edadIngresada + " niño");
					}
					else
					{
						alert(edadIngresada + " bebe");
					}
				}
			} 	
		}

	/*let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

		if(edadIngresada > 17)
		{
			alert("Usted es adulto");
		}
		else
		{ 
			if(edadIngresada > 12 && edadIngresada < 18)
			{
				alert("Usted es adolecente");
			}
			else
			{
				alert("Usted es un niño");
			}	
		}*/ //hecho bien
		//el orden puede cambiar dependiendo de lo que me pidan. ej: si es un hospital de niños primero va la parte de niños y si es de adultos la parte de adultos.
	  
	  /*if(edadIngresada > 17)
		{
			alert("Usted es adulto");
		}

		if(edadIngresada > 12 && edadIngresada < 18)
		{
			alert("Usted es adolecente");
		}
		
		if(edadIngresada < 13)
		{
			alert("Usted es un niño");
		} mal hecho, no setiene que poner tanto if hay mejores metodos*/
}//FIN DE LA FUNCIÓN
/*
if(condicional)
{
	if(condicional)
	{
		if(condicional)
		{
	
		}
	}
}
asi se ordena.

if(condicional)
{
	
}
else{
	
}
else{
	
} no puede haber 2 else juntos.
*/