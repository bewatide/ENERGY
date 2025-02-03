// Función para enviar el mensaje desde el input de texto
function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    displayMessage(userMessage, true); // Muestra el mensaje escrito
    const response = generateResponse(userMessage);
    displayMessage(response, false); // Muestra la respuesta de ENERGY

    // Responder con voz
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = 'es-ES'; // Configurar el idioma de la voz
    window.speechSynthesis.speak(speech);
}

// Función para generar una respuesta (puede ser personalizada más tarde)
function generateResponse(userMessage) {
    return `Has dicho: ${userMessage}. ¡Interesante!`;
}

// Función para mostrar mensajes en el chat
function displayMessage(message, isUser) {
    const chatContainer = document.createElement('div');
    chatContainer.classList.add(isUser ? 'user-message' : 'energy-message');
    chatContainer.textContent = message;
    document.body.appendChild(chatContainer);
}

// Función para iniciar el reconocimiento de voz
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'es-ES'; // Configurar el idioma

recognition.onresult = function(event) {
    const userMessage = event.results[0][0].transcript;
    displayMessage(userMessage, true); // Muestra el mensaje hablado
    const response = generateResponse(userMessage);
    displayMessage(response, false); // Muestra la respuesta de ENERGY

    // Responder con voz
    const speech = new SpeechSynthesisUtterance(response);
    speech.lang = 'es-ES'; // Configurar el idioma de la voz
    window.speechSynthesis.speak(speech);
};

// Función para iniciar el reconocimiento de voz cuando el usuario haga clic en el botón
function startVoiceRecognition() {
    recognition.start();
}

// Asignamos la función al botón de voz
document.getElementById('startVoiceBtn').addEventListener('click', startVoiceRecognition);

// Función para manejar la subida de archivos
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const fileLink = document.createElement('li');
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.textContent = `Descargar: ${file.name}`;
        fileLink.appendChild(link);
        document.getElementById('fileLinks').appendChild(fileLink);
    }
}

