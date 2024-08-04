let sticker1Input = document.getElementById('sticker1');
let sticker2Input = document.getElementById('sticker2');
let sticker3Input = document.getElementById('sticker3');
let resultado = document.getElementById('resultado');

sticker1Input.addEventListener('input', calcularTotal);
sticker2Input.addEventListener('input', calcularTotal);
sticker3Input.addEventListener('input', calcularTotal);

function calcularTotal() {
    let totalStickers = 
    parseInt(sticker1Input.value) + 
    parseInt(sticker2Input.value) + 
    parseInt(sticker3Input.value);

  if (totalStickers <= 10) {
    resultado.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    resultado.textContent = "Llevas demasiados stickers";
  }
}