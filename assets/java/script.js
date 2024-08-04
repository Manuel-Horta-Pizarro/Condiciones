
let imagen = document.getElementById ('miImagen')

imagen.addEventListener('click', () => {
    if (imagen.style.border == '4px solid gold') {
        imagen.style.border = 'none';

    } else{
        imagen.style.border = '4px solid gold';
    }
})


