/*Alex Ivan Gonzalez/DNI:41916860/Div:C/Turno:Mañana/Prof:Matias Quiros/Parcial Recuperatorio Ejer.02.
2)De una compra debes ingresar una cantidad
indeterminada de procesadores
 
modelo, precio(entre 10000 y 60000), cantidad
de núcleos(entre 4 y 10, limites incluidos), fabricante(amd o  intel) y el TDP de este (entre 65 y 120,
limites incluidos)
a)Informar el precio total y el TDP promedio
de la compra.
b)El modelo del procesador con más núcleos de
los amd.
c)El modelo del procesador con menos núcleos de
los intel.
*/
function mostrar()
{
  let modelo;
  let precio;
  let cantidadNucleos;
  let fabricante;
  let tdp;
  
  let acumuladorPrecio = 0;
  let acumuladorTDP = 0;
  let contador = 0;
  let promedioTDP;

  let amdMax;
  let nucleosMax;
  let intelMin;
  let nucleosMin;
 
  let flagAmd = false;
  let flagIntel = false;


  let respuesta;
  
  respuesta = "si";

  while(respuesta == "si")
  { 
    /*modelo, precio(entre 10000 y 60000), cantidad
    de núcleos(entre 4 y 10, limites incluidos), fabricante(amd o  intel) y el TDP de este (entre 65 y 120,
    limites incluidos)*/

    modelo = prompt("Ingrese su modelo: ");
  
    precio = parseInt(prompt("Ingrese su precio (10000 a 60000): "));
  
    while(precio < 10000 || precio > 60000)
    {
      precio = parseInt(prompt("Error, reingrese los datos (10000 a 60000): "));
    }
  
    cantidadNucleos = parseInt(prompt("Ingrese su cantidad de nucleos (de 4 a 10): "));

    while(cantidadNucleos < 4 || cantidadNucleos > 10)
    {
      cantidadNucleos = parseInt(prompt("Error, reingrese los datos (de 4 a 10): "));
    }
  
    fabricante = prompt("Ingrese su fabricante (Intel o Amd): ");

    while(fabricante != "Intel" && fabricante != "Amd")
    {
      fabricante = prompt("Error, reingrese los datos (Intel o Amd): ");
    }

    tdp = prompt("Ingrese su tdp (de 65 a 120): ");

    while(tdp < 65 || tdp > 120)
    {
      tdp = parseInt(prompt("Error, reingrese los datos (de 65 a 120): "));
    }

    /*
      a)Informar el precio total y el TDP promedio
      de la compra.
      b)El modelo del procesador con más núcleos de
      los amd.
      c)El modelo del procesador con menos núcleos de
      los intel.
      */

    if(fabricante == "Amd") 
    {
      if(!flagAmd)
      {
        amdMax = modelo;
        nucleosMax = cantidadNucleos;
        flagAmd = true; 
      }
      else
      {
        if(cantidadNucleos > nucleosMax) 
        {
          amdMax = modelo;
          nucleosMax = cantidadNucleos;
        }
      }
    }
    else
    {
      if(!flagIntel)
      {
        intelMin = modelo;
        nucleosMin = cantidadNucleos;
        flagIntel = true; 
      }
      else
      {
        if(cantidadNucleos < nucleosMin) 
        {
          intelMin = modelo;
          nucleosMin = cantidadNucleos;
        }
      }
    }

    /*a)Informar el precio total y el TDP promedio
      de la compra.*/
    acumuladorPrecio += precio;
    acumuladorTDP += tdp;
    contador++;
    
    respuesta = prompt("¿Desea continuar (si o no)?");
  }
    /*a)Informar el precio total y el TDP promedio
      de la compra.
      b)El modelo del procesador con más núcleos de
      los amd.
      c)El modelo del procesador con menos núcleos de
      los intel.*/
      promedioTDP = acumuladorTDP / contador;

  console.log("Precio total de la compra y el TDP promedio de la compra es: " +acumuladorPrecio+ "$ con " +promedioTDP+ " TDP promedio.");
  console.log("El modelo del procesador con más nucleos de los Amd es: " +amdMax+ " con " +nucleosMax+ " nucleos");
  console.log("El modelo del procesador con menos núcleos de los Intel es: " +intelMin+ " con " +nucleosMin+ " nucleos");
}//FIN DE LA FUNCIÓN 
/*********************************************************************************************************************************************************/

