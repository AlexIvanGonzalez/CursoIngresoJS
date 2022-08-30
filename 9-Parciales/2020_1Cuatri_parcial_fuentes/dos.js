/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Ejer.02.

2)De una compra debes ingresar una cantidad
indeterminada de procesadores

modelo, precio(entre 10000 y 60000), cantidad
de núcleos(entre 4 y 18,limites incluidos), fabricante(amd o  intel).

a)Informar el precio total de la compra.
b)El modelo del procesador con menos nucleos de
los amd.
c)El modelo del procesador con más nucleos de
los intel.*/

function mostrar()
{
  let modelo;
  let precio;
  let cantidadNucleos;
  let fabricante;

  let flagIntel = false;
  let flagAmd = false;
  
  let acumuladorPrecio = 0;

  let intelMax;
  let nucleosMax;
  let amdMin;
  let nucleosMin;

  let respuesta;
  
  respuesta = "si";

  while(respuesta == "si")
  { 
    /*modelo, precio(entre 10000 y 60000), cantidad
    de núcleos(entre 4 y 18,limites incluidos), fabricante(amd o  intel).*/

    modelo = prompt("Ingrese su modelo: ");
  
    precio = parseInt(prompt("Ingrese su precio (10000 a 60000): "));
  
    while(precio < 10000 || precio > 60000)
    {
      precio = parseInt(prompt("Error, reingrese los datos (10000 a 60000): "));
    }
  
    cantidadNucleos = parseInt(prompt("Ingrese su cantidad de nucleos (de 4 a 18): "));

    while(cantidadNucleos < 4 || cantidadNucleos > 18)
    {
      cantidadNucleos = parseInt(prompt("Error, reingrese los datos (de 4 a 18): "));
    }
  
    fabricante = prompt("Ingrese su fabricante (Intel o Amd): ");

    while(fabricante != "Intel" && fabricante != "Amd")
    {
      fabricante = prompt("Error, reingrese los datos (Intel o Amd): ");
    }

    /*
      b)El modelo del procesador con menos nucleos de
      los amd.
      c)El modelo del procesador con más nucleos de
      los intel.*/

    if(fabricante == "Intel") 
    {
      if(!flagIntel)
      {
        intelMax = modelo;
        nucleosMax = cantidadNucleos;
        flagIntel = true; 
      }
      else
      {
        if(cantidadNucleos > intelMax) 
        {
          intelMax = modelo;
          nucleosMax = cantidadNucleos;
        }
      }
    }
    else
    {
      if(!flagAmd)
      {
        amdMin = modelo;
        nucleosMin = cantidadNucleos;
        flagAmd = true;
      }
      else
      {
        if(cantidadNucleos < amdMin)
        {
          amdMin = modelo;
          nucleosMin = cantidadNucleos;
        }
      }
    }

    /*a)Informar el precio total de la compra.*/
    acumuladorPrecio += precio;

    respuesta = prompt("¿Desea continuar (si o no)?");
  }
    /*a)Informar el precio total de la compra.
      b)El modelo del procesador con menos nucleos de
      los amd.
      c)El modelo del procesador con más nucleos de
      los intel.*/

  console.log("Precio total de la compra es: " + acumuladorPrecio);
  console.log("El modelo del procesador con menos nucleos de Amd es: " + amdMin+ " con "+nucleosMin+" nucleos");
  console.log("El modelo del procesador con más nucleos de los intel es: " +intelMax+ " con " +nucleosMax+ " nucleos");
}//FIN DE LA FUNCIÓN 
/*********************************************************************************************************************************************************/
/*Alex Ivan Gonzalez/Div:C/Simulacro Parcial Ejer.02

2)De una compra debes ingresar una cantidad
indeterminada de cortes de carne vacuna,
validando los siguientes datos:

nombre del corte, precio, peso en kilogramos,
tipo(con hueso o sin hueso).

a)informar el peso total de la compra.(0 kg a 300kg)

b)el nombre del corte más caro de los sin hueso.

c)el nombre del corte más liviano de los con
hueso.
*/
/*function mostrar()
{
  let nombreCorte;
  let precio;
  let peso;
  let hueso;
  let nombreHuesoSiCorte;
  let nombreHuesoNoCorte;
  let pesoHuesoSiMin;
  let precioHuesoNoMax;
  let respuesta;

  let flagHuesoSi = false;
  let flagHuesoNo = false;

  precio = 0; 
  peso = 0; 
  acumulador = 0;

  respuesta = "si";

  //a.
  while(respuesta=="si")
  {
    nombreCorte = prompt("ingrese un nombre del corte:");
    
    precio = prompt("Ingrese el precio del corte:");
    precio = parseInt(precio);

    while(precio < 0)
    {
      precio = prompt("Reingrese el precio del corte:");
      precio = parseInt(precio);
    }

    peso = prompt("Ingrese el peso del corte:");
    peso = parseInt(peso);

    while(peso < 0)
    {
      peso = prompt("Reingrese el peso del corte:");
      peso = parseInt(peso);
    }

    hueso = prompt("Ingrese si tiene hueso o no:");
  
    while(hueso != "si" && hueso != "no")
    {
      hueso = prompt("Reingrese si tiene hueso o no:");
    }
    //c.el nombre del corte más liviano de los con hueso.
    if(hueso == "si")
    {
      if(!flagHuesoSi)
      {
        nombreHuesoSiCorte = nombreCorte;
        pesoHuesoSiMin = peso;
        flagHuesoSi = true;
      }
      else
      {
        if(peso < pesoHuesoSiMin) 
        {
          nombreHuesoSiCorte = nombreCorte;
          pesoHuesoSiMin = peso;
        }
      }
    }

    else
    {
      if(flagHuesoNo == "no")
      {
        if(!flagHuesoNo)
        {
          nombreHuesoNoCorte = nombreCorte;
          precioHuesoNoMax = precio;
          flagHuesoNo = true;
        }
        else
        {
          if(precio > precioHuesoNoMax)
          {
            nombreHuesoNoCorte = nombreCorte;
            precioHuesoNoMax = precio;
          }
        }
      }
    }

    acumulador += peso;

    respuesta = prompt("desea continuar?");
  }

  //document.write("el peso total de la compra es:" + acumulador + " kg<br>");
  //document.write("el corte mas caro sin hueso es:" + nombreHuesoNoCorte + " y su valor es de $"+ precioHuesoNoMax +"<br>");
  //document.write("el corte más liviano de los con hueso es:" + nombreHuesoSiCorte + " y su peso es de "+ pesoHuesoSiMin +"kg<br>");
  console.log("el peso total de la compra es:" + acumulador + "kg");
  console.log("el corte mas caro sin hueso es:" + nombreHuesoNoCorte + " y su valor es de $"+ precioHuesoNoMax);
  console.log("el corte más liviano de los con hueso es:" + nombreHuesoSiCorte + " y su peso es de "+ pesoHuesoSiMin +"kg");

}*/

/*
if(hueso == "si")
    {
      if(!flagHuesoSi)
      {
        nombreHuesoSiCorte = nombreCorte;
        pesoHuesoSiMin = peso;
        flagHuesoSi = true;
      }
      else
      {
        if(peso < pesoHuesoSiMin) 
        {
          nombreHuesoSiCorte = nombreCorte;
          pesoHuesoSiMin = peso;
        }
      }
    }
    else
    {
      if(flagHuesoNo == "no")
      {
        if(!flagHuesoNo)
        {
          nombreHuesoNoCorte = nombreCorte;
          precioHuesoNoMax = precio;
          flagHuesoNo = true;
        }
        else
        {
          if(precio > precioHuesoNoMax)
          {
            nombreHuesoNoCorte = nombreCorte;
            precioHuesoNoMax = precio;
          }
        }
      }
    }

    while(sexo != "f" && sexo != "m" && sexo != "nb")
    {
      sexo = prompt("Reingrese el sexo: ");
    }

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

/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Ejer.02.

2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)
Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones
*/
/*
function mostrar()
{
  let nombre;
  let importeVenta;

  let nombreJuan;
  let nombrePedro;
  let nombreMaria;

  let importeJuan;
  let importePedro;
  let importeMaria;

  let contadorJuan = 0;
  let contadorPedro = 0;
  let contadorMaria = 0;
  
  let acumuladorJuan = 0;
  let acumuladorPedro = 0;
  let acumuladorMaria = 0;

  let comisionCincoPorciento;
  let comisionDiesPorciento;

  let totalJuan;
  let totalPedro;
  let totalMaria; 

  let nombreVendedorMax;
  let comisionMax;

  let flagImporteJuan = false;
  let flagImportePedro = false;
  let flagImporteMaria = false;

  let respuesta;
  
  respuesta = "si";

  while(respuesta=="si")
  {
    //*Nombre de vendedor (Juan, Pedro o Maria)
    nombre = prompt("Ingrese el nombre de su vendedor:");
  
    while(nombre != "Juan" && nombre != "Pedro" && nombre != "Maria")
    {
      nombre = prompt("Reingrese el nombre de su vendedor:");
    }
    
    //*Importe de la venta (numero positivo NO mayor que 10000)
    importe = prompt("Ingrese el importe del producto:");

    importe = parseInt(importe);

    while(importe < 0 || importe > 10001)
    {
      importe = prompt("Reingrese el importe del producto:");

      importe = parseInt(importe);
    }
  
    //a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)  
    if(nombre == "Juan") 
    {
      if(!flagImporteJuan)
      {
        nombreJuan = nombre;
        importeJuan = importe;
        flagImporteJuan = true;
        acumuladorJuan += importeJuan; 
      }
      else
      {
        if(importe > importeJuan)
        {
          nombreJuan = nombre;
          importeJuan = importe;
          acumuladorJuan += importeJuan;
        }
      }
    }

    else
    {
      if(nombre == "Pedro") 
      {
        if(!flagImportePedro)
        {
          nombrePedro = nombre;
          importePedro = importe;
          flagImportePedro = true;
          acumuladorPedro += importePedro;
        } 

        else
        {
          if(importe > importePedro)
          {
            nombrePedro = nombre;
            importePedro = importe;
            acumuladorPedro += importePedro;
          }
        }
      }
      else
      {
        if(nombre == "Maria") 
        {
          if(!flagImporteMaria)
          {
            nombreMaria = nombre;
            importeMaria = importe;
            flagImporteMaria = true;
            acumuladorMaria += importeMaria;
          } 

          else
          {
            if(importe > importeMaria)
            {
              nombreMaria = nombre;
              importeMaria = importe;
              acumuladorMaria += importeMaria;
            }
          }
        }
      }
    }

    if (nombre == "Juan") 
    {
      contadorJuan++;
    }
    else
    {
      if (nombre == "Pedro") 
      {
        contadorPedro++;
      }
      else
      {
        contadorMaria++;
      }
    }
    
    respuesta = prompt("desea continuar?");
  }

  /*Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
    Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una
    comisión del 10% sobre ese total.
    De no alcanzar esta cifra, su comision sera del 5%.*/
/*
    if (acumuladorJuan >= 500000) 
    {
      comisionDiesPorciento = acumuladorJuan * 10 / 100;
      totalJuan = acumuladorJuan + comisionDiesPorciento;
    }
    else
    { 
        comisionDiesPorciento = acumuladorJuan * 5 / 100;
        totalJuan = acumuladorJuan + comisionCincoPorciento;
    }

    if (acumuladorPedro >= 500000) 
    {
      comisionDiesPorciento = acumuladorPedro * 10 / 100;
      totalPedro = acumuladorPedro + comisionDiesPorciento;
    }
    else
    {
      comisionDiesPorciento = acumuladorPedro * 5 / 100;
      totalPedro = acumuladorPedro + comisionCincoPorciento;
    }

    if (acumuladorMaria >= 500000) 
    {
      comisionDiesPorciento = acumuladorMaria * 10 / 100;
      totalMaria = acumuladorMaria + comisionDiesPorciento;
    }
    else
    {
      comisionDiesPorciento = acumuladorMaria * 5 / 100;
      totalMaria = acumuladorMaria + comisionCincoPorciento;
    }

    //b. El nombre del vendedor que mas dinero recaudo en comisiones
    if (acumuladorJuan > acumuladorPedro && acumuladorJuan > acumuladorMaria) 
    {
      nombreVendedorMax = nombreJuan;
      comisionMax = acumuladorJuan;
    }
    else 
    {
      if (acumuladorPedro > acumuladorMaria) 
      {
        nombreVendedorMax = nombrePedro;
        comisionMax = acumuladorPedro;
      }
      else
      {
        nombreVendedorMax = nombreMaria;
        comisionMax = acumuladorMaria;
      }
    }

  console.log("Importe total de ventas, cantidad de ventas y comision de Juan: Total de ventas es "+ acumuladorJuan +"$ con una cantidad de ventas de"+ contadorJuan +" y una comision de "+ totalJuan +"$.");
  console.log("Importe total de ventas, cantidad de ventas y comision de Pedro:Total de ventas es "+ acumuladorPedro +"$ con una cantidad de ventas de"+ contadorPedro +" y una comision de "+ totalPedro +"$.");
  console.log("Importe total de ventas, cantidad de ventas y comision de Maria:Total de ventas es "+ acumuladorMaria +"$ con una cantidad de ventas de"+ contadorMaria +" y una comision de "+ totalMaria +"$.");
  console.log("El nombre del vendedor que mas dinero recaudo: " + nombreVendedorMax +" y recaudo "+ comisionMax +"$");
}//FIN DE LA FUNCIÓN
*/


