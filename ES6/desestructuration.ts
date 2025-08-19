(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers = {
    nick: "Samue L. Jackson",
    ironman: "Robert Downey Js.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  const printAvenger = ({ vision, ...avengers }: Avengers) => {
    console.log(vision, avengers);
  };

  //   printAvenger(avengers);

  const arr: [string, number, boolean] = ["Hola", 58, true];

  const [saludo, , bool] = arr;

  console.log(saludo, bool);
})();
