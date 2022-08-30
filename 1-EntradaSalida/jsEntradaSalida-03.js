/*Alex Ivan Gonzalez/Div:C/Ejer.03 Entrada-Salida
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaro la variable
	let nombreIngresado;

	//nombreIngresado=txtIdNombre.value; (Puede generar errores)

	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}

//txtIdNombre


