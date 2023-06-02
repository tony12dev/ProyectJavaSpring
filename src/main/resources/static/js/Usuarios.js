// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizaremail();
});

let actualizaremail =() =>{
   document.getElementById('email-usuario').outerHTML = localStorage.email;
}

async function cargarUsuarios(){

  const  request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const usuarios = await request.json();


  let listadoHtml = '';

  for(let usuario of usuarios){
    let telefonoText = usuario.telefono == null ? '---': usuario.telefono;
let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circule btn-sm"> <i class="fas fa-trash"></i>';
   let usuarioHtml = `<tr>
                     <td>${usuario.id}</td>
                     <td>${usuario.nombre} ${usuario.apellido}</td>
                     <td>${usuario.email}</td>
                     <td>${telefonoText}</td>
                     <td>${botonEliminar}
                     </a></td>
                     </tr>`;
       listadoHtml += usuarioHtml;
  }
  console.log(listadoHtml);



  document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
}

function getHeaders(){
 return {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': localStorage.token
        };
}

async function eliminarUsuario(id){
 if(!confirm('Desea eliminar este usuario ?')){
    return;
 }

 const  request = await fetch('api/usuarios/'+id, {
    method: 'DELETE',
    headers: getHeaders()
  });
location.reload();

}