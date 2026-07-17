import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkKL4Nd_xnVRWIYuktATLDgvcjjZx0vyc",
  authDomain: "dockora-b78a6.firebaseapp.com",
  projectId: "dockora-b78a6",
  storageBucket: "dockora-b78a6.firebasestorage.app",
  messagingSenderId: "770585532078",
  appId: "1:770585532078:web:bb5258ecc507d159d73f3f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

alert("admin.js يعمل");

document.getElementById("publishBtn").addEventListener("click", async () => {

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  try {

    await addDoc(collection(db, "news"), {
      title: title,
      image: image,
      content: content,
      date: new Date()
    });

    alert("تم نشر الخبر بنجاح ✅");

    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("content").value = "";

  } catch (error) {

    alert(error.message);

  }

});