import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkKL4Nd_xnVRWIYuktATLDgvcjjZx0vyc",
  authDomain: "dockora-b78a6.firebaseapp.com",
  projectId: "dockora-b78a6",
  storageBucket: "dockora-b78a6.firebasestorage.app",
  messagingSenderId: "770585532078",
  appId: "1:770585532078:web:bb5258ecc507d159d73f3f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerBtn").addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("تم إنشاء الحساب بنجاح 🎉");
        window.location.href = "login.html";
    })
    .catch((error) => {
        alert(error.message);
    });

});