window.addEventListener("load", function () {
  const productosArrayStr = sessionStorage.getItem('productosArray');

  // Comprobar si productosArrayStr es una cadena no vacía
  if (productosArrayStr && productosArrayStr.length > 0) {
    try {
      // Intentar convertir la cadena a un array
      let productosArray = JSON.parse(productosArrayStr);

      // Comprobar si productosArray es realmente un array
      if (Array.isArray(productosArray)) {
        // El array productosArray existe en el sessionStorage y puedes trabajar con él aquí

        productosArray = JSON.parse(sessionStorage.getItem("productosArray"));

        // Función para crear una tabla HTML a partir de un objeto
        function crearTabla(objeto, index) {
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
                              <p class="celdaValor">Ref-${index + 100}</p>
                              <img class="imgPuntos" src="/img/icons8-puntos-25.png" alt="">
                              <div class="oculto menuOpciones">
                                  <p>Opcion 1</p>
                                  <p>Opcion 2</p>
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
          imgDesplegar.addEventListener("click", function () {
            // Alternar la clase "oculto" para el correspondiente elemento "filasTablaCotizaciones"
            filasTablaCotizacionesList[index].classList.toggle("oculto");

            // Para dar animacion a la imagen
            imgDesplegar.classList.toggle("rotar");
          });
        });


      } else {
        console.log('El valor almacenado en la clave "productosArray" no es un array.');
      }
    } catch (error) {
      console.log('Error al intentar convertir la cadena a un array:', error);
    }
  } else {
    console.log('El array productosArray no está almacenado en el sessionStorage.');
  }

  ////////////////////////////////// MENU APP ////////////////////

  const menuCotizaciones = document.querySelector("#menuCotizaciones");
  const menuFooter = document.querySelector(".menuFooter");

  menuCotizaciones.addEventListener("click", function () {
    menuFooter.classList.toggle("oculto");
  })

  document.addEventListener("click", function (event) {
    const target = event.target;

    if (!menuFooter.contains(target) && target !== menuCotizaciones) {
      menuFooter.classList.add("oculto");
    }

  });

})

