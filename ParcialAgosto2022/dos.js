/* 
Se debe ingresar alumnos hasta que el usuario quiera:
Cada alumno cuenta con nota del primer y segundo cuatrimestre (0 a 10)
número de comisión (1000 a 2000)
nombre, apellido, materia (programacion, matematica, ingles).

1) Notas promedio primer y segundo cuatrimestre
2) Nombre, apellido y comisión del alumno con menor nota primer cuatrimestre
3) Materia con mayor número de promocionados (se promociona con 6) 
*/

function mostrar() {

  let nombre;
  let apellido;
  let numeroDeComision;
  let notaPrimerCuatri;
  let notaSegundoCuatri;
  let materia;
  let respuesta = "si";
  let notaPromedioPrimerCuatri;
  let notaPromedioSegundoCuatri;
  let acumuladorPrimerCuatri = 0;
  let contadorPrimerCuatri = 0;
  let acumuladorSegundoCuatri = 0;
  let contadorSegundoCuatri = 0;
  let menorNotaPrimerCuatri;
  let nombreMenorNotaPrimerCuatri;
  let comisionMenorNotaPrimerCuatri;
  let contadorProgramacion = 0;
  let contadorIngles = 0;
  let contadorMatematica = 0;
  let materiaConMayorPromocionados;
  let flag = 0;

  while (respuesta == "si") {

    nombre = prompt("Ingrese su Nombre");

    apellido = prompt("Ingrese su Apellido");

    do {

      numeroDeComision = parseInt(prompt("ingrese numero de comision (1000 a 2000)"));
    } while (isNaN(numeroDeComision) || !(numeroDeComision >= 1000 && numeroDeComision <= 2000));

    do {

      materia = prompt("Ingrese Materia");

    } while (!(materia == "programacion" || materia == "matematica" || materia == "ingles"));

    do {

      notaPrimerCuatri = parseInt(prompt("Ingrese nota del primer cuatrimestre (numero de 0 a 10)"));

    } while (isNaN(notaPrimerCuatri) || !(notaPrimerCuatri >= 0 && notaPrimerCuatri <= 10))

    acumuladorPrimerCuatri += notaPrimerCuatri;
    contadorPrimerCuatri++;

    do {

      notaSegundoCuatri = parseInt(prompt("Ingrese nota del segundo cuatrimestre (numero de 0 a 10)"));

    } while (isNaN(notaSegundoCuatri) || !(notaSegundoCuatri >= 0 && notaSegundoCuatri <= 10));

    acumuladorSegundoCuatri += notaSegundoCuatri;
    contadorSegundoCuatri++;

    respuesta = prompt("Ingrese 'si' si desea continuar y 'no' si desea abandonar");

    if (flag == 0) {
      menorNotaPrimerCuatri = notaPrimerCuatri;
      nombreMenorNotaPrimerCuatri = nombre + apellido;
      comisionMenorNotaPrimerCuatri = numeroDeComision;
      flag = 1;
    } else if (menorNotaPrimerCuatri > notaPrimerCuatri) {
      menorNotaPrimerCuatri = notaPrimerCuatri;
      nombreMenorNotaPrimerCuatri = nombre + apellido;
      comisionMenorNotaPrimerCuatri = numeroDeComision;
    }

    switch (materia) {
      case "programacion":
        if (notaPrimerCuatri > 6 && notaSegundoCuatri > 6) {
          contadorProgramacion++;
        }
        break;
      case "matematica":
        if (notaPrimerCuatri > 6 && notaSegundoCuatri > 6) {
          contadorMatematica++;
        }
        break;
      case "ingles":
        if (notaPrimerCuatri > 6 && notaSegundoCuatri > 6) {
          contadorIngles++;
        }
        break;
    }

  }

  notaPromedioPrimerCuatri = acumuladorPrimerCuatri / contadorPrimerCuatri;
  notaPromedioSegundoCuatri = acumuladorSegundoCuatri / contadorSegundoCuatri;

  if (contadorProgramacion > contadorMatematica && contadorProgramacion > contadorIngles) {
    materiaConMayorPromocionados = "Programacion";
  } else if (contadorIngles > contadorMatematica) {
    materiaConMayorPromocionados = "Ingles";
  } else {
    materiaConMayorPromocionados = "Matematica";
  }


  //A
  alert(`Notas promedio primer cuatrimestre es: ${notaPromedioPrimerCuatri} y del segundo cuatrimestre es : ${notaPromedioSegundoCuatri}`);
  //B
  alert(`El alumno ${nombreMenorNotaPrimerCuatri} comisión ${comisionMenorNotaPrimerCuatri} obtuvo la menor nota que fue : ${menorNotaPrimerCuatri}`);
  //C
  alert(`La materia con mayor promocionador es: ${materiaConMayorPromocionados}`);

}
