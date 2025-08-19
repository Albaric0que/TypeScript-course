// Funciones Básicas
(() => {
  function sumar(a: number, b: number): number {
    return a + b;
  }

  const sumar2 = (a: number, b: number): number => {
    return a + b;
  };

  const sumar3 = (a: number, b: number): number => a + b;

  const contar = (heroes: string[]): number => {
    return heroes.length;
  };

  const contar2 = (heroes: string[]) => heroes.length;

  const superHeroes: string[] = [
    "Flash",
    "Arrow",
    "Superman",
    "Linterna Verde",
  ];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = (llamar: boolean = false): void => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  };

  llamarBatman();

  // Rest?
  const unirheroes = (...personas: string[]): string => {
    return personas.join(", ");
  };

  console.log(unirheroes("Superman", "Batman", "Caca", "Culo"));

  // Tipo funcion
  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ): void => {};

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco: (
    n: number,
    t: string,
    b: boolean,
    a: string[]
  ) => void;
})();
