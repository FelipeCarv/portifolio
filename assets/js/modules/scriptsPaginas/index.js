export default function scriptsIndex(){
    // 'colocar scripts das respectivas paginas dentro de -scriptsPaginas-  e criar o arquivo exemplo: home.js - contato.js  --- e importar no main e executar em sua respectiva pagina '
    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    const titulo = document.querySelector('.titulo-principal');
    typeWrite(titulo);



    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu(){
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    btnMobile.addEventListener('click' , toggleMenu);
    
}
