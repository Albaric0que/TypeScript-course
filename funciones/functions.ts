(() => {
  const hero: string = "Superman";

  //En typeScript tenemos funciones clasicas, anónimas y funciones de flecha al igual que en javaScript. La diferencia es que tanto sus argumentos como el valor que van a devolver pueden ser tipados.
  function returnName(): string {
    return hero;
  }

  const activateBatsignal = (): string => {
    return "batsignal activada";
  };

  console.log(typeof activateBatsignal);

  const heroName = returnName();
})();
