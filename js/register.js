document
.getElementById("registerForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

let username=
document.getElementById("username").value;

let email=
document.getElementById("email").value;

let password=
document.getElementById("password").value;

if(localStorage.getItem(username)){

alert("Username sudah digunakan");

return;

}

let userData={

email:email,
password:password

};

localStorage.setItem(
username,
JSON.stringify(userData)
);

alert("Register berhasil");

window.location.href=
"loggin.html";

});
