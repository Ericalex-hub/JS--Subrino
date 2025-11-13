/*import { Tablero } from "./Tablero.js";

const config = {
  size: Math.floor(Math.random() * 10)//Longquitud del tablero | Math.floor = para que sea entero
};

const tablero = new Tablero();//Creo el objeto tablero
tablero.init(config);//Pongo su método
tablero.dispara(0, 0);*///Disparo
/*tablero.dispara_2(config);
if(tablero.dispara_2(config) == true) {
  console.log('Has fallado');//Disparo
} else {
  console.log('Has acertado');//Disparo
}
import { Tablero } from "./Tablero.js";
const config ={
    size:20
}
const tablero = new Tablero();
tablero.init(config);
tablero.dispara(3,3);*/

//----------AQUI TERMINA MI CÓDIGO ANTIGUO----------

/*----------MY CODE----------*/
import { Tablero } from "./Tablero.js";
import { UI } from "./UI.js";

/*let num1 = document.getElementById('table-1');
let num2 = document.getElementById('table-2');
let num3 = document.getElementById('table-3');*/
const ui = new UI();
const tablero = new Tablero();

ui.btns.table1.addEventListener('click', () => {
  ui.quitarBtns();
  tablero.crearTablas(2);
});

ui.btns.table2.addEventListener('click', () => {
  ui.quitarBtns();
  tablero.crearTablas(4);
});

ui.btns.table3.addEventListener('click', () => {
  ui.quitarBtns();
  tablero.crearTablas(8);
});

/*num1.addEventListener('click', (event) => {
  if (num1.textContent == '2x2') {
    num1.style.visibility = 'hidden';
    num2.style.visibility = 'hidden';
    num3.style.visibility = 'hidden';
    tablero.tabla2x2(2);
  }
});

num2.addEventListener('click', (event) => {
  if (num2.textContent == '4x4') {
    num1.style.visibility = 'hidden';
    num2.style.visibility = 'hidden';
    num3.style.visibility = 'hidden';
    tablero.tabla4x4(4);
  }
});

num3.addEventListener('click', (event) => {
  if (num3.textContent == '8x8') {
    num1.style.visibility = 'hidden';
    num2.style.visibility = 'hidden';
    num3.style.visibility = 'hidden';
    tablero.tabla8x8(8);
  }
});*/


