/*Alex Ivan Gonzalez/Div:C/Ejer.10 Entrada-Salida
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	let porcentaje;

	porcentaje = 25;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	descuento = importe * porcentaje / 100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
