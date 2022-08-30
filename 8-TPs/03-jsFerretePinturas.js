/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let fahrenheitcentigrados;
	
	temperatura = document.getElementById("txtIdTemperatura").value;
	
	temperatura = parseInt(temperatura);

	fahrenheitcentigrados = (temperatura - 32) * 5 / 9;
	
	alert("Conversion es " + fahrenheitcentigrados + " °C");
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let centigradosfahrenheit;

	temperatura = document.getElementById("txtIdTemperatura").value;
	
	temperatura = parseInt(temperatura);

	centigradosfahrenheit = (temperatura * 9 / 5) + 32;

	alert("Conversion es " + centigradosfahrenheit + " °F");
}
