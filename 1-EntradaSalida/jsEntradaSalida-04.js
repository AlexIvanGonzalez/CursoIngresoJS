/*Alex Ivan Gonzalez/Div:C/Ejer.04 Entrada-Salida
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	let datos;

	//Tomo el dato por prompt
	datos = prompt("ingrese su nombre");

	//invierto el value para que me muestre el texto en la caja.
	//lo que esta en la derecha se guarda en la izquierda.   

	//Muestro el dato
	document.getElementById("txtIdNombre").value = datos;

	alert("datos cargados");
}

//<input type="text" readonly="" placeholder="Su nombre" id="txtIdNombre">
