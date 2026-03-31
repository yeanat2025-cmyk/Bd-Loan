// app.js
const loginForm = document.getElementById("loginForm");
const errorBox = document.getElementById("error-box");

// Email / Password login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        showError("Please enter email and password!");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            localStorage.setItem("user", JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));
            window.location.href = "home.html"; // Redirect after login
        })
        .catch((err) => showError(err.message));
});

// Google login
window.googleLogin = () => {
    auth.signInWithPopup(googleProvider)
        .then((res) => {
            const user = res.user;
            db.collection("users").doc(user.uid).set({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }, { merge: true });

            localStorage.setItem("user", JSON.stringify({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }));

            window.location.href = "home.html";
        })
        .catch((err) => showError(err.message));
};

// Redirect to registration
window.createNewAccount = () => {
    window.location.href = "register.html";
};

// Show error
function showError(msg){
    errorBox.innerText = msg;
    errorBox.style.display = "block";
    setTimeout(() => errorBox.style.display = "none", 4000);
}