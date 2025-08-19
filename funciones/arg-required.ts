(() => {
  //En typeScript, podemos tipar los argumentos que se pasan a una función para más seguridad. Estos argumentos serán obligatorios a no ser que se especifique lo contrario.
  const fullName = (firstName: string, secondName: string): string => {
    return `${firstName} ${secondName}`;
  };

  //CUIDADO. Los tipados en typeScript son muy útiles pero no completamente infalibles. En este ejemplo, si creamos una variable de tipo any no inicializada con un valor, podríamos pasarla como argumento en nuestra función sin problema y el resultado sería undefined. Este es unos de los motivos por lo que se recomienda reducir el uso de tipado any al mínimo.
  let noName: any;
  const noNoName = fullName(noName, "Stark");
  console.log(noNoName);

  const name = fullName("Tony", "Stark");
  console.log(name);
})();
