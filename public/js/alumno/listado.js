//modulo para agregarle funcionaliad al boton NUEVO de la pagina principal
var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonNuevo();
		_private.funcionLimpiar();
	};


	_private.funcionLimpiar=function(){
		document.getElementById("formulario").reset();
	};

//funcion eliminar
_public.eliminar = function(){
	alert("ESTOY EN LA FUNCION ELIMINAR");

};
// find de funcioni elimnar

	_private.agregarEventoAbotonNuevo=function(){
		$("#nuevo")[0].addEventListener('click', function(event) {
				//document.getElementById("bandera").value='crear'
			$('#exampleModal').modal('show')
			_private.funcionLimpiar();
			$("#bandera").val("crear");
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);
