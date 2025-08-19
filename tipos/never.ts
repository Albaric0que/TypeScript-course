(() => {
  //El tipo de dato never representa valores que nunca ocurren.
  //Por ejemplo, funciones que NUNCA retornan nada porque lanzan una excepción:
  const estoLanzaError = (msg: string): never => {
    throw new Error(msg);
  };
  estoLanzaError("¡Cosorro!");
  console.log("Aiuda");

  //O chequeo de exhaustividad en condicionales:
  type Color = "rojo" | "azul";

  const handleColor = (color: Color) => {
    switch (color) {
      case "rojo":
        console.log("Es rojo");
        break;
      case "azul":
        console.log("Es azul");
        break;
      default:
        const _exhaustiveCheck: never = color;
      // Si se añade otro valor a Color y no lo manejas, TypeScript mostrará un error.
    }
  };
})();
