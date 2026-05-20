const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("pwd").value;

    // cek apakah akun sudah pernah dibuat
    let savedUser =
    localStorage.getItem("username");

    let savedPass =
    localStorage.getItem("password");

    // kalau belum ada akun → simpan akun baru
    if(savedUser===null){

        localStorage.setItem(
        "username",
        username
        );

        localStorage.setItem(
        "password",
        password
        );

        localStorage.setItem(
        "isLoggedIn",
        "true"
        );

        alert("Akun berhasil dibuat!");

        window.location.href="../index.html";

    }

    // kalau akun sudah ada → cek login
    else if(
        username===savedUser &&
        password===savedPass
    ){

        localStorage.setItem(
        "isLoggedIn",
        "true"
        );

        alert("Login berhasil!");

        window.location.href="../index.html";

    }

    else{

        alert(
        "Username atau password salah"
        );

    }

});
