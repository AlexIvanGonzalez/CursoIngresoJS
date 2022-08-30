/*Alex Ivan Gonzalez/Div:C/Ejer.02 Entrada-Salida
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro variable.
	//var nombre;
	let nombre; 

	//Tomo el dato.
	nombre = prompt("ingrese su nombre");
	
	//muestro la variable. Lo que escriba en el prompt saldra en el alert.
	alert(nombre);
}
	//var ...; : Variable que funciona fuera del function para todo el programa/functions.
	//let ...; : Variable que solo funciona dentro del function.
	// ... = : Variable.
	//prompt("..."); : caja de texto en la que se ingresan datos.
	//alert(...) : Ingreso variable.
