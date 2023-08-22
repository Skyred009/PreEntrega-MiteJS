// Declaración de array para almacenar los datos de los alumnos
const students = [];

// Función para capturar entrada de nombre, materia y calificaciones
function captureData() {
  const name = prompt('Ingrese el nombre del alumno:');
  const subject = prompt('Ingrese la materia:');
  
  const grades = [];
  for (let i = 0; i < 4; i++) {
    const grade = parseFloat(prompt(`Ingrese la calificación ${i + 1} del alumno:`));
    grades.push(grade);
  }

  students.push({ name, subject, grades });
}

// Función para calcular el promedio de calificaciones de una materia
function calculateAverage(grades) {
  if (grades.length === 0) {
    return 0;
  }
  const totalGrades = grades.reduce((total, grade) => total + grade, 0);
  return totalGrades / grades.length;
}

// Función principal que ejecuta el programa
function main() {
  const numStudents = parseInt(prompt('Ingrese la cantidad de alumnos:'));

  for (let i = 0; i < numStudents; i++) {
    captureData();
  }

  for (const student of students) {
    const average = calculateAverage(student.grades);
    alert(`Promedio de ${student.name} en ${student.subject}: ${average.toFixed(2)}`);
  }
}

// Llamada a la función principal para iniciar el programa
main();

  
  