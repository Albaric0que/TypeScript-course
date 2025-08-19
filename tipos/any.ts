(() => {
  //Cuando una variable se inicializa con any se le puede reasignar valor de manera dinámica
  let avenger: any = 123;

  avenger = "Doctor Strange";

  //Cuando asignamos valor de un tipo determinado a una variable tipada con any, esta seguirá siendo tipo any.
  console.log(avenger[0]);

  //CASTING
  //Podemos castear una variable para asignarle un tipo determinado. TypeScript la seguirá considerando de tipo any pero pero la tratará como ese tipo.
  //Hay dos maneras. AS:

  console.log((avenger as string).charAt(0));

  //A pesar de seguir siendo de tipo any, cuando reasignemos un valor, tendremos acceso a los métodos de ese tipo de valor
  avenger = 1235.84523;

  console.log(avenger.toFixed(2));

  //Segunda forma de casting. <>:
  console.log((<number>avenger).toFixed(2));

  //En typescript, const debe tener un valor asignado si no se le asigna tipo.
  //   const power;

  //Let puede ser inicializada sin asignación de valor y sin tipo. Devolverá undefined
  let height;
  let power;

  console.log(height);
  console.log(power);
})();
