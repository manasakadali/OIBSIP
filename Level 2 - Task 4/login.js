import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAn7gHLXiG9GidIGBq_PZo0_AmvOTZJgZM",
  authDomain: "task-ed90b.firebaseapp.com",
  projectId: "task-ed90b",
  storageBucket: "task-ed90b.appspot.com",
  messagingSenderId: "689947270896",
  appId: "1:689947270896:web:f0769b4ab54b7187fe6c35"
};

const App = initializeApp(firebaseConfig);
const auth = getAuth();

window.login = function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("All fields are required");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      alert("Login Successful");
      // Redirect to dashboard or homepage
      window.location.replace('home.html');
    })
    .catch(function (error) {
      console.error("Error logging in:", error.message);
      alert("Error logging in: " + error.message);
    });
};

export const user = document.getElementById("email");