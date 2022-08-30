/* Alex Ivan Gonzalez/Div:C/Ejer:TP.4.a.b.c.d.e 
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let precioLamparita;
    let cantidadLamparita;
    let marca;
    let porcentajedescuento;
    let precioSinDescuentos;
    let descuentoLamparita;
    let porcentajeImpuesto;
    let impuestos;
    let calculoFinalDescuento;
    let calculoFinalTotal; 

    cantidadLamparita = 0;
    precioLamparita = 35;
    porcentajedescuento = 0; //pongo cero para q este activo.
    porcentajeImpuesto = 0;
   
    cantidadLamparita = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLamparita = parseInt(cantidadLamparita);

    precioSinDescuentos = precioLamparita * cantidadLamparita;

    switch(cantidadLamparita)
    {
        case 5:
            if (marca == "ArgentinaLuz") 
            {
                porcentajedescuento = 40;
            }

            else
            {
                if (marca != "ArgentinaLuz") 
                {
                    porcentajedescuento = 30;
                }
            }

        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentajedescuento = 25;
            }

    }

    descuentoLamparita = precioSinDescuentos * porcentajedescuento / 100;
    calculoFinalDescuento = precioSinDescuentos - descuentoLamparita;
    impuestos = precioSinDescuentos * porcentajeImpuesto / 100; 

    if(calculoFinalDescuento > 120)
        {
            porcentajeImpuesto = 10;

            impuestos = precioSinDescuentos * porcentajeImpuesto/100; 

            alert("IIBB Usted pago $" + impuestos);
        }

    calculoFinalTotal = calculoFinalDescuento + impuestos;

    document.getElementById("txtIdprecioDescuento").value = calculoFinalTotal;

}
/*
    let precioLamparita;
    let cantidadLamparita;
    let marca;
    let porcentajedescuento;
    let precioSinDescuentos;
    let descuentoLamparita;
    let porcentajeImpuesto;
    let impuestos;
    let calculoFinalDescuento;
    let calculoFinalTotal; 

    cantidadLamparita = 0;
    precioLamparita = 35;
    porcentajedescuento = 0; //pongo cero para q este activo.
    porcentajeImpuesto = 0;
   
    cantidadLamparita = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadLamparita = parseInt(cantidadLamparita);

    precioSinDescuentos = precioLamparita * cantidadLamparita;

    switch(cantidadLamparita)
    {
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentajedescuento = 40;
                break;

                default:
                    porcentajedescuento = 30;
                break;
            }

        break;

        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentajedescuento = 25;
                break;

                default:
                    porcentajedescuento = 20;
                break;
            }

        break;

        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentajedescuento = 15;
                break;

                case "FelipeLamparas":
                    porcentajedescuento = 10;
                break;

                default:
                    porcentajedescuento = 5;
                break;
            }

        break;

        case 2:
            porcentajedescuento = 0;
        break;

        case 1:
            porcentajedescuento = 0;
        break;

        default:
            porcentajedescuento = 50;
        break;
    }

    descuentoLamparita = precioSinDescuentos * porcentajedescuento / 100;
    calculoFinalDescuento = precioSinDescuentos - descuentoLamparita;
    impuestos = precioSinDescuentos * porcentajeImpuesto / 100; 

    if(calculoFinalDescuento > 120)
        {
            porcentajeImpuesto = 10;

            impuestos = precioSinDescuentos * porcentajeImpuesto/100; 

            alert("IIBB Usted pago $" + impuestos);
        }

    calculoFinalTotal = calculoFinalDescuento + impuestos;

    document.getElementById("txtIdprecioDescuento").value = calculoFinalTotal;
*/


 /*if (cantidadLamparita > 5) 
        {
            porcentajedescuento = 50;
        }

    else
    {
        if (cantidadLamparita == 5 && marca == "ArgentinaLuz") 
        {
            porcentajedescuento = 40;
        }

        else
        {
            if (cantidadLamparita == 5 && marca != "ArgentinaLuz") 
            {
                porcentajedescuento = 30;   
            }
        }
    }

    descuentoLamparita = precioSinDescuentos * descuento / 100;
    calculoFinal = precioSinDescuentos - descuentoLamparita;

    document.getElementById("txtIdprecioDescuento").value = calculoFinal;

    //id="txtIdCantidad"
    //id="txtIdprecioDescuento"
    //id="Marca"*/

/*
function CalcularPrecio () 
{
    let cantidadLamparita;
    let precioLamparita;
    let descuento;
    let calculoSinDescuento;
    let calculoDescuento;


    cantidadLamparita = document.getElementById("txtIdCantidad").value;
    document.getElementById("txtIdprecioDescuento").value = calculoDescuento;

    cantidadLamparita = parseInt(cantidadLamparita);
    calculoDescuento = parseInt(calculoDescuento);

    precioLamparita = 35;
    descuento = 50 / 100;
    calculoSinDescuento = precioLamparita * cantidadLamparita;
    calculoDescuento = calculoSinDescuento * descuento;

    if (cantidadLamparita < 6 ) 
    {
        alert("El precio es $" + calculoSinDescuento);
    }

    else
    {
        if (cantidadLamparita > 5) 
        {
            alert(calculoDescuento);
        }
    }


    //id="txtIdCantidad"
    //id="txtIdprecioDescuento"
}
*/