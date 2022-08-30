/*Alex Ivan Gonzalez/Div:C/Ejer.05 Entrada-Salida
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//alert("Usted se llama"  $(nombre) "y tiene" $(edad));

	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	//Nota: poner los espacios detro de las comillas, sino queda todo junto.
}

