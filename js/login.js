function login() {
  let name = document.getElementById("username").value;

  if (name === "") {
    alert("Isi nama dulu!");
    return;
  }

  document.getElementById("loginPage").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.getElementById("welcomeText").innerText = `Hai ${name}!`;
}
