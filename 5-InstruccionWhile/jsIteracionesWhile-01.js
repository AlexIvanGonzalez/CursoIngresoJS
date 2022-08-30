/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador;
	
	contador = 0;//1er paso: variable condición.

	while(contador < 10)//2do paso: la condición.
	{
		contador ++;//3er paso: modificar la condición.
		console.log(contador);//cuidado con el 3er paso o explota el chrome.
	}

}//FIN DE LA FUNCIÓN