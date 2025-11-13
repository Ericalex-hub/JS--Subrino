export class TimeHandler {

    static contador = null;
    static indice = null;
    static aprovar = false;

    static repetir(UI, vecesRepetir, tiempo) {
        if(TimeHandler.aprovar === false) {
            TimeHandler.contador = vecesRepetir;
            TimeHandler.indice = setInterval(() => {
                TimeHandler.contador--;
                console.log(TimeHandler.contador);
                if (TimeHandler.contador === 0) {
                    TimeHandler.stop();
                }
            }, tiempo);
            TimeHandler.aprovar = true;
        } else {
            console.log("Acabo");
        }
    }

    static stop() {
        return clearTimeout(TimeHandler.indice);
    }

}