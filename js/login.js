const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("pwd").value;

    // (simple login bebas, gak pakai database)
    if (username.trim() === "" || password.trim() === "") {
        alert("Isi username dan password dulu!");
        return;
    }

    // SIMPAN DATA LOGIN
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    // arahkan ke halaman utama
    window.location.href = "../index.html";
});
