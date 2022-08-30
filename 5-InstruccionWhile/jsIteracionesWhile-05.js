/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m") //Uso el And para q solo cuando da falso (q uno de los dos sea el dato) me de el resultado.
	{
		sexoIngresado = prompt("reingrese el dato.");
	}

	alert("Dato valido.");

	document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN

//id="txtIdSexo"
