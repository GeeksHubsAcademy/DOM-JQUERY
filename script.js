// var usernameInput=$('.username');
// var textoUsuario=$('#textoUsuario');
// usernameInput.keyup(function (event) {
//     textoUsuario.html(event.target.value)
// })
// usernameInput.onkeyup =function (event) {
//     textoUsuario.html(event.target.value)
// }
var usuario={
    username:'',
    password:''
}
var usernameInput = document.querySelector('.username');
var textoUsuario = document.querySelector('#textoUsuario');
usernameInput.addEventListener('keyup', function (event) {
    textoUsuario.innerHTML ='<p>'+event.target.value+'</p>';
})

var passwordInput = document.querySelector('.password');
var textoPassword = document.querySelector('#textoPass');
passwordInput.addEventListener('keyup', function (event) {
    textoPassword.innerText =event.target.value;
})