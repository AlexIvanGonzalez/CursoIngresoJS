/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetro;
	let alambre;
	let resultado;

	alambre = 3;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2 * (largo + ancho);

	resultado = alambre * perimetro;

	alert("La cantidad de metros de alambre es " + resultado);
}

function Circulo () 
{
	let radio;
	let pi;
	let perimetro;
	let alambre;
	let resultado;

	alambre = 3;
	pi = 3.14;

	radio = document.getElementById("txtIdRadio").value;

	radio = parseInt(radio);

	perimetro = 2 * pi * radio;

	resultado = perimetro * alambre;

	alert("La cantidad de metros de alambre a comprar es " + resultado);
}

function Materiales () 
{
	let largo;
	let ancho;
	let area;
	let cemento;
	let cal;
	let resultadocal;
	let resultadoarena;

	cemento = 2;
	cal = 3;
	
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = largo * ancho;

	resultadocemento = area * cemento; 
	resultadocal =  area * cal;
	
	alert("La cantidad de bolsas de cemento es " + resultadocemento + " y de bolsas de cal es " + resultadocal);
}