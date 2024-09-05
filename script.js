const images = [
    'images/Primera.jpg',
    'images/Segunda.jpg',
    'images/Tercera.jpg',
    'images/Cuarta.jpg',
    'images/Quinta.jpg',
    'images/Sexta.jpg',
    'images/Septima.jpg',
    // Agrega más imágenes aquí
];

let currentIndex = 0;
const imgElement = document.getElementById('roulette-img');

function changeImage() {
    imgElement.classList.remove('show');
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.classList.add('show');
    }, 1000); // Tiempo para la transición
}

imgElement.onload = () => {
    imgElement.classList.add('show');
};

setInterval(changeImage, 5000); // Cambia la imagen cada 5 segundos
