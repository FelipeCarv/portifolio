
import Dom from './modules/constructors.js'; //selecionar elementos
import scriptsIndex from './modules/scriptsPaginas/index.js';


// PAGES 

const pageIndex = new Dom().el("#page__index")

if (pageIndex) { // ★ PREVENCAO 1
    new Dom().bodyClass("body__index");
    scriptsIndex();
}



document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});
