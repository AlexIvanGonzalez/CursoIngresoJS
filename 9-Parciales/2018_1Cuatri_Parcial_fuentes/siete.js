/*Alex Ivan Gonzalez/Div:C/Ejer.07 Parcial 2019.

Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
	let contador;
	let sexo;
	let nota;
	let acumuladorNotas;
	let promedio;
	let banderaDelPrimero;
	let notaMinima;
	let sexoMinimo;
	let contadorMasculinos;

	banderaDelPrimero = "es el primero";

	contador = 0;
	acumuladorNotas = 0;
	contadorMasculinos = 0;
	//1.
	while(contador < 5)
	{
		nota = prompt("ingrese su nota");
		nota = parseInt(nota);

		while(contador < 0 || nota > 10)
		{
			nota = prompt("error, reingrese su nota.");
			nota = parseInt(nota);
		}

		sexo = prompt("ingrese su sexo (f o m)");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("reingrese su sexo (f o m)");
		}
		//2.
		if (banderaDelPrimero == "es el primero") //para dar una nota inicial en la primera vuelta
		{
			notaMinima = nota;
			sexoMinimo = sexo;
			banderaDelPrimero = "ya se cargo";
		}

		else
		{
			if(nota < notaMinima)
			{
				notaMinima = nota;
				sexoMinimo = sexo;
			}
		}
		//3.
		if (nota > 5 && sexo == "m") 
		{
			contadorMasculinos++;
		}

		acumuladorNotas += nota;

		contador++;

	}

	promedio = acumuladorNotas / contador;

	console.log("El promedio es:" + promedio);
	console.log("el sexo menor es:" + sexoMinimo);
	console.log("la nota menor es:" + notaMinima);
	console.log("los masculinos que su nota fue mayor a 6 es:" + contadorMasculinos);
}

