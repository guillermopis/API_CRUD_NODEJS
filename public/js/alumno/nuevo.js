
//modulo para funciones de botones del formulario modal
var ModuloNuevo = function(){

	var _private = {}, _public = {};
	_private.formulario=null;
	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.asignarFormulario();
		_private.agregarEventoAbotonGuardar();
		_private.agregarEventoAbotonCerrar();
		//_private.hacerPeticionPost();
	}

	_private.asignarFormulario=function(){
		var elementos = $("form"); //funcion para ver si el formulaio se cargo.
		if (elementos.length==0){
			console.log("formulario de nuevo no encontrado");
		}else{
			_private.formulario=elementos[0];
			console.log("elementos "+ elementos[0]);
		}
	}

	_private.agregarEventoAbotonGuardar=function(){
		var botonGuardar = $("#guardar");
		if(botonGuardar.length == 0){ //valida si el botn guardar se cargo, o existe
			console.log("el boton guardar del formulario nuevo no existe");
			return;
		}
		botonGuardar[0].addEventListener('click', function(event) {//le asigna evento al boton guardar
			_private.validarFormulario(); //
		});
	}


	_private.agregarEventoAbotonCerrar=function(){
		var botonCerrar= $("#btnclose");
		if(botonCerrar.length == 0){
			console.log("el boton cerrar del formulario nuevo no existe");
			return;
		}
		botonCerrar[0].addEventListener('click', function(event) {
			//_private.validarFormulario();
			console.log("cerrando formulario");
		});
	}

	_private.hacerPeticionPost=function(){
		//var carnet = parseString(document.getElementById("carnet").value);
		console.log($("#bandera").val());
		if($("#bandera").val()	== "crear"){
			//console.log("estoy en crear ");

			$.ajax({
					url: '/agregarParticipante',
					type: "POST",
					data: {
						"nombre": document.getElementById("nombre").value,
						"carnet": document.getElementById("carnet").value,
						"facultad": document.getElementById("facultad").value,
						"ciclo": document.getElementById("ciclo").value,
						"evento": document.getElementById("evento").value,
						"categoria": document.getElementById("categoria").value
					}
				}).done(function(data){
					$('#exampleModal').modal('hide')
					alert("DATOS GUARDADOS CORRECTAMENTE ");
					location.href = "http://localhost:3000/alumnos";
				})
		}else{
			//console.log("estoy en modificar");
			//si es modificacion
			$.ajax({
		      url: '/agregarParticipante/'+$("#id").val(),
		      type: "PUT",
		      data: {
						"nombre": document.getElementById("nombre").value,
						"carnet": document.getElementById("carnet").value,
						"facultad": document.getElementById("facultad").value,
						"ciclo": document.getElementById("ciclo").value,
						"evento": document.getElementById("evento").value,
						"categoria": document.getElementById("categoria").value
		      }
		    }).done(function(data){
		      alert("DATOS MODIFICADOS CORRECTAMENTE");
		      location.href = "http://localhost:3000/alumnos";
		    })
		}
	}

	_private.validarFormulario=function(){
		var esFormularioValido=_private.formulario.checkValidity();
		console.log("formularios es valido ",esFormularioValido);
		if(esFormularioValido == true){
			console.log("guardemos la info")
			_private.hacerPeticionPost();
	}//fin del if
	}

	return _public.__construct.apply(this, arguments);
}

var nuevo = new ModuloNuevo();
document.addEventListener('DOMContentLoaded',nuevo.iniciar() , false);
