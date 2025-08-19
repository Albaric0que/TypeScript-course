(() => {
  // Para crear interfaces con distintos niveles de anidación, creamos las interfaces que irían dentro y creamos un atributo dentro de la interfaz principal, tipada con esa interfaz secundaria.

  //Interfaz principal:
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getCityAddress: (id: number) => String;
  }

  //Interfaz secundaria. Será usada para tipar un atributo de la principal, quedando así anidada dentro.
  //Se implementa DESPUÉS de la principal:
  interface Address {
    id: number;
    cp: number;
    city: string;
  }

  const client: Client = {
    name: "Alba",
    age: 100,
    address: {
      id: 555,
      cp: 23006,
      city: "Jaén",
    },
    getCityAddress(id: number): string {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Manolo",
    age: 102,
    address: {
      id: 421,
      cp: 29007,
      city: "Málaga",
    },
    getCityAddress(id: number): string {
      return this.address.city;
    },
  };
})();
