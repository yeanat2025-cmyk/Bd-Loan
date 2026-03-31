// Firebase CDN
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage-compat.js";

const firebaseConfig = {
    apiKey: "AIzaSyBzTcZID1MZjJGIR8ltR7M2KNn5eEyQHIE",
    authDomain: "bd-rin.firebaseapp.com",
    databaseURL: "https://bd-rin-default-rtdb.firebaseio.com",
    projectId: "bd-rin",
    storageBucket: "bd-rin.firebasestorage.app",
    messagingSenderId: "1033740162310",
    appId: "1:1033740162310:web:fd5641a3841e20f5517a87",
    measurementId: "G-GZZBG1JBFM"
};

firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Export globally
window.auth = auth;
window.db = db;
window.storage = storage;
window.googleProvider = googleProvider;