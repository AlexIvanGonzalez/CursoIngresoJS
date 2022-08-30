function mostrar()
{
	let contador;
	let sexo;
	let nota;
	let acumuladorNotas;

	contador = 0;

	while(contador < 5)
	{
		nota = prompt("ingrese su nota");
		nota = parseInt(nota);

		while(contador == 0 || nota > 10)
		{
			nota = prompt("error, reingrese su nota.");
			nota = parseInt(nota);
		}

		sexo = prompt("ingrese su sexo (f o m)");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("reingrese su sexo (f o m)");
		}

		acumuladorNotas += nota;

		contador++;

	}

	promedio = acumuladorNotas / contador;

	console.log("El promedio es:" + promedio);
}
