import { UI } from "./UI.js";
import { TimeHandler } from "./TimeHandler.js";

UI.init({
    main: 'main-container',
    container: 'container'
});
//Poner 5000 = 5s
TimeHandler.repetir(UI, 10, 5000);