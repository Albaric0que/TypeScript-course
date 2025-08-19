(() => {
  // Utilizamos la palabra implements para implementar una o varias interfaces en una clase.
  interface Xmen {
    name: string;
    age: number;
    mutantPower: (id: number) => string;
  }

  interface Human {
    realName: string;
  }

  class Mutant implements Xmen, Human {
    public realName: string;
    public name: string;
    public age: number;

    constructor(realName: string, name: string, age: number) {
      this.realName = realName;
      this.name = name;
      this.age = age;
    }

    mutantPower(id: number): string {
      return this.name + "-" + this.realName;
    }
  }
})();
