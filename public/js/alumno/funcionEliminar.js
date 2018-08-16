
function eliminar(id_registro){
  //alert("ESTOY EN FUNCION ELIMINAR con id = "+ id_registro);
  var confirmar = confirm('Desa eliminar el producto');
  if (confirmar){
    $.ajax({
        url: '/agregarParticipante/'+id_registro,
        type: "DELETE",
        data: {
        }
      }).done(function(data){
        alert("DATOS ELIMINADOS CORRECTAMENTE ");
        location.href = "http://localhost:3000/alumnos";
      })
  }

}//fin de funcion eliminar


function actualizar(id_registro){
  //alert("Estoy en funcion actualizar con el id:"+ id_registro );
  //abrimos el formulario modal
  $('#exampleModal').modal('show')
  //ahora hacemos la peticion get a la api segun el id que venga en id_registro
  $.ajax({
      url: '/agregarParticipante/'+id_registro,
      type: "GET",
      dataType: 'json',
      data: {
      }
    }).then(function(data) {
      //console.log(data);
      //TENEMOS LOS DATOS, AHORA SE LOS MANDAMOS AL FORMULARIO MODAL
      //alert((data.data[0].nombre));
      document.getElementById("nombre").value = data.data[0].nombre;
      document.getElementById("carnet").value= data.data[0].carnet;
      document.getElementById("facultad").value = data.data[0].facultad;
      document.getElementById("ciclo").value= data.data[0].ciclo;
      document.getElementById("evento").value = data.data[0].evento;
      document.getElementById("categoria").value= data.data[0].categoria;
      //los datos ya estan en el formulario, esperamos que el usuario los modifique
      	$("#bandera").val("modificar");
        $("#id").val(id_registro);
    });

}//fin de funcion actualizar
