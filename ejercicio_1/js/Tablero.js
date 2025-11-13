/*import { Submarino } from "./Submarino.js";
class Tablero {
  constructor() {
    this.tablero = null; //Es el array
    this.size = 0;
    this.submarino = new Submarino();
  }
  dispara(x, y) {
    if (x == this.submarino.x) {
      if (y == this.submarino.y) {
        //Si asierta en ambos gana
        console.log("Has acertado");
      } else {
        //Si falla en uno pierde, y se suma en unos los valores creados, no introdusidos
        console.log("Has fallado");
        this.submarino.x += 2;
        this.submarino.y += 2;
        console.log(this.submarino); //Valor despues de la suma
      }
    } else {
      //Si falla en uno pierde, y se suma en unos los valores creados, no introdusidos
      console.log("Has fallado");
      this.submarino.x += 1;
      this.submarino.y += 1;
      console.log(this.submarino); //Valor despues de la suma
    }
  }

  init(config) {
    this.size = config.size;
    this.submarino.init(this.size); //Las coordenadas acorde al tablero
    console.log("Se ha creado el tablero");
    console.log(this.submarino); //Valor primero de cordenadas submarino

    //this.tablero = Array.from({ length: this.size }, (v, i) =>
    //  Array.from({ length: this.size }, (v, j) => 0)
    //);
  
    //console.log(this.tablero);
  
    //this.tablero[Math.floor(Math.random() * this.size)][
    //  Math.floor(Math.random() * this.size)
    //] = 1;
  
    //if(this.tablero == 1) {
    //    console.log('pinta');
    //}
  
    //if (this.tablero == this.submarino.x) {
    //  if (this.tablero[j] == this.submarino.y) {
    //    console.log("Le has dado");
    //  } else {
    //    console.log("Has fallado");
    //  }
    //}
  }

  dispara_2(config) {
    this.size = config.size;
    this.repetir = false;
    while (this.repetir === true) {
      this.disparoX = Math.floor(Math.random() * this.size); //Hace el disparo a la linea x acorde al tablero
      this.disparoy = Math.floor(Math.random() * this.size); //Hace el disparo a la linea y acorde al tablero
      if (this.submarino.x == this.disparoX) {
        if (this.submarino.y == this.disparoy) {
          console.log("Has acertado");
          this.repetir = false;
        } else {
          console.log("Has fallado");
          this.submarino.y += 1;
          this.repetir = true;
        }
      } else {
        console.log("Has fallado");
        this.submarino.x += 1;
        this.repetir = true;
      }
    }
  }
}

export { Tablero };*/

//----------AQUI TERMINA MI CÓDIGO----------
/*
import { Submarino } from "./Submarino.js";//Importamos Submarino
import { Celda } from "./Celda.js";//Importamos Celda
import { Vecinos } from "./Celda.js";//Importamos Vecinos(método de celda)

class Tablero {
    constructor() {
        this.tablero = null;
        this.size = 0;
        this.submarino = new Submarino();
        console.log("El tablero se ha creado");
      }
      
      init(config) {
        this.size = config.size;
        
        //Dividimos los valores del array en dos(vector i y vector j)
        let malla = Array.from({ length: this.size }, (v, i) => 
          Array.from({ length: this.size }, (v, j) => new Celda( i,j))//Con ambos valores se crea una celda
      );
      //console.log(malla);
      malla.forEach((item,i)=>item.forEach((celda,j)=>{//Esto hace que le da valor a todas las casillas del array
        if(i>0) celda.nuevoVecino(Vecinos.ARRIBA,malla[i-1][j]);//Averigua si hay una casilla y le da valor
        if(i<this.size-1) celda.nuevoVecino(Vecinos.ABAJO,malla[i+1][j]);//Averigua si hay una casilla y le da valor
        if(j>0) celda.nuevoVecino(Vecinos.IZQUIERDA,malla[i][j-1]);//Averigua si hay una casilla y le da valor
        if(j<this.size-1) celda.nuevoVecino(Vecinos.DERECHA,malla[i][j+1]);//Averigua si hay una casilla y le da valor
      }));
      this.tablero=malla.flat();//Esto hace que el array bidimensional de ponga todo en una fila, lo aplasta en una
      console.log(this.tablero);
      this.submarino.init(this.size);
    }
    
    dispara(x,y){
      //Se busca donde está el submarino despues de haber disparado
      if(this.submarino.x===x && this.submarino.y===y){//Esto es el disparo
        return true;
      }
      let celda = this.tablero.find((item) =>item.x===this.submarino.x && item.y===this.submarino.y);//Esto es la busqueda del submarino
      console.log(celda.vecinos.filter((item)=>item!=null));
      //Mover hace que se guarde el antiguo valor del submarino, despues de que este se mueva
      this.submarino.mover(celda.vecinos.filter((item)=>item!=null));//filter: mete los valores queridos en un array
      console.log(this.submarino);
        return false;
    }

}

export { Tablero }
*/
/*----------MY CODE----------*/

import { Submarino } from "./Submarino.js";
import { UI } from "./UI.js";

class Tablero {
  constructor() {
    this.submarino = new Submarino();
    this.ui = new UI();
    this.size = 0;
    //this.tablero = document.getElementById('table-game');
  }
  crearTablas(size) {
    this.size = size;
    this.submarino.init(this.size*this.size);
    console.log(this.submarino.ubi);
    this.ui.generarEstructura(this.size);
    Array.from({length:this.size*this.size}, (_,i) => {
      const fil = Math.floor(i/this.size);
      const column = i%this.size;
      const div = this.ui.clonarDivs(fil, column);
      if (i == this.submarino.ubi) {
        div.classList.add('submarino');
      }
      div.addEventListener('click', () => {
        if (i == this.submarino.ubi) {
          div.textContent = 'O';
          div.style.backgroundColor = 'green';
        } else {
          div.textContent = 'X';
          div.style.backgroundColor = 'red';
        }
      });
      this.ui.meterDivs(div);
    });
  }
  /*
  tabla2x2(parametros_tablero) {
    this.size = parametros_tablero;
    this.submarino.init(this.size * this.size);
    console.log(this.submarino);
    const contenedor = document.getElementById('container-cell');
    this.tablero.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    Array.from({ length: this.size*this.size }, (_, i) => {
      const duplicar = contenedor.content.cloneNode(true);
      const divs = duplicar.querySelector('.cell');
      divs.textContent = ` ${(i%this.size)+1}, ${Math.floor(i/this.size)+1}`;
      if (i === this.submarino.ubi) {
        divs.classList.add('submarino');
      }
      this.tablero.appendChild(duplicar);
    });
  }
  tabla4x4(parametros_tablero) {
    this.size = parametros_tablero;
    this.submarino.init(this.size * this.size);
    console.log(this.submarino);
    const contenedor = document.getElementById('container-cell');
    this.tablero.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    Array.from({ length: this.size*this.size }, (_, i) => {
      const duplicar = contenedor.content.cloneNode(true);
      const divs = duplicar.querySelector('.cell');
      divs.textContent = ` ${(i%this.size)+1}, ${Math.floor(i/this.size)+1}`;
      if (i === this.submarino.ubi) {
        divs.classList.add('submarino');
      }
      this.tablero.appendChild(duplicar);
    });
  }
  tabla8x8(parametros_tablero) {
    this.size = parametros_tablero;
    this.submarino.init(this.size * this.size);
    console.log(this.submarino);
    const contenedor = document.getElementById('container-cell');
    this.tablero.style.gridTemplateColumns = `repeat(${this.size}, 1fr)`;
    Array.from({ length: this.size*this.size }, (_, i) => {
      const duplicar = contenedor.content.cloneNode(true);
      const divs = duplicar.querySelector('.cell');
      divs.textContent = ` ${(i%this.size)+1}, ${Math.floor(i/this.size)+1}`;
      if (i === this.submarino.ubi) {
        divs.classList.add('submarino');
      }
      this.tablero.appendChild(duplicar);
    });
  }*/
}

export {Tablero};