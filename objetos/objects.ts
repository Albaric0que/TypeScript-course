(() => {
  // Esta es la estructura de un objeto. Creamos un type y especificamos los atributos y métodos tipados. Después utilizaremos ese type para tipar nuestros objetos. Podemos crear atributos y métodos opcionales siguiendo las mismas normas que en las funciones, a diferencia de que en los tipos de objetos, los atributos no necesitan respetar el mismo orden.
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper velocidad", "Viajar en el tiempo"],
    getName() {
      return this.name;
    },
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 69,
    powers: ["Súper velocidad", "Súper fuerza"],
  };
})();
