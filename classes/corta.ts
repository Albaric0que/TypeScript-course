(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
  }

  const someAvenger = new Avenger("Antman", "Captain", "Scott Lang");
  console.log(someAvenger);
  console.log(Avenger.avgAge);
})();
