document
.getElementById("loginForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

let username=
document.getElementById("username").value;

let password=
document.getElementById("pwd").value;

let userData=
localStorage.getItem(username);

if(!userData){

alert(
"Username tidak ditemukan"
);

return;

}

userData=
JSON.parse(userData);

if(
password===
userData.password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

window.location.href=
"../index.html";

}else{

alert(
"Password salah"
);

}

});
