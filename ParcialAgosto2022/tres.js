/* Enunciado:
Bienvenidos.
Se deben ingresar los datos de una carrera de motos:
- Nombre y número del competidor
- Marca de la moto (honda, yamaha, suzuki)
- Edad (mayor de 18)
- Tiempo en vuelta 1, 2, 3
- Posición en carrera

1) Informar el número del competidor más rápido en promedio-
2) Cuántas motos honda llegaron entre los primeros 10-
3) Promedio total por vuelta de los competidores
4) Promedio de las motos cilindrada 200 */

function mostrar() {

	let nombre;
	let numeroDeCompetidor;
	let marcaDeMoto;
	let edad;
	let tiempoDeVuelta;
	let posicionDeCarrera;
	let cilindrada;
	let respuesta = "si";
	let flag = 0;
	let numeroDeCompetidorMasRapido;
	let contadorMotoHondaEntrePrimerosDiez = 0;
	let acumuladorTiempoDeVuelta = 0;
	let contadorCompetidores = 0;
	let contadorCilindradas200 = 0;


	while (respuesta == "si") {

		nombre = prompt("Ingrese nombre de competidor");
		numeroDeCompetidor = parseInt(prompt("Ingrese numero de competidor"));

		do {

			marcaDeMoto = prompt("Ingrese marca de moto (honda, yamaha, suzuki)");

		} while (!(marcaDeMoto == "honda" || marcaDeMoto == "yamaha" || marcaDeMoto == "suzuki"));

		do {

			edad = parseInt(prompt("Ingrese su edad(Debe ser mayor o igual a 18"));
		} while (!edad >= 18);

		tiempoDeVuelta = parseInt(prompt("Ingrese tiempo de vuelta (1,2,3)"));

		posicionDeCarrera = parseInt(prompt("Ingrese su posicion final en la carrera"));

		cilindrada = parseInt(prompt("Ingrese Cilindrada de moto"));

		acumuladorTiempoDeVuelta += tiempoDeVuelta;
		contadorCompetidores++;

		//A Informar el número del competidor más rápido en promedio

		if(flag == 0){
			numeroDeCompetidorMasRapido = numeroDeCompetidor;
			tiempoDeVueltaCompetidorMasRapido = tiempoDeVuelta;
			flag = 1;
		}else if(tiempoDeVuelta < tiempoDeVueltaCompetidorMasRapido){
			numeroDeCompetidorMasRapido = numeroDeCompetidor;
			tiempoDeVueltaCompetidorMasRapido = tiempoDeVuelta
		}
		//B Cuántas motos honda llegaron entre los primeros 10-
		if(marcaDeMoto == "honda" && posicionDeCarrera <= 10){
			contadorMotoHondaEntrePrimerosDiez++;
		}
		//C Promedio de las motos cilindrada 200
		if(cilindrada == 200){
			contadorCilindradas200++;
		}

		respuesta = prompt("Ingrese 'si' para seguir cargando competidores y 'no' para abandonar");
	}

	//C Promedio total por vuelta de los competidores

	promedioTotalPorVueltaDeCompetidores = acumuladorTiempoDeVuelta/contadorCompetidores;
	promedioMotosCilindrada200 = contadorCompetidores/contadorCilindradas200;

	//1
	alert(`El numero de competidor mas rapido en promedio es ${numeroDeCompetidorMasRapido}`);
	//2
	alert(`la cantidad de motos de marca honda que llegaron entre los primeros 10 son: ${contadorMotoHondaEntrePrimerosDiez}`);
	//3
	alert(`El promedio total por vuelta de los competidores es: ${promedioTotalPorVueltaDeCompetidores}`);
	//4
	alert(`El promedio de motos cilindradas 200 es: ${promedioMotosCilindrada200}`);
}
