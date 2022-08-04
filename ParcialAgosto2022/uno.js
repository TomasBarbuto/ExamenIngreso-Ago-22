/* 
El usuario debe ingresar las cotizaciones semanales del dólar (semana laboral de 5 días), los valores deben ser positivos:
Se debe Informar al usuario lo siguiente:
1) Informar cuál fue el dólar con mayor cotización promedio en la semana
2) informar cotización más alta del dólar oficial
3) Informar cotización más baja del dólar blue 
*/
function mostrar() {

	let dollarOficial;
	let dollarBlue
	let dollarConMayorCotizacionPromedio;
	let promedioDollarOficial;
	let promedioDollarBlue;
	let dollarConCotizacionMasAltaOficial;
	let dollarConCotizacionMasBajaBlue;
	let flag = 0;
	let acumuladorDollarOficial = 0;
	let contadorDollarOficial = 0;
	let acumuladorDollarBlue = 0;
	let contadorDollarBlue = 0;
	let nombreMayorCotizadoDeLaSemana;

	for (let i = 0; i < 5; i++) {

		do {

			dollarOficial = parseInt(prompt("Ingrese el valor del dollar oficial en forma numerica"));

		} while (dollarOficial < 0)

		acumuladorDollarOficial += dollarOficial;
		contadorDollarOficial++;

		do {

			dollarBlue = parseInt(prompt("Ingrese el valor del dollar blue en forma numerica"));

		} while (isNaN(dollarBlue) || !(dollarBlue > 0));

		acumuladorDollarBlue += dollarBlue;
		contadorDollarBlue++;

		if (flag == 0) {

			dollarConCotizacionMasAltaOficial = dollarOficial;
			dollarConCotizacionMasBajaBlue = dollarBlue;
			flag = 1;
		}

		if (dollarConCotizacionMasAltaOficial < dollarOficial) {

			dollarConCotizacionMasAltaOficial = dollarOficial;
		}

		if (dollarConCotizacionMasBajaBlue > dollarBlue) {

			dollarConCotizacionMasBajaBlue = dollarBlue;
		}
	}

	promedioDollarOficial = acumuladorDollarOficial/contadorDollarOficial;
	promedioDollarBlue = acumuladorDollarBlue/contadorDollarBlue;

	if(promedioDollarOficial > promedioDollarBlue){
		dollarConMayorCotizacionPromedio = promedioDollarOficial;
		nombreMayorCotizadoDeLaSemana = "Dollar Oficial";
	}else{
		dollarConMayorCotizacionPromedio = promedioDollarBlue;
		nombreMayorCotizadoDeLaSemana = "Dollar Blue";
	}
	//A
	document.getElementById("txtIdCoti").value = `El Dollar con mayor promedio de la semana fue El ${nombreMayorCotizadoDeLaSemana} a un precio de ${dollarConMayorCotizacionPromedio}`;
	//B
	document.getElementById("txtIdCotiOficial").value = `cotización más alta del dólar oficial es: ${dollarConCotizacionMasAltaOficial}`;
	//C
	document.getElementById("txtIdCotiBlue").value = `cotización más baja del dólar blue es: ${dollarConCotizacionMasBajaBlue}`;
	


}
