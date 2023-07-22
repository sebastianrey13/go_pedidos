window.addEventListener('load', function () {

    // localStorage.clear();

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

    <main class="contenedor">
        <div class="cotizacion">
            <div class="seleccion">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial1" class="pRazonSocial">UNIVERSIDAD EAFIT</p>
                <p class="pNit">900000000</p>
                <img id="imageCheck1" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
            <div class="seleccion">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial2" class="pRazonSocial">FEDERICO GUTIERREZ</p>
                <p class="pNit">91500258</p>
                <img id="imageCheck2" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
            <div class="seleccion">
                <img class="imageAvatar" src="/img/icons8-usuario-de-género-neutro-48.png" alt="">
                <p id="pRazonSocial3" class="pRazonSocial">EPM</p>
                <p class="pNit">800528987</p>
                <img id="imageCheck3" class="imageCheck" src="/img/icons8-casilla-de-verificación-marcada-32.png" alt="">
            </div>
            <div class="seleccion">
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
    inputTerceros.focus();

    ////////////////////////////// filtramos //////////////////////////////

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
   
});


//////////////////////////////////////  PRODUCTOSS     //////////////////////////////////////

const añadirProducto = document.querySelector("#añadirProducto");
const añadirProductos = document.querySelector("#añadirProductos");

añadirProducto.addEventListener("click",function(){
    paginaNuevaCotizacion.classList.add("oculto");
    añadirProductos.classList.remove("oculto");

    //////////////////////////////////////////////

    let productosEncabezado = 
      `
      <div id="añadirProductos">
    <header>
        <div class="encabezado">
            <img id="imgRegresarProductos" src="/img/regresar_30.png" alt="volver atras">
            <h2 id="h2Productos">Productos</h2>
            <input class="oculto" id="inputProductos" type="inputProductos" placeholder="Ingrese el Nombre o Referencia">
            <img id="filtrarProducto" src="/img/icons8-lupa-30.png" alt="buscarPor">
        </div>
    </header>

    <main id="contenerdorProductos" class="contenedor">

    </main>`;

    añadirProductos.innerHTML = productosEncabezado;

    const arrayProductos = [
        {
            "id": 1,
            "nombre": "CP-87 TENNIS",
            "referencia" : "CP-87",
            "imgref": "icons8-zapatos-50.png",
            "imagenes":[
                "tenis_azules.png",
                "tenis_grises.png",
                "tenis_naranjas.png",
                "tenis_negros.png",
            ],
            "color":["Azul","Gris","Naranja","Negro"],
            "valorUnidad": 125000,
            "valorDescuento": 0.25,
        },
        {
            "id": 2,
            "nombre": "CP-88 CAMISA",
            "referencia" : "CP-88",
            "imgref": "icons8-camisa-50.png",
            "imagenes":[
                "tenis_azules.png",
                "tenis_grises.png",
                "tenis_naranjas.png",
                "tenis_negros.png",
            ],
            "color":["Azul","Gris","Naranja","Negro"],
            "valorUnidad": 85000,
            "valorDescuento": 0.3,
        },
        {
            "id": 3,
            "nombre": "CP-89 PANTALONES",
            "referencia" : "CP-89",
            "imgref": "icons8-pantalones-50.png",
            "imagenes":[
                "tenis_azules.png",
                "tenis_grises.png",
                "tenis_naranjas.png",
                "tenis_negros.png",
                "tenis_amarillos.png",
                "tenis_blancos.png",
            ],
            "color":["Azul","Gris","Naranja","Negro","amarillos","blancos"],
            "valorUnidad": 95000,
            "valorDescuento": 0.2,
        },
        {
            "id": 4,
            "nombre": "CP-90 SHORTS",
            "referencia" : "CP-90",
            "imgref": "icons8-pantalones-cortos-50.png",
            "imagenes":[
                "tenis_azules.png",
                "tenis_grises.png",
                "tenis_naranjas.png",
                "tenis_negros.png",
            ],
            "color":["Azul","Gris","Naranja","Negro"],
            "valorUnidad": 45000,
            "valorDescuento": 0,
        },
    ]

    arrayProductos.forEach((producto) => {
   
    let productos =
    `<div class="seleccion">
        <img class="imageAvatar" src="/img/${producto.imgref}" alt="">
        <p id="nombreProducto" class="nombreProducto">${producto.nombre}</p>
        <p class="pNit">${producto.referencia}</p>
        <img id="imageCarro${producto.id}" class="imageCar" src="/img/icons8-agregar-a-carrito-de-compras-32.png" alt="">
    </div>`;
    
    const contenerdorProductos = document.querySelector("#contenerdorProductos");
    contenerdorProductos.innerHTML += productos;

            

    });

    const imgRegresarProductos = document.querySelector("#imgRegresarProductos");

    imgRegresarProductos.addEventListener("click", function(){
        paginaNuevaCotizacion.classList.remove("oculto");
        añadirProductos.classList.add("oculto");
    })

    //////////////////////////////// Filtrar productos ////////////////////////////

    const filtrarProducto = document.querySelector("#filtrarProducto");

    filtrarProducto.addEventListener("click" , function(){

    const h2Productos = document.querySelector("#h2Productos");
    const inputProductos = document.querySelector("#inputProductos");
    h2Productos.classList.add("oculto");
    inputProductos.classList.remove("oculto");
    inputProductos.focus();

    ////////////////////////////// filtramos Productos //////////////////////////////

    const elementos = document.querySelectorAll("#contenerdorProductos div");

    function filtrarElementos() {
        const textoBusqueda = inputProductos.value.toLowerCase();
    
        elementos.forEach(elemento => {
            const textoElemento = elemento.textContent.toLowerCase();
            if (textoElemento.includes(textoBusqueda)) {
                elemento.style.display = "grid"; // Mostrar el elemento si coincide con el texto de búsqueda
            } else {
                elemento.style.display = "none"; // Ocultar el elemento si no coincide con el texto de búsqueda
            }
        });
    }
    
    inputProductos.addEventListener("input", filtrarElementos);
    });

    /////////////////////   Detalle Productos      //////////////////////////

    const contenerdorProductos = document.querySelector("#contenerdorProductos");

    contenerdorProductos.addEventListener("click", mostrarOpcion);

  function mostrarOpcion(event) {
  const opcionSeleccionada = event.target.id;
  const idBuscado = parseInt(opcionSeleccionada.replace("imageCarro", ""));

  const productoSeleccionado = arrayProductos.find(producto => producto.id === idBuscado);

//   console.log(productoSeleccionado);

  if (productoSeleccionado) {
    let añadirDetalleProductos = `
    <div id="añadirProductos">
    <header>
        <div class="encabezado encabezadoNombreProductos">
            <img id="imgRegresarAProductos" src="/img/regresar_30.png" alt="volver atras">
            <h2 id="h2Productos" class="h2NombreProducto">${productoSeleccionado.nombre}</h2>
        </div>
    </header>

    <main class="contenedor">
    <div class="productos">
        <div id="contenedorPrincipalslider">
            <div id="imagesSlider" class="slider">
                <img id="image0" src="/img/${productoSeleccionado.imagenes[0]}" alt="tenis_azules"> 
                ${productoSeleccionado.imagenes.slice(1).map((imagen, x) => `<img id="image${x+1} "class="oculto" src="/img/${imagen}" alt="${imagen.slice(0, -4)}">`).join('\n')}
            </div>
            <img class="adelante" src="/img/icons8-más-de-30.png" alt="">
            <img class="atras" src="/img/icons8-menos-de-30.png" alt="">
        </div>

        <div class="sliderBoton">
            <ul class="menuLi" type="none">
                ${productoSeleccionado.imagenes.map((imagen, index) => `<li id="icono${index+1}" class="boton ${index === 0 ? 'botonRelleno' : ''}"></li>`).join('\n')}
            </ul>
        </div>

        <div id="divColorProducto">
            <label class="colorProducto" for="colorProducto">Color</label>
            <select name="colorProducto" id="colorProducto">
                ${productoSeleccionado.color.map((color,x) => `<option id="productoColor${x+1}" value="${x+1}">${color}</option>`).join('\n')}
            </select>
        </div>

        <div>
            <p class="precioConDescuento">$<span></span></p>
            <div class="precios">
                <p class="precioNeto">$<span>${productoSeleccionado.valorUnidad}</span></p>
                <p class="descuento"><span class="valorDescuento">${productoSeleccionado.valorDescuento * 100}</span><span>%</span></p>
            </div>
        </div>

        <div class="cantidad">
            <img id="botonMenos" class="mas_menos" src="/img/icons8-menos-30.png" alt="menos">
            <input id="inputNumero" class="input_number" type="precio" value="1">
            <img id="botonMas" class="mas_menos" src="/img/icons8-más-30.png" alt="mas">
        </div>

        <div class="observacionesProducto">
            <p>Observaciones del producto</p>
            <textarea name="" id="textareaObservacionesProducto" cols="30" rows="5"></textarea>
        </div>

        <div class="buttonAñadir">
            <p id="funcionAñadir" class="button">Añadir producto</p>
        </div>
    </div>
    </main>
    </div>`;

    const detalleProductos = document.querySelector("#detalleProductos");
    detalleProductos.innerHTML = añadirDetalleProductos;

    paginaNuevaCotizacion.classList.add("oculto");
    añadirProductos.classList.add("oculto");
    detalleProductos.classList.remove("oculto");


    ////////// Regresar menu anterior/////////////////////

    const imgRegresarAProductos = document.querySelector("#imgRegresarAProductos");
    imgRegresarAProductos.addEventListener("click", function(){
        añadirProductos.classList.remove("oculto");
        detalleProductos.classList.add("oculto");
    })
  }

//////////////////////////// Carrusel de Imagenes  ////////////////////////////////////////////

const atras = document.querySelector(".atras");
const adelante = document.querySelector(".adelante");
const imgElement = document.querySelector("#imagesSlider")
const liEement = document.querySelector(".sliderBoton")

const imagenesCarrusel = imgElement.querySelectorAll(".slider img"); // Selecciona todas las imágenes dentro del slider
const liRellenos = liEement.querySelectorAll(".menuLi li");

let currentIndex = 0;

adelante.addEventListener("click", ()=>{

    // Oculta la imagen y relleno actual
    imagenesCarrusel[currentIndex].classList.add('oculto');
    liRellenos[currentIndex].classList.remove('botonRelleno');

    // Incrementa el índice para mostrar la siguiente imagen y relleno
    currentIndex++;

    // Si llega al final, vuelve al principio
    if (currentIndex >= imagenesCarrusel.length) {
        currentIndex = 0;
    }

    // Muestra la siguiente imagen
    imagenesCarrusel[currentIndex].classList.remove('oculto');
    liRellenos[currentIndex].classList.add('botonRelleno');

    // Actualiza el valor seleccionado en el select de colores
    document.querySelector("#colorProducto").selectedIndex = currentIndex; 


});

atras.addEventListener('click', () => {

    imagenesCarrusel[currentIndex].classList.add('oculto');
    liRellenos[currentIndex].classList.remove('botonRelleno');

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imagenesCarrusel.length - 1;
    }

    imagenesCarrusel[currentIndex].classList.remove('oculto');
    liRellenos[currentIndex].classList.add('botonRelleno');

    document.querySelector("#colorProducto").selectedIndex = currentIndex; 

});


////////////////////////// Opciones Manualmente ///////////////////////////////////////

// Agrega un evento 'change' al select para capturar los cambios manuales
document.querySelector("#colorProducto").addEventListener("change", (event) => {
    const newIndex = event.target.value - 1; // Restamos 1 para obtener el índice correcto
    if (newIndex !== currentIndex) {
        // Oculta la imagen y el liRelleno actual
        imagenesCarrusel[currentIndex].classList.add('oculto');
        liRellenos[currentIndex].classList.remove('botonRelleno');

        // Actualiza el índice actual
        currentIndex = newIndex;

        // Muestra la nueva imagen y el nuevo liRelleno
        imagenesCarrusel[currentIndex].classList.remove('oculto');
        liRellenos[currentIndex].classList.add('botonRelleno');
    }
});


//////////////////Cambio de cantidad de articulos ingresado por el usuario ////////////////////

const botonMenos = document.querySelector("#botonMenos");
const botonMas = document.querySelector("#botonMas");
const userInput = document.querySelector("#inputNumero");

let userInputNumber = 1;

botonMas.addEventListener("click", ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
    calcularPrecio();
});

botonMenos.addEventListener("click", ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
    calcularPrecio();
});

userInput.addEventListener("input", () => {
    userInputNumber = parseInt(userInput.value, 10);
});

//////////////////////////   Valores /////////////////////////////////


const precioConDescuento = document.querySelector(".precioConDescuento span");
const precioNeto = parseFloat(document.querySelector(".precioNeto span").textContent);
const descuento = parseFloat(document.querySelector(".valorDescuento").textContent);

const porcetajeDescuento = descuento/100;


function calcularPrecio(){

    let precioSinDescuento  = precioNeto;
    let precioTotal = precioSinDescuento - precioSinDescuento*porcetajeDescuento;
    
    precioSinDescuento = precioNeto*userInputNumber;
    precioTotal = precioTotal*userInputNumber;

    precioConDescuento.innerHTML =  precioTotal;

    const valorNeto = document.querySelector(".precioNeto span");
    valorNeto.textContent = precioSinDescuento;
}

calcularPrecio()

//////////////////////// Guardar Producto ////////////////////////////////////

const funcionAñadir = document.querySelector("#funcionAñadir");


let productoAñadido = {};

funcionAñadir.addEventListener("click", function(){

    // Obtener el tbody de la tabla
    const tablaProducto = document.querySelector("#tablaProducto");
    const tbody = document.querySelector("#tablaProducto tbody");
    tablaProducto.classList.remove("oculto");
    tbody.innerHTML ="";
    
    // localStorage.clear();

    const seleccionColor = document.querySelector("#colorProducto").value;
    const valorNeto = document.querySelector(".precioNeto span").textContent;
    const observaciones = document.querySelector("#textareaObservacionesProducto").value;

    const tipoDePedido = document.querySelector("#tipoDePedido").value;
    const pObservaciones = document.querySelector(".pObservaciones");

    productoAñadido = {
        "nombre" : document.querySelector(".h2NombreProducto").textContent,
        "valor unitario" : precioNeto,
        "cantidad" : userInputNumber,
        "descuento" : descuento+"%",
        "Tipo de pedido" : tipoDePedido,
        "Totales" : parseInt(valorNeto),
        "Color" : productoSeleccionado.color[seleccionColor - 1]
    }


// Función para agregar una fila a la tabla
function agregarFila(atributo, valor) {
    const fila = `
        <tr>
            <td>${atributo}</td>
            <td>${valor}</td>
        </tr>
    `;
    tbody.innerHTML += fila;
}

// Iterar sobre las propiedades del objeto productoAñadido
for (const atributo in productoAñadido) {
    agregarFila(atributo, productoAñadido[atributo]);
}

pObservaciones.innerHTML = observaciones;




    
paginaNuevaCotizacion.classList.remove("oculto");
añadirProductos.classList.add("oculto");
detalleProductos.classList.add("oculto");

});


////////////////////   fin detalle producos /////////////////////////
}



////////////////////// fin menu productos//////////////////////
})




  
})