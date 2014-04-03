test("Ejercicio 01", function() {
  var resultado = [-2, 4, -10, 56];
  deepEqual(ejercicio01([1, -2, 3, 4, -5, -10, 33, 56]),
            resultado,
            "ejercicio01([1, -2, 3, 4, -5, -10, 33, 56])");
});


test("Ejercicio 02", function() {
  var resultado = 50;
  deepEqual(ejercicio02(10),
            resultado,
            "ejercicio02(10)");
});


test("Ejercicio 03", function() {
  var resultado = 19;
  deepEqual(ejercicio03([40, 6, 21, 35, 2, 10]),
            resultado,
            "ejercicio03([40, 6, 21, 35, 2, 10])");
});


test("Ejercicio 04", function() {
  var resultado = [50, 40, 30, 20, 10];
  deepEqual(ejercicio04([10, 20, 30, 40, 50]),
            resultado,
            "ejercicio04([10, 20, 30, 40, 50])");
});


test("Ejercicio 05", function() {
  var resultado = [3, 1, -9];
  deepEqual(ejercicio05([[1, 2], [-3, 4], [-4, -5]]),
            resultado,
            "ejercicio05([[1, 2], [-3, 4], [-4, -5]])");
});


test("Ejercicio 06", function() {
  var resultado = {
      "suma": 9,
      "resta": 3,
      "multiplicacion": 18,
      "division": 2
  };
  deepEqual(ejercicio06(6, 3),
            resultado,
            "ejercicio06(6, 3)");
});


test("Ejercicio 07", function() {
  var resultado = {
      "dia_actual": "Viernes",
      "dia_anterior": "Jueves",
      "dia_siquiente": "Sábado"
  };
  deepEqual(ejercicio07('Viernes'),
            resultado,
            "ejercicio07('Viernes')");
});


test("Ejercicio 08", function() {
  var resultado = {
      "base": 5,
      "altura": 3,
      "area": 7.5
  };
  deepEqual(ejercicio08(5, 3),
            resultado,
            "ejercicio08(5, 3)");
});


test("Ejercicio 09", function() {
  var resultado = {
     "calificaciones": [90, 70, 0, 100, 80],
     "promedio": 68
  };
  deepEqual(ejercicio09({'calificaciones': [90, 70, 0, 100, 80], 'promedio': 68}),
            resultado,
            "ejercicio09({'calificaciones': [90, 70, 0, 100, 80], 'promedio': 0})");
});


test("Ejercicio 10", function() {
  var resultado = {
     "mayor": 56,
     "menor": 4,
     "promedio": 26.6
  };
  deepEqual(ejercicio10([22, 17, 4, 56, 34]),
            resultado,
            "ejercicio10([22, 17, 4, 56, 34])");
});


test("Ejercicio 11", function() {
  var resultado = {
     "llave1": [10, 20],
     "llave2": [30, 40, 50],
     "llave3": [60],
     "llave4": [70, 80, 90]
  };
  deepEqual(ejercicio11(
     ["llave1", "llave2", "llave3", "llave4"],
     [[10, 20], [30, 40, 50], [60], [70, 80, 90]]),
            resultado,
            "ejercicio11(['llave1', 'llave2', 'llave3', 'llave4'], [[10, 20], [30, 40, 50], [60], [70, 80, 90]])");
});
