document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("pwd").value;

    // username & password contoh
    if(username === "admin" && password === "12345"){

        localStorage.setItem("isLoggedIn", "true");

        alert("Login berhasil!");

        window.location.href="../index.html";

    } else {

        alert("Username atau password salah");

    }

});
