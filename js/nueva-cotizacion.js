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
    //   const imagenes = producto.imagenes.join(', ');
    //   const colores = producto.color.join(', ');
    //   const valorUnidad = producto.valorUnidad.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    //   const valorDescuento = (producto.valorDescuento).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 1 });
    
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

    const elementos = document.querySelectorAll(".cotizacion div");

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

  console.log(productoSeleccionado);

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
        <div class="slider">
            <img src="/img/${productoSeleccionado.imagenes[0]}" alt="tenis_azules"> 
            ${productoSeleccionado.imagenes.slice(1).map(imagen => `<img class="oculto" src="/img/${imagen}" alt="${imagen.slice(0, -4)}">`).join('\n')}
            <img class="adelante" src="/img/icons8-más-de-30.png" alt="">
            <img class="atras" src="/img/icons8-menos-de-30.png" alt="">
        </div>

        <div class="sliderBoton">
            <ul class="menu" type="none">
                ${productoSeleccionado.imagenes.map((imagen, index) => `<li class="boton ${index === 0 ? 'botonRelleno' : ''}"></li>`).join('\n')}
            </ul>
        </div>

        <div>
            <label class="colorProducto" for="colorProducto">Color</label>
            <select name="colorProducto" id="colorProducto">
                ${productoSeleccionado.color.map(color => `<option value="">${color}</option>`).join('\n')}
            </select>
        </div>

        <div>
            <p class="precioConDescuento">$<span>${productoSeleccionado.valorUnidad - productoSeleccionado.valorUnidad * productoSeleccionado.valorDescuento}</span></p>
            <div class="precios">
                <p class="precioNeto">$<span>${productoSeleccionado.valorUnidad}</span></p>
                <p class="descuento">${productoSeleccionado.valorDescuento * 100}<span>%</span></p>
            </div>
        </div>

        <div class="cantidad">
            <img class="mas_menos" src="/img/icons8-menos-30.png" alt="menos">
            <input class="input__number" type="precio" value="0">
            <img class="mas_menos" src="/img/icons8-más-30.png" alt="mas">
        </div>

        <div class="buttonAñadir">
            <p class="button">Añadir producto</p>
        </div>
    </div>
    </main>
    </div>`;

    const detalleProductos = document.querySelector("#detalleProductos");
    detalleProductos.innerHTML = añadirDetalleProductos;


    paginaNuevaCotizacion.classList.add("oculto");
    añadirProductos.classList.add("oculto");
    detalleProductos.classList.remove("oculto");


    const imgRegresarAProductos = document.querySelector("#imgRegresarAProductos");

    imgRegresarAProductos.addEventListener("click", function(){
        añadirProductos.classList.remove("oculto");
        detalleProductos.classList.add("oculto");
    })



  }
}
    
   ////////////////////////////////////////////////////////////////////////

})

  
})