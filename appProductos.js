const buscador = document.getElementById('input-buscador');
const btnBuscar = document.getElementById('boton__buscar');
const aniadirAlCarrito = document.getElementsByClassName('boton__tarjeta');
const cantidadProductos = document.getElementById("texto-carrito");

let productosAniadidos = 0;

document.addEventListener('DOMContentLoaded', function() {


    btnBuscar.addEventListener('click', () =>{
  
        var filtro, tarjetasProductos, titulo, i;
        
        filtro = buscador.value.toUpperCase();
        tarjetasProductos = document.getElementsByClassName("tarjeta");
        titulo = tarjetasProductos[0].getElementsByTagName("H1");
    
        for (i = 0; i < tarjetasProductos.length; i++) {
            titulo = tarjetasProductos[i].getElementsByTagName("H1");
            txtTitulo = titulo[0].innerHTML;
            console.log(txtTitulo.toUpperCase());
            if (txtTitulo.toUpperCase().indexOf(filtro) > -1) {
                tarjetasProductos[i].style.display = "";
            } else {
                tarjetasProductos[i].style.display = "none";
            }
        }
    }); 

    contenedorTarjetas.addEventListener('click', (event) => {
        if (event.target.matches('.boton__tarjeta')) {
            productosAniadidos += 1;
            cantidadProductos.innerText = "(" + productosAniadidos + ") productos";
            alert('Producto añadido al carrito. Total de productos: ' + productosAniadidos);
            event.preventDefault();
        }
    });
});