/*Alex Ivan Gonzalez/Div:C/Ejer.09 Entrada-Salida
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	
	let sueldo;
	let aumento;
	let resultado;
	let porcentaje;

	porcentaje = 10;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	aumento = sueldo * porcentaje / 100;

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;
}
