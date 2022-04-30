function typewriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, index) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * index);
    });
}

const title = document.querySelector('#home>#txthome>h2');
typewriter(title)




