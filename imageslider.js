
let images = document.querySelectorAll('img');
let lastClickedImage = null;
let currentImageIndex = -1;

let btnNext = document.createElement('button');
btnNext.textContent = 'Next';
let btnPrev = document.createElement('button');
btnPrev.textContent = 'Prev';

// Estilos básicos para los botones
btnNext.style.position = 'absolute';
btnPrev.style.position = 'absolute';
btnNext.style.top = '50%';
btnPrev.style.top = '50%';
btnNext.style.right = '10px';  // Ajuste de posición a la derecha
btnPrev.style.left = '10px';   // Ajuste de posición a la izquierda
btnNext.style.zIndex = '3';
btnPrev.style.zIndex = '3';

document.body.appendChild(btnNext);
document.body.appendChild(btnPrev);

function updateImage(index) {
  if (lastClickedImage) {
    lastClickedImage.style.zIndex = '';
    lastClickedImage.style.width = '';
    lastClickedImage.style.height = '';
  }

  if (index >= 0 && index < images.length) {
    images[index].style.zIndex = '2';
    images[index].style.width = '300px';
    images[index].style.height = '300px';
    lastClickedImage = images[index];
    currentImageIndex = index; // Actualiza el índice actual
  }
}

images.forEach((image, index) => {
  image.style.transition = 'all 0.3s ease';

  image.addEventListener('click', () => {
    if (lastClickedImage && lastClickedImage !== image) {
      lastClickedImage.style.zIndex = '';
      lastClickedImage.style.width = '';
      lastClickedImage.style.height = '';
    }

    if (image === lastClickedImage) {
      lastClickedImage.style.zIndex = '';
      lastClickedImage.style.width = '';
      lastClickedImage.style.height = '';
      lastClickedImage = null;
      currentImageIndex = -1; // Resetear el índice
    } else {
      image.style.zIndex = '2';
      image.style.width = '300px';
      image.style.height = '300px';
      lastClickedImage = image;
      currentImageIndex = index; // Actualizar el índice
    }
  });
});

// Función para cambiar a la siguiente imagen
btnNext.addEventListener('click', () => {
  if (currentImageIndex >= 0) {
    let nextIndex = (currentImageIndex + 1) % images.length;
    updateImage(nextIndex);
  }
});

// Función para cambiar a la imagen anterior
btnPrev.addEventListener('click', () => {
  if (currentImageIndex >= 0) {
    let prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(prevIndex);
  }
});
