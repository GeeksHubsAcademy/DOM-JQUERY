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
var usernameInput = document.querySelector('.username');// seleccionamos el input usernam
var textoUsuario = document.querySelector('#textoUsuario');//seleccionamos el h2 donde guardaremos el texto escrito en el input
usernameInput.addEventListener('keyup', function (event) {//Nos ponemos a la escucha del evento KeyUp del input seleccionado
    usuario.username = event.target.value
    textoUsuario.innerHTML ='<p>'+event.target.value+'</p>'; //asignamos como valor html del h2 seleccionado el valor que se ha introducido en el input username
    console.log(usuario)
})

var passwordInput = document.querySelector('.password');
var textoPassword = document.querySelector('#textoPass');
passwordInput.addEventListener('keyup', function (event) {
    usuario.password = event.target.value
    textoPassword.innerText =event.target.value;
    console.log(usuario)
})