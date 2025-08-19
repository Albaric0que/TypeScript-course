(() => {
  //*En typeScript, podemos tipar los argumentos que se pasan a una función para más seguridad. Estos argumentos serán obligatorios a no ser que se especifique lo contrario.
  const fullName = (firstName: string, secondName: string): string => {
    return `${firstName} ${secondName}`;
  };

  const name = fullName("Tony", "Stark");
  console.log(name);
})();
