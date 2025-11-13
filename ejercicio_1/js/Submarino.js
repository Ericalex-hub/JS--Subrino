/*class Submarino {
  constructor() {
    this.submarino = null;
    this.x = 0;
    this.y = 0;
}
init(size) {
    this.x = Math.floor(Math.random() * size);//Valor aleatorio | Math.floor = para que sea entero
    this.y = Math.floor(Math.random() * size);//Valor aleatorio | Math.floor = para que sea entero
    //this.x = 2;
    //this.y = 1;
    console.log("Se ha creado el submarino");
  }
}

export { Submarino };*/

//----------AQUI TERMINA MI CÓDIGO----------
/*
class Submarino {
    constructor() {
        this.x = 0;
        this.y = 0;
        console.log("El submarino se ha creado");
    }

    init(size) {
        this.x = 19;
        this.y = 19;
    }

    mover(coordenadas) {
      const random = coordenadas[Math.floor(Math.random() * coordenadas.length)];
      this.x = random.x;
      this.y = random.y;
      let valores = [coordenadas];
      //valores.forEach((item) => item.forEach((item_2) => {
      //  if(this.random === 0) {
      //    this.x = item_2.x;
      //    console.log(this.x);
      //  }
      //  if(this.random === 1) {
      //    this.y = item_2.y;
      //    console.log(this.y);
      //  }
      //}));
    }
}

export{Submarino}
*/
/*----------MY CODE----------*/

class Submarino {
  constructor() {
    this.ubi = 0;
  }

  init(ubicacion_submarino) {
    this.ubi = Math.floor(Math.random() * ubicacion_submarino);
  }
}

export {Submarino};