class UI {
    constructor() {
        this.btns = {
            table1: document.getElementById('table-1'),
            table2: document.getElementById('table-2'),
            table3: document.getElementById('table-3')
        };

        this.container = document.getElementById('container-cell');
        this.mainContent = document.getElementById('table-game');
    }

    quitarBtns() {
        this.btns.table1.style.visibility = 'hidden';
        this.btns.table2.style.visibility = 'hidden';
        this.btns.table3.style.visibility = 'hidden';
    }

    generarEstructura(size) {
        this.mainContent.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    }

    clonarDivs(fil, colum) {
        const duplicar = this.container.content.cloneNode(true);
        const divs = duplicar.querySelector('.cell');
        divs.textContent = `${colum+1}, ${fil+1}`;
        return divs;
    }

    meterDivs(divs) {
        this.mainContent.appendChild(divs);
    }
}

export { UI }