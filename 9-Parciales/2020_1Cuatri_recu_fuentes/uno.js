/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Recuperatorio Ejer.01.
1)De 6 personas que ingresan a la Administración
Nacional de la Seguridad Social (Anses) pedir y validar los siguientes datos.

nombre , sueldo mensual(entre 0 y 200000), cuantos
días a la semana trabaja(entre 1 y 7, limites incluidos), sexo(f o m) y si está
en relación de dependencia o no:
 
a)Informar la cantidad de personas que no están
en relación de dependencia que cobran más de 100000 al mes y la cantidad de
personas en relación de dependencia que cobran menos de 60000.

b)El sueldo promedio mensual en total

c)El hombre que trabaja menos días y la mujer que
trabaja más días a la semana.
*/
function mostrar()
{
	let nombre;
	let sueldoMensual;
	let diasTrabajados;
	let sexo;
	let relacionDependencia;
	let promedioSueldoMensual;

	let contadorRelacionDependenciaSecenta = 0;
	let contadorRelacionDependenciaCien = 0;
	
	let flagMujer = false;
	let flagHombre = false;
	
	let contador = 0;
	let acumuladorSueldo = 0;

	let hombreMin;
	let mujerMax;
	let diasMin;
	let diasMax;

	while(contador < 6)
	{	
		/*nombre , sueldo mensual(entre 0 y 200000), cuantos
		días a la semana trabaja(entre 1 y 7, limites incluidos), sexo(f o m) y si está
		en relación de dependencia o no:*/

		nombre = prompt("Ingrese su nombre: ");	
	
		sueldoMensual = parseInt(prompt("Ingrese su sueldo mensual (0 a 200000): "));
	
		while(sueldoMensual < 0 || sueldoMensual > 200000)
		{
			sueldoMensual = parseInt(prompt("Error, reingrese los datos (0 a 200000): "));
		}
	
		diasTrabajados = parseInt(prompt("Ingrese sus dias trabajados (1 a 7): "));

		while(diasTrabajados < 1 || diasTrabajados > 7) 
		{
			diasTrabajados = parseInt(prompt("Error, reingrese los datos (1 a 7): "));
		}

		sexo = prompt("Ingrese su sexo (f o m): ");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, reingrese los datos (f o m): ");
		}

		relacionDependencia = prompt("Ingrese si esta en relacion de dependencia o no (si o no): ");
	
		while(relacionDependencia != "si" && relacionDependencia != "no") 
		{
			relacionDependencia = prompt("Error, reingrese los datos (si o no): ");
		}

		/*a)Informar la cantidad de personas que no están
			en relación de dependencia que cobran más de 100000 al mes y la cantidad de
			personas en relación de dependencia que cobran menos de 60000.*/
		
		if(relacionDependencia == "no")
		{
			if(sueldoMensual > 100000)
			{
				contadorRelacionDependenciaCien++;
			}
		}
		else
		{
			if(sueldoMensual < 60000)
			{
				contadorRelacionDependenciaSecenta++;	
			}
		}

		/*c)El hombre que trabaja menos días y la mujer que
		trabaja más días a la semana.*/

		if(sexo == "m") 
		{
			if(!flagHombre)
			{
				hombreMin = nombre;
				diasMin = diasTrabajados;
				flagHombre = true; 
			}
			else
			{
				if(diasTrabajados < diasMin) 
				{
					hombreMin = nombre;
					diasMin = diasTrabajados;
				}
			}
		}
		else
		{
			if(!flagMujer)
			{
				mujerMax = nombre;
				diasMax = diasTrabajados;
				flagMujer = true;
			}
			else
			{
				if(diasTrabajados > diasMax)
				{
					mujerMax = nombre;
					diasMax = diasTrabajados;
				}
			}
		}

		acumuladorSueldo += sueldoMensual;

		contador++;
	}

	/*b)El sueldo promedio mensual en total*/

	promedioSueldoMensual = acumuladorSueldo / contador;

	/*a)Informar la cantidad de personas que no están
	en relación de dependencia que cobran más de 100000 al mes y la cantidad de
	personas en relación de dependencia que cobran menos de 60000.

	b)El sueldo promedio mensual en total

	c)El hombre que trabaja menos días y la mujer que
	trabaja más días a la semana.
	*/

	console.log("Personas que no estan en relacion de dependencia con sueldo de más de 100000 al mes: " + contadorRelacionDependenciaCien);
	console.log("Personas en relacion de dependencia con sueldo de menos de 60000: " + contadorRelacionDependenciaSecenta);
	console.log("Promedio sueldo mensual total: " + promedioSueldoMensual);
	console.log("El hombre que trabaja menos días y la mujer que trabaja más días a la semana son:" +hombreMin+ " con " +diasMin+ " dias y " +mujerMax+ " con " +diasMax+ " dias.");
}//FIN DE LA FUNCIÓN 
/*********************************************************************************************************************************************************/


