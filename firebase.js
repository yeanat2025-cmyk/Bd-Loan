// Firebase CDN
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore-compat.js";
import "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage-compat.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_qWfwC0YcWHxjs16d6LnAxzKBZg0a0P0",
  authDomain: "titi-live1.firebaseapp.com",
  databaseURL: "https://titi-live1-default-rtdb.firebaseio.com",
  projectId: "titi-live1",
  storageBucket: "titi-live1.firebasestorage.app",
  messagingSenderId: "184688632840",
  appId: "1:184688632840:web:85caa04f3884ca5c609dbd",
  measurementId: "G-G8WSFMJYVL"
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
