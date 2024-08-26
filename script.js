let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(index);
    });
});

function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    modalImg.src = images[currentIndex].src;
}

function closeModal() {
    modal.style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    modalImg.src = images[currentIndex].src;
}

document.addEventListener("DOMContentLoaded", function() {
    let delay = 0;
    images.forEach(img => {
        setTimeout(() => {
            img.style.opacity = 1;
        }, delay);
        delay += 300;
    });
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
