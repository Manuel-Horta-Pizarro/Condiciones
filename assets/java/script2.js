function validarPassword() {
    let digito1 = document.getElementById('digito1').value;
    let digito2 = document.getElementById('digito2').value;
    let digito3 = document.getElementById('digito3').value;
    let password = digito1 + digito2 + digito3;

    const resultado = document.getElementById('resultado');

    if (password === '911') {
        resultado.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultado.textContent = 'Password 2 correcto';
    } else {
        resultado.textContent = 'Password incorrecto';
    }
}