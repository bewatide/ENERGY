// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDur25IJLc7nNNGJYrEkDfP-0oQTZO1v8g",
  authDomain: "energychat-4135c.firebaseapp.com",
  projectId: "energychat-4135c",
  storageBucket: "energychat-4135c.firebasestorage.app",
  messagingSenderId: "266295314261",
  appId: "1:266295314261:web:0189cb3752f8af22c891dc"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la base de datos de Firestore
const db = getFirestore(app);

// Manejo de la interfaz
document.getElementById('sendBtn').addEventListener('click', function() {
    let message = document.getElementById('chatInput').value;
    if (message) {
        let chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
        document.getElementById('chatInput').value = '';
        // Aquí podrías agregar la lógica para guardar el mensaje en Firestore
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





