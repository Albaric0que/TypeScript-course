(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  //si avengers estuviera inicializado sin tipo, sería undefined. Por tanto, en el ejemplo siguiente el programa consideraría que no es menor que villians, conduciendo a error !!!
  if (avengers < villians) {
    console.log("We are in trouble");
  } else {
    console.log("We are saved");
  }

  // Si envolviésemos el dato que contiene avengers en un constructor Number e intentásemos transformar en número algo que no puede ser número, el constructor devolvería NaN, que es considerado number. Cuidado !!!
  avengers = Number("55A");

  console.log(avengers);
})();
