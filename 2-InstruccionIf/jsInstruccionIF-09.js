function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	const min = 1;
	const max = 10;

	let random = Math.floor(Math.random() * max) + min;	

	alert(random);

	//OTRA FORMA

	/*let random = Math.floor(Math.random() * 10) + 1;	

	alert(random);*/

}//FIN DE LA FUNCIÓN