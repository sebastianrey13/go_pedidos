window.addEventListener('load', function () {

//----------------------------------- Obtener Fecha--------------------------------

function obtenerFechaActual() {
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1; // Los meses son indexados desde 0, así que sumamos 1
    let anio = hoy.getFullYear();

    // Asegurarnos de que el día y el mes tengan siempre dos dígitos (con ceros iniciales si es necesario)
    dia = (dia < 10) ? "0" + dia : dia;
    mes = (mes < 10) ? "0" + mes : mes;

    return anio + "-" + mes + "-" + dia;
}

const fechaNuevaCotizacion = document.getElementById('fechaNuevaCotizacion');
fechaNuevaCotizacion.value = obtenerFechaActual();

//------------------------------------ Terceros ----------------------------------

const imgBuscarTercero = document.querySelector("#imgBuscarTercero");
const paginaNuevaCotizacion = document.querySelector("#paginaNuevaCotizacion");
const añadirTerceros = document.querySelector("#añadirTerceros");

imgBuscarTercero.addEventListener("click", function(){
paginaNuevaCotizacion.classList.add("oculto");
añadirTerceros.classList.remove("oculto");

let terceros =
`
<div class="añadirTerceros">
    <header>
        <div class="encabezado">
            <img id="imgRegresar" src="/img/regresar_30.png" alt="volver atras">
            <h2 id="h2Terceros">Terceros</h2>
            <input class="oculto" id="inputTerceros" type="inputTerceros" placeholder="Ingrese el NIT o Nombre">
            <img id="filtrarTercero" src="/img/icons8-lupa-30.png" alt="buscarPor">
        </div>
    </header>

    <main class="contenedorCotizacines">
        <div class="cotizacion">
            <div class="seleccionTercero">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial1" class="pRazonSocial">UNIVERSIDAD EAFIT</p>
                <p class="pNit">900000000</p>
                <img id="imageCheck1" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
            <div class="seleccionTercero">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial2" class="pRazonSocial">FEDERICO GUTIERREZ</p>
                <p class="pNit">91500258</p>
                <img id="imageCheck2" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
            <div class="seleccionTercero">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial3" class="pRazonSocial">EPM</p>
                <p class="pNit">800528987</p>
                <img id="imageCheck3" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
            <div class="seleccionTercero">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial4" class="pRazonSocial">SURA</p>
                <p class="pNit">900423154</p>
                <img id="imageCheck4" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
        </div>
    </main>
    </div>
`;
añadirTerceros.innerHTML = terceros;

const imgRegresar = document.querySelector("#imgRegresar");

imgRegresar.addEventListener("click", function(){
    paginaNuevaCotizacion.classList.remove("oculto");
    añadirTerceros.classList.add("oculto");
})

// const tercero = document.querySelector("#tercero");

// Obtener todos los elementos con clase "imageCheck"
const imageCheckElements = document.querySelectorAll(".imageCheck");

// Agregar un evento de clic a cada elemento "imageCheck"
imageCheckElements.forEach((element, index) => {

    element.addEventListener('click', () => {

        paginaNuevaCotizacion.classList.remove("oculto");
        añadirTerceros.classList.add("oculto");

    // Obtener el valor del párrafo con clase "pRazonSocial" correspondiente
        const pRazonSocialElement = document.getElementById(`pRazonSocial${index + 1}`);
        const pRazonSocialValue = pRazonSocialElement.textContent;
        tercero.value = pRazonSocialValue;
    });
});

//////////////////////////////// Filtrar Terceros ////////////////////////////

const filtrarTercero = document.querySelector("#filtrarTercero");

filtrarTercero.addEventListener("click" , function(){

    const h2Terceros = document.querySelector("#h2Terceros");
    const inputTerceros = document.querySelector("#inputTerceros");
    h2Terceros.classList.add("oculto");
    inputTerceros.classList.remove("oculto");

    ////////////// filtramos //////////////////////////

    const elementos = document.querySelectorAll(".cotizacion div");

    function filtrarElementos() {
        const textoBusqueda = inputTerceros.value.toLowerCase();
    
        elementos.forEach(elemento => {
            const textoElemento = elemento.textContent.toLowerCase();
            if (textoElemento.includes(textoBusqueda)) {
                elemento.style.display = "grid"; // Mostrar el elemento si coincide con el texto de búsqueda
            } else {
                elemento.style.display = "none"; // Ocultar el elemento si no coincide con el texto de búsqueda
            }
        });
    }
    
    inputTerceros.addEventListener("input", filtrarElementos);


    



});

///////////////////////////////////////////////////////////////////////////////////




    
});

//--------------------------------------



  









})