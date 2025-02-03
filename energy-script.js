document.getElementById('sendBtn').addEventListener('click', function() {
    let message = document.getElementById('chatInput').value;
    if (message) {
        let chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
        document.getElementById('chatInput').value = '';
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
    recognition.lang = 'es-ES';
    recognition.start();
    
    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        let chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><strong>Voz:</strong> ${transcript}</p>`;
    }
}

// Función para cargar archivos
function uploadFile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = function(event) {
        let file = event.target.files[0];
        let chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><strong>Archivo:</strong> ${file.name}</p>`;
    };
    input.click();
}



