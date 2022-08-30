/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Recuperatorio Ejer.03.
3)Nos ingresan una cantidad indeterminada de vuelos,
validando los datos ingresados:
 
nombre del pasajero ,aerolínea ( “Aerolíneas
Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
cantidad de horas de vuelo (entre 0 y 8) y el asiento de ese pasajero (entre 1
y 120, limites incluidos)
Informar:
a) La aerolínea más elegida
b) El nombre del pasajero que menos horas
viajó y su asiento.
c) El promedio de horas de vuelo a Salta.
*/
function mostrar()
{
  	let nombre;
  	let aerolinea;
  	let destino;
  	let cantidadHoraVuelos;
  	let asientoPasajero;
  	let aerolineaMasElegida;
  	let nombrePasajeroMenosHoras;
  	let menorCantidadHoras;
  	let asientoPasajeroMenosHoras;

  	let contadorArgentinas = 0;
  	let contadorJetSmart = 0;
  	let contadorFlyBondi = 0;

  	let flagPrimerPasajero = false;

    let acumuladorSalta = 0;
    let contadorSalta = 0;
    let promedioHorasSalta;

  	let respuesta;
  
  	respuesta = "si";

  	while(respuesta == "si")
	{ 
  		/*nombre del pasajero ,aerolínea ( “Aerolíneas
		Argentinas”, “JetSmart” o “FlyBondi”),destino(“Bariloche”, “Cataratas”, “Salta”)
		cantidad de horas de vuelo (entre 0 y 8) y el asiento de ese pasajero (entre 1
		y 120, limites incluidos)*/

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

    	asientoPasajero = parseInt(prompt("Ingrese su cantidad de asiento del pasajero (entre 1 y 120): "));

    	while(asientoPasajero < 1 || asientoPasajero > 120)
    	{
      		asientoPasajero = parseInt(prompt("Error, reingrese los datos (entre 1 y 120): "));
    	}

    	/*Informar:
		a) La aerolínea más elegida
		b) El nombre del pasajero que menos horas
		viajó y su asiento.
		c) El promedio de horas de vuelo a Salta.*/

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

		//b)El nombre del pasajero que menos horas viajó y su asiento.

		if(!flagPrimerPasajero)                
    	{ 
    		menorCantidadHoras = cantidadHoraVuelos;
    		nombrePasajeroMenosHoras = nombre;
    		asientoPasajeroMenosHoras = asientoPasajero;
    		flagPrimerPasajero = true;
    	}
    	else
    	{
    		if(cantidadHoraVuelos < menorCantidadHoras)
    		{
    			menorCantidadHoras = cantidadHoraVuelos;
    			nombrePasajeroMenosHoras = nombre;
    			asientoPasajeroMenosHoras = asientoPasajero;
    		}
    	}

		//c)El promedio de horas de vuelo a Salta.

    	if(destino == "Salta")
    	{
    		acumuladorSalta += cantidadHoraVuelos;  
    		contadorSalta ++;
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

  	promedioHorasSalta = acumuladorSalta / contadorSalta;
      /*Informar:
	a) La aerolínea más elegida
	b) El nombre del pasajero que menos horas
	viajó y su asiento.
	c) El promedio de horas de vuelo a Salta.*/
  console.log("La aerolínea más elegida es: " + aerolineaMasElegida);
  console.log("El nombre del pasajero que menos horas viajó y su asiento es: " +nombrePasajeroMenosHoras+ " con " +menorCantidadHoras+ " horas y su asiento es " +asientoPasajeroMenosHoras+ ".");
  console.log("El promedio de horas de vuelo a Salta es: " +promedioHorasSalta+ " horas.");
}//FIN DE LA FUNCIÓN 
/*********************************************************************************************************************************************************/

