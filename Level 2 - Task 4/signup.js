import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

window.signup = function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("All fields are required");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      alert("Signup Successful");
      // Redirect to login page
      window.location.replace('login.html');
    })
    .catch(function (error) {
      console.error("Error signing up:", error.message);
      alert("Error signing up: " + error.message);
    });
};
