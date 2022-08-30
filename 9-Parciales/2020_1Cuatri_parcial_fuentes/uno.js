/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Ejer.01.

1)De 6 personas que ingresan a la Administración
Nacional de la Seguridad Social (Anses) pedir y validar los siguientes datos.

nombre , sueldo mensual(entre 0 y 200000), cuantos
días a la semana trabaja(entre 1 y 7, limites incluidos), sexo(f o m) y si está
en relación de dependencia o no:

a)Informar la cantidad de personas en relación
de dependencia que cobran más de 60000 al mes y la cantidad de personas que no
están en relación de dependencia que cobran menos de 100000.

b)El sueldo promedio mensual en total

c)El hombre que trabaja más días y la mujer que
trabaja menos días a la semana.*/

function mostrar()
{
	let nombre;
	let sueldoMensual;
	let diasTrabajados;
	let sexo;
	let relacionDependencia;
	let promediosueldoMensual;

	let contadorrelacionDependenciaSecenta = 0;
	let contadorrelacionDependenciaCien = 0;
	
	let flagMujer = false;
	let flagHombre = false;
	
	let contador = 0;
	let acumuladorSueldo = 0;

	let hombreMax;
	let diasMax;
	let mujerMin;
	let diasMin;

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

		while(diasTrabajados < 1 || diasTrabajados > 7) //Corrección: Es while(diasTrabajados < 1 || diasTrabajados > 7)
		{
			diasTrabajados = parseInt(prompt("Error, reingrese los datos (1 a 7): "));
		}

		sexo = prompt("Ingrese su sexo (f o m): ");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, reingrese los datos (f o m): ");
		}

		relacionDependencia = prompt("Ingrese si esta en relacion de dependencia o no: ");
	
		while(relacionDependencia != "si" && relacionDependencia != "no") 
		{
			relacionDependencia = prompt("Error, reingrese los datos (si o no): ");
		}

		/*a)Informar la cantidad de personas en relación
		de dependencia que cobran más de 60000 al mes y la cantidad de personas que no
		están en relación de dependencia que cobran menos de 100000.*/
		
		if(relacionDependencia == "si") //MAL Escuchar explicacion Felix 12:47
		{
			if(sueldoMensual > 60000)
			{
				contadorrelacionDependenciaSecenta++;
			}
		}
		else
		{
			if(sueldoMensual < 100000)
			{
				contadorrelacionDependenciaCien++;	
			}
		}

		/*c)El hombre que trabaja más días y la mujer que
		trabaja menos días a la semana.*/

		if(sexo == "m") 
		{
			if(!flagHombre)
			{
				hombreMax = nombre;
				diasMax = diasTrabajados;
				flagHombre = true; //puedo usar 0 y 1, siempre empieza en false y pasa a true. true y false sin comillas.
			}
			else
			{
				if(diasTrabajados > diasMax) 
				{
					hombreMax = nombre;
					diasMax = diasTrabajados;
				}
			}
		}
		else
		{//Solo el IF directo. Esto es porq no hay un 3er genero. si lo hubiera es como el Ejer. que hizo felix.
			if(!flagMujer)
			{
				mujerMin = nombre;
				diasMin = diasTrabajados;
				flagMujer = true;
			}
			else
			{
				if(diasTrabajados < diasMin)
				{
					mujerMin = nombre;
					diasMin = diasTrabajados;
				}
			}
		}

		acumuladorSueldo += sueldoMensual;

		contador++;
	}

	/*b)El sueldo promedio mensual en total*/

	promediosueldoMensual = acumuladorSueldo / contador;

	console.log("Personas en relacion de dependencia con sueldo de mas de 60000: " + contadorrelacionDependenciaSecenta);
	console.log("Personas que no estan en relacion de dependencia con sueldo de menos de 100000: " + contadorrelacionDependenciaCien);
	console.log("Promedio sueldo mensual total: " + promediosueldoMensual);
	console.log("El hombre que trabaja más días y la mujer que trabaja menos días a la semana son:" +hombreMax+ " con " +diasMax+ " dias y " +mujerMin+ " con " +diasMin+ " dias.");
}//FIN DE LA FUNCIÓN 
/*********************************************************************************************************************************************************/
/*Alex Ivan Gonzalez/Div:C/Simulacro Parcial Ejer.01

1)De 5  personas que ingresan al hospital se deben tomar y validar los
siguientes datos.

nombre , latidos por minuto,  sexo, peso y si está
vacunado o no contra el sarampión:

a)informar la cantidad de personas vacunadas y
no vacunadas.

b)el peso promedio en total (0kg y 300kg)

c)el hombre con menos latidos por minuto y la
mujer con más latidos por minuto (0lpm y 200lpm)

pedir datos por prompt y mostrar por
document.write o console.log
*/
/*function mostrar()
{
	//declarar contadores y variables 
	let contador = 0;
	let nombre;
	let latidosMinuto;
	let peso;
	let vacunado;
	let sexo;

	let contadorVacu = 0;
	let contadorNoVacu = 0;
	let pesoTotal = 0;
	let hombreMinimo;
	let mujerMaximo;
	let minLatidos;
	let maxLatidos;
	let promedioPeso;
	let flagMujer = false;
	let flagHombre = false;
	

	while(contador < 5)
	{

		nombre = prompt("Ingrese su nombre: ");
	
		latidosMinuto = parseInt(prompt("Ingrese los latidos por minuto: "));
	
		while(latidosMinuto < 0)
		{
			latidosMinuto = parseInt(prompt("Reingrese los latidos por minuto: "));
		}
	
	
		peso = parseInt(prompt("Ingrese el peso: "));
	
		while(peso < 0 || peso > 300)
		{
			peso = parseInt(prompt("Reingrese el peso: "));
		}
	
		vacunado = prompt("Ingrese si esta vacunado o no: ");
	
		while(vacunado != "si" && vacunado != "no")
		{
			vacunado = prompt("Reingrese si esta vacunado o no: ");
		}
	
		sexo = prompt("Ingrese su sexo: ");
	
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Reingrese el sexo: ");
		}
	
		if(vacunado == "si")
		{
			contadorVacu++;
		}
		else
		{
			contadorNoVacu++;
		}
	
		pesoTotal += peso;
	
		if(sexo == "m") //si es m entra porq ya es false cuando se cargan los datos la primera vez.
		{
			if(!flagHombre)
			{
				hombreMinimo = nombre;
				minLatidos = latidosMinuto;
				flagHombre = true; //carga valor true para q no entre mas aca y entre siempre en el else.
			}
			else
			{
				if(latidosMinuto < minLatidos) //
				{
					hombreMinimo = nombre;
					minLatidos = latidosMinuto;
				}
			}
		}
		else
		{
			if(sexo == "f")
			{
				if(!flagMujer)
				{
					mujerMaximo = nombre;
					maxLatidos = latidosMinuto;
					flagMujer = true;
				}
				else
				{
					if(latidosMinuto > maxLatidos)
					{
						mujerMaximo = nombre;
						maxLatidos = latidosMinuto;
					}
				}
			}
		}

		contador++;
	}

	promedioPeso = pesoTotal / contador;
	console.log("La cantidad de vacunados es: " + contadorVacu + ". Y la cantidad de no vacunados es: " + contadorNoVacu);
	console.log("El peso promedio total es: " + promedioPeso);
	console.log("El hombre con menos latidos es: " + hombreMinimo + ", y sus latidos son " + minLatidos);
	console.log("La mujer con mas latidos es: " + mujerMaximo + ", y sus latidos son " + maxLatidos);

}//FIN DE LA FUNCIÓN*/
/*********************************************************************************************************************************************************/
/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Recuperatorio Ejer.01.

*/
/*********************************************************************************************************************************************************/
/*
//EJERCICIO 1

function mostrar()
{

	let menosDiasTrabajo;
	let banderaHombreMasDias;
	let banderaMujerMenosDias;
	let contador;
	let contadorMasDeSesenta;
	let contadorMenosDeCien;
	let diasTrabajados;
	let hombreMasDias;
	let mujerMenosDias;
	let nombreIngresado;
	let relacionDependencia;
	let sexoIngresado;
	let sueldoAcumulado;
	let sueldoMensual;
	let sueldoPromedio;
	let mayorDiasDeTrabajo;

	sueldoAcumulado = 0;
	contadorMasDeSesenta = 0;
	contadorMenosDeCien = 0;
	contador = 0;
	banderaHombreMasDias = false;
	banderaMujerMenosDias = false;

	while(contador < 6)
	{
		nombreIngresado = prompt("Ingrese su nombre");

		sueldoMensual = parseInt(prompt("Ingrese su sueldo"));

		while(sueldoMensual < 0 || sueldoMensual > 200000)
		{
			sueldoMensual = parseInt(prompt("Ingrese un valor entre 1 y 200000"));
		}

		diasTrabajados = parseInt(prompt("Ingrese los dias a la semana que trabaja"));

		while(diasTrabajados < 1 || diasTrabajados > 7)
		{
			diasTrabajados = parseInt(prompt("Ingrese un numero valido (1 a 7)"));
		}

		sexoIngresado = prompt("Ingrese su sexo");

		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Ingrese su sexo ('f' o 'm')");
		}

		relacionDependencia = prompt("¿Está en relacion de dependencia?");

		while(relacionDependencia != "si" && relacionDependencia != "no")
		{
			relacionDependencia = prompt("Dato ingresado invalido, ¿esta en relacion de dependencia?");
		}

		sueldoAcumulado += sueldoMensual;

		if(relacionDependencia == "si")
		{
			if(sueldoMensual > 60000)
			{
				contadorMasDeSesenta ++;
			}
		}
		else
		{
			if(sueldoMensual < 100000)
			{
				contadorMenosDeCien ++;
			}
		}

		if(sexoIngresado == "f")
		{
			if(!banderaMujerMenosDias)
			{
				mujerMenosDias = nombreIngresado;
				menosDiasTrabajo = diasTrabajados;
				banderaMujerMenosDias = true;
			}
			else
			{
				if(diasTrabajados < menosDiasTrabajo)
				{
					mujerMenosDias = nombreIngresado;
					menosDiasTrabajo = diasTrabajados;
				}
			}
		}
		else
		{
			if(!banderaHombreMasDias)
			{
				hombreMasDias = nombreIngresado;
				mayorDiasDeTrabajo = diasTrabajados;
				banderaHombreMasDias = true;
			}
			else
			{
				if(diasTrabajados > mayorDiasDeTrabajo)
				{
					hombreMasDias = nombreIngresado;
					mayorDiasDeTrabajo = diasTrabajados;
				}
			}
		}
		contador ++;
	}


sueldoPromedio = sueldoAcumulado/contador;


document.write("La cantidad de personas en relacion de dependencia que cobran mas de 60.000 es " + contadorMasDeSesenta + " y la cantidad de personas que no estan en relacion de dependencia y que cobran menos de 100.000 son " + contadorMenosDeCien + "<br>");
document.write("El sueldo promedio mensual es de " + sueldoPromedio + "<br>");
document.write("El hombre que mas trabaja es " + hombreMasDias + " y trabaja " + MayorDiasDeTrabajo + " dias" + "<br>");
document.write("La mujer que menos trabaja es " + mujerMenosDias + " y trabaja " + MenosDiasTrabajo + " dias" + "<br>");

}


//EJERCICIO 2

function mostrar()
{
    let modelo;
    let precio;
    let cantidadNucleos;
    let fabricante;
    let acumulador = 0;
    let flagPrimerAmd = false;
    let modeloMenosNucleos;
    let menosNucleosAmd;
    let flagPrimerIntel = false;
    let modeloMasNucleos;
    let masNucleosIntel;
    let respuesta = "si";

    while(respuesta =="si")
    {
        modelo = prompt("Ingrese el modelo");

        precio = parseInt(prompt("Ingrese el precio (entre 10000 y 60000)"));
        while(precio < 10000 || precio > 60000)
        {
            precio = parseInt(prompt("Ringrese el precio (entre 10000 y 60000)"));
        }

        cantidadNucleos = parseInt(prompt("Ingrese la cantidad de nucleos (entre 4 y 18)"));
        while(cantidadNucleos < 4 || cantidadNucleos > 18)
        {
            cantidadNucleos = parseInt(prompt("Rengrese la cantidad de nucleos (entre 4 y 18)"));
        }

        fabricante = prompt("Ingrese el fabricante (amd o intel)");
        while(fabricante !="amd" && fabricante !="intel")
        {
            fabricante = prompt("Ringrese el fabricante (amd o intel)");
        }

        acumulador += precio;   

        if(fabricante == "amd")         
        {
            if(!flagPrimerAmd)
            {
                flagPrimerAmd = true;
                modeloMenosNucleos = modelo;
                menosNucAmd = cantidadNucleos;
            }
            else
            {
                if(cantidadNucleos < menosNucleosAmd)
                {
                    menosNucleosAmd = cantidadNucleos;
                    modeloMenosNucleos = modelo;
                }
            }
        }
        else
        {
            if(!flagPrimerIntel)     
            {
                flagPrimerIntel = true;
                modeloMasNucleos = modelo;
                masNucleosIntel = cantidadNucleos;
            }
            else
            {
                if(cantidadNucleos > masNucleosIntel)
                {
                    masNucleosIntel = cantidadNucleos;
                    modeloMasNucleos = modelo;
                }
            }
        }


        respuesta = prompt("Desea continuar?");
    }

    console.log("El precio total de la compra es de: "+ acumulador);
    console.log("El modelo del procesador con menos nucleos de los amd es: " + modeloMenosNucleos + " con " + menosNucleosAmd + " nucleos");
    console.log("El modelo del procesador con mas nucleos de los intel es: " + modeloMasNucleos + " con " + masNucleosIntel + " nucleos");
}

//EJERCICIO 3

function mostrar()
{
    let nombre;
    let aerolinea;
    let destino;
    let horas;
    let aerolineaMasElegida;
    let contadorArgentinas = 0;
    let contadorJetSmart = 0;
    let contadorFlyBondi = 0;
    let flagPrimerPasajero = false;
    let mayorCantidadHoras;
    let nombrePasajeroMasHoras;
    let acumuladorBariloche = 0;
    let contadorBariloche = 0;
    let respuesta = "si";

    while(respuesta =="si")
    {
        nombre = prompt("Ingrese el nombre de pasajero");

        aerolinea = prompt("Ingrese la aerolinea (Aerolineas Argentinas, JetSmart o FlyBondi)");

        while(aerolinea !="Aerolineas Argentinas" && aerolinea !="JetSmart" && aerolinea !="FlyBondi")
        {
            aerolinea = prompt("Reingrese la aerolinea (Aerolineas Argentinas, JetSmart o FlyBondi)");
        }

        destino = prompt("Ingrese el destino (Bariloche, Cataratas o Salta)");
		
		while(aerolinea !="Bariloche" && aerolinea !="Cataratas" && aerolinea !="Salta")
        {
            aerolinea = prompt("Reingrese el destino (Bariloche, Cataratas o Salta)");
        }

        horas = parseInt(prompt("Ingrese la cantidad de horas (entre 0 y 8)"));
        
		while(horas < 1 || horas > 8)
        {
            horas = parseInt(prompt("Reingrese la cantidad de horas (entre 1 y 8)"));
        }

        switch (aerolinea)                    
        {
            case "Aerolineas Argentinas":
                contadorArgentinas ++;
                break;

            case "JetSmart":
                contadorJetSmart ++;
                break;

            default:
                contadorFlyBondi ++;
				break;
        }

        
             
        if(!flagPrimerPasajero)                
        { 
            flagPrimerPasajero = true;
            mayorCantidadHoras = horas;
            nombrePasajeroMasHoras = nombre;
        }
        else
        {
            if(horas > mayorCantidadHoras)
            {
                mayorCantidadHoras = horas;
                nombrePasajeroMasHoras = nombre;
            }
        }

        if(destino == "Bariloche")
        {
            acumuladorBariloche += horas;  
            contadorBariloche ++;
        }

        respuesta = prompt("Desea continuar?(si para continuar)");
    }
	
	if(contadorArgentinas > contadorJetSmart && contadorArgentinas > contadorFlyBondi) 
	{
		aerolineaMasElegida = "Aerolineas Argentinas";
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

    promedio = acumuladorBariloche / contadorBariloche;

    console.log("La aerolinea mas elegida es: " + aerolineaMasElegida);
    console.log("El nombre del pasajero que mas horas viajo es: " + nombrePasajeroMasHoras + " con " + mayorCantidadHoras + " horas");
    console.log("El promedio de horas de vuelo a Bariloche es de: " + promedio);
   
   }

*/
/*********************************************************************************************************************************************************/
/*Alex Ivan Gonzalez/Div:C/Simulacro Parcial Ejer.03.
3)Nos ingresan una cantidad indeterminada de
estadías de  vacaciones, validando los datos ingresados:

nombre del titular ,lugar (“Puerto Madryn”,“Villa Gessel” o “Córdoba”),
temporada(“otoño”,“invierno”,“verano”,“primavera”),cantidad de días que durará el viaje.

informar:

a)el lugar más elegido.

b)el nombre del titular que más días viaje.

c)el promedio de días por viaje, de la
temporada verano.


function mostrar()
{
	let titular;
	let lugar;
	let precio;
	let temporada;
	let dias;
	let pesoPromedioDias;
	let respuesta;


	document.write("el lugar mas elegido es: " +  + "<br>");
	document.write("el nombre del titular que más días viajo es: " +  + "<br>");
	document.write("el promedio de días por viaje, de la temporada verano es: " +  + "<br>");
desp del while
	if(contadorMadryn > contadorGessel && contadorMadryn > contadorCordoba)
	{
		lugarMax = "Madryn";
	}
	else
	{
		if(contadorGessel > contadorCordoba)
		{
			lugarMax = "Gessel";
		}
		else
		{
			lugarMax = "Cordoba";
		}
	}

}*/

/*
1. Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Minimo importe con su pais
b. Maximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/
/*function mostrar()
{
	let nombrePais;
	let nombrePaisMin;
	let marcaProducto;
	let nombreMarcaMax;
	let importe;
	let importeMax;
	let importeMin;
	let promedioImporte;
	let importeFinalMax;
	let porcentaje;
	let descuento;
	let acumulador;

	let contador = 0;
	let contadorChina = 0;

	let flagImporteMin = false;
	let flagImporteMax = false;

	acumulador = 0;
	

	while(contador < 5)
	{

		nombrePais = prompt("Ingrese su pais:");
	
		while(nombrePais != "China" && nombrePais != "Uruguay" && nombrePais != "Paraguay")
		{
			nombrePais = prompt("Reingrese el pais:");
		}
		
		marcaProducto = prompt("Ingrese la marca del producto:");

		importe = prompt("Ingrese el importe del producto:");

		importe = parseInt(importe);

		while(importe < 0)
		{
			importe = prompt("Reingrese el importe del producto:");

			importe = parseInt(importe);
		}
	
		//d. Cantidad de productos de China

		if(nombrePais == "China")
		{
			contadorChina++;
		}
	
		//a. Minimo importe con su pais
	
		if(importe > 0) //si es m entra porq ya es false cuando se cargan los datos la primera vez.
		{
			if(!flagImporteMin)
			{
				nombrePaisMin = nombrePais;
				importeMin = importe;
				flagImporteMin = true;
			}

			else
			{
				if(importe < importeMin)
				{
					nombrePaisMin = nombrePais;
					importeMin = importe;
				}
			}
		}

		if(importe > 0)
		{
			if(!flagImporteMax)
			{
				nombreMarcaMax = marcaProducto;
				importeMax = importe;
				flagImporteMax = true;
			}

			else
			{
				if(importe > importeMax)
				{
					nombreMarcaMax = marcaProducto;
					importeMax = importe;
				}
			}
		}
		
		acumulador += importe;

		contador++;
	}

	//c. Promedio importe
	promedioImporte = acumulador / contador;

	//e. Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
	porcentaje = 10;
	descuento = importeMax * porcentaje/100;
	importeFinalMax = importeMax - descuento;


	console.log("El minimo importe con su pais:"+ nombrePaisMin +" con "+ importeMin +"$");
	console.log("El maximo importe con su marca es:"+ nombreMarcaMax +" con "+ importeMax +"$");
	console.log("Promedio de los importes es:" + promedioImporte + "$");
	console.log("La cantidad de productos de china es:" + contadorChina);
	console.log("El importe maximo con descuento del 10% es: " + importeFinalMax + "$");
}//FIN DE LA FUNCIÓN
*/
