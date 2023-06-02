$(document).ready(function() {
  //on ready
});

async function registrarrUsuario(){

 let datos = {};
 datos.nombre = document.getElementById('nombre').value;
 datos.apellido = document.getElementById('apellido').value;
 datos.email = document.getElementById('email').value;
 datos.password = document.getElementById('password').value;

 let repetirPassword = datos.password = document.getElementById('repetirPassword').value;

    if(repetirPassword != datos.password){
      alert('la contraseña que escribiste es diferente');
      return;
    }

  const  request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("la cuenta fue creada");
  window location.href = 'login.html';
}

