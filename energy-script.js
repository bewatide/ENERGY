document.getElementById('sendBtn').addEventListener('click', function() {
    let message = document.getElementById('chatInput').value;
    if (message) {
        let chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
        document.getElementById('chatInput').value = ''; // Limpiar el campo de texto
    }
});

document.getElementById('talkBtn').addEventListener('click', function() {
    startVoiceRecognition();
});

document.getElementById('uploadBtn').addEventListener('click', function() {
    uploadFile();
});

// Función para el reconocimiento de voz
function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    if (!recognition) {
        alert('Este navegador no soporta el reconocimiento de voz.');
        return;
    }

    recognition.lang = 'es-ES';
    recognition.start();

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        let chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><strong>Voz:</strong> ${transcript}</p>`;
    }

    recognition.onerror = function(event) {
        console.error('Error de reconocimiento de voz:', event.error);
        alert('Hubo un problema al procesar tu voz. Inténtalo de nuevo.');
    };
}

// Función para cargar archivos
function uploadFile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = function(event) {
        let file = event.target.files[0];
        if (file) {
            let chatBox = document.getElementById('chatBox');
            chatBox.innerHTML += `<p><strong>Archivo:</strong> ${file.name}</p>`;
        } else {
            alert('No se seleccionó ningún archivo.');
        }
    };
    input.click();
}




