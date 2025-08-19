(() => {
  //A diferencia de javaScript, en typeScript, todos los argumentos de las funciones son obligatorios a no ser que se indique lo contrario. Indicamos la opcionalidad con el simbolo? en el argumento.
  const fullName = (firstName: string, secondName?: string): string => {
    //Si un argumento opcional no es pasado, se devolverá undefined. Para controlar esto, podemos utilizar el operador || (or).
    return `${firstName} ${secondName || "xxxxxx"}`;
  };

  const name = fullName("Tony");
  console.log(name);
})();
