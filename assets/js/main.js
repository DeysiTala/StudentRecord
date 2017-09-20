function records() {
    // Elementos
    var botonAgregar = document.getElementById("agregar");
    var botonMostrar = document.getElementById("mostrar");
    var botonUp = document.getElementById("up")
    var resultado = document.getElementById("container-students");

    // Evento Click - Agregar
    var eventoAgregar = function(e) {
        e.preventDefault();
        var estudiante = agregarEstudiante();
        resultado.innerHTML = mostrar(estudiante);
    };

    var eventoMostrar = function(e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        resultado.innerHTML = mostrarLista(estudiantes);
    };
  
    // Manejadores de eventos
    botonAgregar.addEventListener("click", eventoAgregar);
    botonMostrar.addEventListener("click", eventoMostrar);



}
records();

var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Nombre de la estudiante:");
    var porcentajeTecnico = prompt("Puntos técnicos:");
    var porcentajeSocio = prompt("Puntos Socio-Emocionales:");
    var estudiante = {
        name: nombre,
        tech: porcentajeTecnico,
        social: porcentajeSocio
    };
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.name + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tech + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.social + "</p>";
    resultado += "<p><strong>Estado:</strong> Activo";

    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var list = "";
    for (var i in estudiantes) {
        list += mostrar(estudiantes[i]);
    }
    return list;
}




function check(porcentajeTecnico,porcentajeSocio) {
    return porcentajeSocio<=70 && porcentajeTecnico<=70;
}

function myFunction() {
//console.log(estudiantes.filter(check));
    document.getElementById("container-students").innerHTML = estudiantes.filter(check);
}