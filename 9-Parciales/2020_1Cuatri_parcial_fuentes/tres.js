/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Ejer.03.

3)Nos ingresan una cantidad indeterminada de vuelos,
validando los datos ingresados:

nombre del pasajero ,aerolínea ( “Aerolíneas
Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
cantidad de horas de vuelo (entre 0 y 8).

Informar:
a) La aerolínea más elegida.
b) El nombre del pasajero que más horas viajó.
c) El promedio de horas de vuelo a Bariloche.*/

function mostrar()
{
  	let nombre;
  	let aerolinea;
  	let destino;
  	let cantidadHoraVuelos;
  	let aerolineaMasElegida;
  	let nombrePasajeroMasHoras;
  	let mayorCantidadHoras;

  	let contadorArgentinas = 0;
  	let contadorJetSmart = 0;
  	let contadorFlyBondi = 0;

  	let flagPrimerPasajero = false;

    let acumuladorBariloche = 0;
    let contadorBariloche = 0;
    let promedioHorasBariloche;

  	let respuesta;
  
  	respuesta = "si";

  	while(respuesta == "si")
	{ 
  		/*nombre del pasajero ,aerolínea ( “Aerolíneas Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
		cantidad de horas de vuelo (entre 0 y 8).*/

    	nombre = prompt("Ingrese su nombre: ");
  
    	aerolinea = prompt("Ingrese su aerolinea (Aerolíneas Argentinas, JetSmart o FlyBondi): ");
  
   		while(aerolinea != "Aerolíneas Argentinas" && aerolinea != "JetSmart" && aerolinea != "FlyBondi")
   		{
     	 aerolinea = prompt("Error, reingrese los datos (Aerolíneas Argentinas, JetSmart o FlyBondi): "); //poner Error, reingrese el dato: y lo copio y pego en todos 
    	}

    	destino = prompt("Ingrese su destino (Bariloche, Cataratas o Salta): ");

    	while(destino != "Bariloche" && destino != "Cataratas" && destino != "Salta")
    	{
      		destino = prompt("Error, reingrese los datos (Bariloche, Cataratas o Salta): ");
    	}

    	cantidadHoraVuelos = parseInt(prompt("Ingrese su cantidad de horas volando (entre 0 y 8): "));

    	while(cantidadHoraVuelos < 0 || cantidadHoraVuelos > 8)
    	{
      		cantidadHoraVuelos = parseInt(prompt("Error, reingrese los datos (entre 0 y 8): "));
    	}

    /*Informar:
	a) La aerolínea más elegida.
	b) El nombre del pasajero que más horas viajó.
	c) El promedio de horas de vuelo a Bariloche.*/

		//a) La aerolínea más elegida.

		switch (aerolinea)                    
    	{
    		case "Aerolíneas Argentinas":
        		contadorArgentinas ++;
    		break;

    		case "JetSmart":
        		contadorJetSmart ++;
   			break;

    		default:
    			contadorFlyBondi ++;
			break;
    	}

		//b) El nombre del pasajero que más horas viajó.

		if(!flagPrimerPasajero)                
    	{ 
    		mayorCantidadHoras = cantidadHoraVuelos;
    		nombrePasajeroMasHoras = nombre;
    		flagPrimerPasajero = true;
    	}
    	else
    	{
    		if(cantidadHoraVuelos > mayorCantidadHoras)
    		{
    			mayorCantidadHoras = cantidadHoraVuelos;
    			nombrePasajeroMasHoras = nombre;
    		}
    	}

		//c) El promedio de horas de vuelo a Bariloche.

    	if(destino == "Bariloche")
    	{
    		acumuladorBariloche += cantidadHoraVuelos;  
    		contadorBariloche ++;
    	}

    	respuesta = prompt("¿Desea continuar (si o no)?");
	}

	//a) La aerolínea más elegida.
	if(contadorArgentinas > contadorJetSmart && contadorArgentinas > contadorFlyBondi) 
	{
		aerolineaMasElegida = "Aerolíneas Argentinas";
	}
	else
	{
		if(contadorJetSmart > contadorFlyBondi)
		{
			aerolineaMasElegida = "JetSmart";
		}
		else
		{
			aerolineaMasElegida = "FlyBondi";
		}
	}

  	promedioHorasBariloche = acumuladorBariloche / contadorBariloche;
    /*Informar:
	a) La aerolínea más elegida.
	b) El nombre del pasajero que más horas viajó.
	c) El promedio de horas de vuelo a Bariloche.*/
  console.log("La aerolínea más elegida es: " + aerolineaMasElegida);
  console.log("El nombre del pasajero que más horas viajó es: " +nombrePasajeroMasHoras+ " con " +mayorCantidadHoras+ " horas.");
  console.log("El promedio de horas de vuelo a Bariloche es: " +promedioHorasBariloche+ " horas.");
}//FIN DE LA FUNCIÓN 
/*********************************************************************************************************************************************************/
/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Ejer.03.

3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que:

*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones
*/
/*function mostrar()
{
	alert("tres");
}*/


