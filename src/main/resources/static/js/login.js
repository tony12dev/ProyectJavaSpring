$(document).ready(function() {
  //on ready
});

async function iniciarSession(){

 let datos = {};

 datos.email = document.getElementById('email').value;
 datos.password = document.getElementById('password').value;


  const  request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  const response = await request.text();

  if(response != 'FAIL'){
  localStorage.token = response;
  localStorage.email = datos.email;
   window.location.href = 'usuarios.html'

  }else{
    alert('las credenciales son incorrectas \n Intente nuevamente');
  }

}
