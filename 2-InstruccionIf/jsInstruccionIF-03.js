/*Al ingresar una edad debemos informar si la persona es mayor 
de edad, sino informar que es un menor de edad.
Nombre y Apellido:Alex Ivan Gonzalez/Div:C/Ejercicio: 3 if.*/


function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	
	edadIngresada = parseInt(edadIngresada)

	/*if(edadIngresada > 17)
	{
		alert("Usted es mayor de edad");
	} 

	if(edadIngresada  < 18)
	{
		alert("Usted es menor de edad");
	}*/
	
	//cuidado con el error de poner el mismo numero en los if.
	//no hacer asi porq no es la forma correcta

	if(edadIngresada > 17) //(true) forma correcta. 
	{
		alert("Usted es mayor de edad");
	}
	
	else //(false) con else tambien el procesador no consume tanta ram. (me ahorro procesos)
	{
		alert("Usted es menor de edad");
	}


}//FIN DE LA FUNCIÓN