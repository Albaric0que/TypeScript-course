(() => {
  //Las tuplas son arrays estrictos con elementos restringidos por tipo y posición.
  const hero: [string, number, boolean] = ["Ironman", 100, true];

  hero[0] = "Dr Strange";
  hero[1] = 200;
  hero[2] = false;

  console.log(hero);
})();
