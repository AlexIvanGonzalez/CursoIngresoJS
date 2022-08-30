/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let contador;
	
	contador = 11;//1er paso: variable condición.

	while(contador > 1)//2do paso: la condición.
	{
		contador --;//3er paso: modificar la condición.
		console.log(contador);//cuidado con el 3er paso o explota el chrome.
	}

}//FIN DE LA FUNCIÓN