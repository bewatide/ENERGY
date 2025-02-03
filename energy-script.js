document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    if (message) {
        alert("¡Gracias por tu mensaje! 💌");
        // Aquí podríamos integrar una API o más lógica dinámica según lo que queramos hacer con los mensajes.
    } else {
        alert("Por favor, escribe un mensaje.");
    }
});

function addImage() {
    const galleryContainer = document.getElementById("galleryContainer");
    const newImage = document.createElement("img");
    newImage.src = "ruta/a/tu/imagen.jpg"; // Aquí se puede integrar una API para cargar imágenes.
    newImage.alt = "Nueva creación";
    newImage.style.width = "100px";
    galleryContainer.appendChild(newImage);
}
