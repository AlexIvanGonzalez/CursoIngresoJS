/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let contraseña;
	
	contraseña = prompt("ingrese la contraseña.");

	while(contraseña != "utn750")
	{
		alert("Contraseña incorrecta.");
		
		contraseña = prompt("reingrese la contraseña.");
	}

	alert("Contraseña correcta");
	
}//FIN DE LA FUNCIÓN
