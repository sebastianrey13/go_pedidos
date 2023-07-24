window.addEventListener("load",function(){
   
    let productosArray = JSON.parse(sessionStorage.getItem("productosArray"));
    console.log(productosArray);


    // Numero random para las referencias

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 1000) + 1;
      }

// Función para crear una tabla HTML a partir de un objeto
function crearTabla(objeto, index) {
    const numeroAleatorio = generarNumeroAleatorio();
    let tablaHTML =
      `<table class="tablaProducto" id="tablaProducto">
          <thead>
              <tr>
                <th class="columna1">
                    <div class="thValor">
                        <p>Pedido ${index + 1}</p>
                        <img class="imgDesplegar" src="/img/icons8-adelante-20.png" alt="">
                    </div>
                </th>
                  <th class="columna2">
                      <div class="thValor">
                          <p class="celdaValor">Ref-${numeroAleatorio}</p>
                          <img class="imgPuntos" src="/img/icons8-puntos-25.png" alt="">
                          <div class="oculto menuOpciones">
                              <p id="menuOpcionesEditar">Generar PDF</p>
                              <p id="menuOpcionesEliminar">Opcion 2</p>
                              <p>Opcion 3</p>
                              <p>Opcion 4</p>
                          </div>
                      </div>
                  </th>
              </tr>
          </thead>
          <tbody class="oculto filasTablaCotizaciones">
          <!-- Aquí se generarán las filas dinámicamente -->
          </tbody>
      </table>`;

    // Crear un elemento div temporal para insertar el código HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = tablaHTML;

    // Obtener el tbody de la tabla
    const tbody = tempDiv.querySelector('tbody');

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

    // Iterar sobre las propiedades del objeto
    for (const atributo in objeto) {
      agregarFila(atributo, objeto[atributo]);
    }

    return tempDiv.innerHTML;
  }

  // Obtener el contenedor
  const contenedorTablas = document.getElementById('contenedorTablas');

  // Generar las tablas para cada objeto del array
  productosArray.forEach((producto, index) => {
    const tabla = crearTabla(producto, index);
    contenedorTablas.innerHTML += tabla;
  });

    /////////////////  OPCIONES TABLA   ////////////////

const imgPuntosList = document.querySelectorAll(".imgPuntos");
const menuOpcionesList = document.querySelectorAll(".menuOpciones");
const tablaProductoList = document.querySelectorAll(".tablaProducto");

for (let i = 0; i < imgPuntosList.length; i++) {
    imgPuntosList[i].addEventListener("click", function () {
        menuOpcionesList[i].classList.toggle("oculto");
    });
}

document.addEventListener("click", function (event) {
    const target = event.target;
    for (let i = 0; i < menuOpcionesList.length; i++) {
        if (!menuOpcionesList[i].contains(target) && target !== imgPuntosList[i]) {
            menuOpcionesList[i].classList.add("oculto");
        }
    }
});


//////////////////////// Minimar - Mostrar tabla ////////////////////////

const filasTablaCotizacionesList = document.querySelectorAll(".filasTablaCotizaciones");
const imgDesplegarList = document.querySelectorAll(".imgDesplegar");


imgDesplegarList.forEach((imgDesplegar, index) => {
    imgDesplegar.addEventListener("click", function() {
        // Alternar la clase "oculto" para el correspondiente elemento "filasTablaCotizaciones"
        filasTablaCotizacionesList[index].classList.toggle("oculto");

        // Para dar animacion a la imagen
        imgDesplegar.classList.toggle("rotar");
    });
});


//////////////////////////////////// OPCION EXPORTAR A PDF ////////////////////

// Función para exportar el contenido de la tabla seleccionada a un PDF
function exportarAPDF(indiceTabla) {
    const pdf = new jsPDF();
    const tablaFuente = tablaProductoList[indiceTabla];
    const tituloTablaFuente = tablaFuente.querySelector("th").innerText.trim();
    const filasTablaFuente = tablaFuente.querySelectorAll("tr");

    let yOffset = 10;
    pdf.text(20, yOffset, `Tabla: ${tituloTablaFuente}`);
    yOffset += 10;

    filasTablaFuente.forEach(fila => {
        const datosFila = fila.querySelectorAll("td");
        let xOffset = 20;
        datosFila.forEach(celda => {
            pdf.text(xOffset, yOffset, celda.innerText.trim());
            xOffset += 40;
        });
        yOffset += 10;
    });

    pdf.save(`tabla_${indiceTabla + 1}.pdf`);
}

// Asociar el evento de clic a cada opción "Editar" en el menú
const opcionesEditar = document.querySelectorAll("#menuOpcionesEditar");
opcionesEditar.forEach((opcion, indice) => {
    opcion.addEventListener("click", function () {
        exportarAPDF(indice);
    });
});

    
    //////////////////////////////////////////////////////////////

////////////////////////////////// MENU APP ////////////////////

const menuCotizaciones = document.querySelector("#menuCotizaciones");
const menuFooter = document.querySelector(".menuFooter");

menuCotizaciones.addEventListener("click", function(){
    menuFooter.classList.toggle("oculto");
})

document.addEventListener("click", function (event) {
    const target = event.target;

    if (!menuFooter.contains(target) && target !== menuCotizaciones) {
        menuFooter.classList.add("oculto");
    }
    
});

})

