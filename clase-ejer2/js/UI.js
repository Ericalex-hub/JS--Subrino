export const UI = {
    mainCont: null,
    container:null,

    init: (config) => {
        UI.mainCont = document.getElementById(config.mainCont);
        UI.container = document.getElementById(config.container);
    }, 
}