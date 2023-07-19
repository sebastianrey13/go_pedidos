window.addEventListener('load', function () {

//---------------- Obtener Fecha----------------------

function obtenerFechaActual() {
    var hoy = new Date();
    var dia = hoy.getDate();
    var mes = hoy.getMonth() + 1; // Los meses son indexados desde 0, así que sumamos 1
    var anio = hoy.getFullYear();

    // Asegurarnos de que el día y el mes tengan siempre dos dígitos (con ceros iniciales si es necesario)
    dia = (dia < 10) ? "0" + dia : dia;
    mes = (mes < 10) ? "0" + mes : mes;

    return anio + "-" + mes + "-" + dia;
}

const fechaNuevaCotizacion = document.getElementById('fechaNuevaCotizacion');
fechaNuevaCotizacion.value = obtenerFechaActual();



















})