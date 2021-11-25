// Crea una variable de tipo array llamada alimentos que contenga las siguientes cadenas de texto: "Lentejas", "Aguacate", "Tomate"
var alimentos = ["Lentejas", "Aguacate", "Tomate"];

// Ahora empuja un nuevo valor "Hummus" al final de la variable alimentos.
alimentos.push("Hummus");

// Empuja ahora dos valores de una sola vez en la variable. "Cebolla" y "Bacon"
alimentos.push("Cebolla", "Bacon");

// ¡Ya tenemos nuestra ensalada de lentejas! Pero viene a comer a casa un amigo vegetariano y no puede comer Bacon. Vamos a sacar el últimos elemento del array antes de terminar.
alimentos.pop();