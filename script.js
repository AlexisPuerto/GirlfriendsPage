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

// Función para calcular el tiempo restante hasta el próximo 25
function updateCountdown() {
    const now = new Date();
    const currentMonth = now.getMonth(); // Mes actual (0-11)
    const next25 = new Date(now.getFullYear(), currentMonth + (now.getDate() >= 25 ? 1 : 0), 25, 0, 0, 0, 0); // Próximo 25

    const timeDifference = next25 - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('countdown').innerText = `¡Faltan ${days} días y ${hours} horas para cumplir otro mes!`;
}

// Actualizar el contador cada hora
setInterval(updateCountdown, 1000 * 60 * 60); // Actualizar cada hora
updateCountdown(); // Inicializar inmediatamente
