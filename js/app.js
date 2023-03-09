let nombreUsuario = prompt("Por favor, ingrese su nombre:");

let divNombreUsuario = document.getElementById("nombre-usuario");

divNombreUsuario.innerHTML = `¡Bienvenido ${nombreUsuario}!`;