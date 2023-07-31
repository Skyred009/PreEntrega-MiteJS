function calcularPromedioEdades(edades) {
    let sumaEdades = 0;
    for (let i = 0; i < edades.length; i++) {
      sumaEdades += edades[i];
    }
    return sumaEdades / edades.length;
  }
  
  function main() {
    const edades = [];
    const maxEdades = 5;
  
    for (let i = 1; i <= maxEdades; i++) {
      const edadStr = prompt(`Ingresa la edad ${i} (o escribe 'salir' para detenerte):`);
      
      if (edadStr.toLowerCase() === "salir") {
        break;
      }
  
      const edad = Number(edadStr);
      if (isNaN(edad)) {
        alert("Debes ingresar una edad válida o escribir 'salir' para detenerte.");
        i--; // Restamos i para que el usuario pueda ingresar la edad nuevamente.
      } else {
        edades.push(edad);
      }
    }
  
    if (edades.length > 0) {
      const promedio = calcularPromedioEdades(edades);
      alert(`El promedio de las edades ingresadas es: ${promedio.toFixed(2)}`);
    } else {
      alert("No se ingresaron edades.");
    }
  }
  
  // Ejecutamos el programa
  main();
  
  