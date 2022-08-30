function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada)

	//edadIngresada = edadIngresada == 15;

	/*if(edadIngresada)//verdadera o falsa
	{
		alert("niña bonita");
	} Otra forma de hacerlo*/ 


	//edad=15
	if(edadIngresada == 15)  //verdadera o falsa (true or false)
	{
		//codigo a realizar si se cumple la condicion
		alert("niña bonita");
	}
	//if no lleva ;
	//tomo la edad  
	alert("gracias por decir su edad");

}//FIN DE LA FUNCIÓN

//if (condición) {}

/*opereradores aritmeticos 
+, -, *, / y %.  */

/* operadores relacionales 
==, >, <, >= y <=. otro es!= (distinto) */

/* operadores logicos 
&& (y/and), , || (o/or), ! (no/not) */