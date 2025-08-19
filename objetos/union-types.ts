(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  // Podemos crear variables que acepten varios tipos posibles de tipado. En este ejemplo hemos creado una variable que podría tener datos de tipo string o number o, nuestro tipo creado de objeto, Hero.
  // También le hemos dado un valor por defecto de "Hola" (tipo string).
  let customVariable: string | number | Hero = "Hola";
  console.log(customVariable);
})();
