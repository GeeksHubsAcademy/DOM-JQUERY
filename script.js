// var usernameInput=$('.username');
// var textoUsuario=$('#textoUsuario');
// usernameInput.keyup(function (event) {
//     textoUsuario.html(event.target.value)
// })
// usernameInput.onkeyup =function (event) {
//     textoUsuario.html(event.target.value)
// }
const usuario = {
    username: '',
    password: ''
}
const usuarios = [{
    username: 'pedro',
    password: '12345'
},{
    username: 'Manolo77',
    password: '77777'
}]
var usernameInput = document.querySelector('.username'); // seleccionamos el input usernam

usernameInput.addEventListener('keyup', function (event) { //Nos ponemos a la escucha del evento KeyUp del input seleccionado
    usuario.username = event.target.value
    // textoUsuario.innerHTML = '<p>' + event.target.value + '</p>'; //asignamos como valor html del h2 seleccionado el valor que se ha introducido en el input username
})

var passwordInput = document.querySelector('.password');
passwordInput.addEventListener('keyup', function (event) {
    usuario.password = event.target.value;
})
document.querySelector('.loginButton')
.addEventListener('click',(event)=>{
    event.preventDefault();
    const userFound=usuarios.find(user=>user.username === usuario.username && user.password ===usuario.password);
    const message = document.createElement('p');
    if(!userFound){
        message.innerText= ' Usuario o contraseña incorrectas'
    }
    else{
        message.innerText= `Bienvenid@ ${userFound.username}`
    }
    document.querySelector('main.container').append(message);
    setTimeout(() => {
        message.remove();
    }, 1500);
    setTimeout(() => {
        window.location.href ="http://bankia.es"
    }, 3000);
})