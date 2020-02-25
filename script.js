// var usernameInput=$('.username');
var usernameInput = document.querySelector('.username');
// var textoUsuario=$('#textoUsuario');
// usernameInput.keyup(function (event) {
//     console.log(event.target.value)
//     textoUsuario.html(event.target.value)
// })
var textoUsuario = document.querySelector('#textoUsuario');
usernameInput.addEventListener('keyup',function (event) {
    console.log(event.target.value)
    textoUsuario.html(event.target.value)
})
// usernameInput.onkeyup =function (event) {
//     console.log(event.target.value)
//     textoUsuario.html(event.target.value)
// }