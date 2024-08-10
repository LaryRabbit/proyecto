const listaProductos = { "productos" :[
    {
        "nombre": "Pastel de zanahoria",
        "descripcion": "Descubre la combinación perfecta de sabores y texturas: capas esponjosas de bizcocho de zanahoria con nueces, pasas y un toque de canela, todo cubierto con una suave crema de queso que te hará desear más con cada bocado.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1595080623303-c5ae68d73e92?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Tiramisú",
        "descripcion": "Sumérgete en las capas irresistibles de bizcocho esponjoso impregnado con café y licor, intercaladas con una cremosa mezcla de mascarpone y cacao.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Cheesecake de zarzamora",
        "descripcion": "Cremosa tarta de queso hecho a base de ricota, requesón, azúcar y el dulce toque de las zarzamoras. El preferido de los niños.",
        "esFavorito": true,
        "imagen": 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Chocolat au pain",
        "descripcion": "El pain au chocolat (pan de chocolate) o chocolatine (chocolatín) consiste en un rectángulo de masa hojaldrada, como la del croissant, relleno de delicioso chocolate amargo.",
        "esFavorito": true,
        "imagen": 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Galleta de avena",
        "descripcion": "Deliciosa galleta elaborada a base de harina y avena. Repleta de chunks de chocolate.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1589431775908-12b5d29ef976?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Tarta de fresas",
        "descripcion": "Hecha con una una cortesa de masa quebrada, rellena de ganache de chocolate blanco cubierto de fresas. Su deleitante sabor no tiene comparación.",
        "esFavorito": true,
        "imagen": 'https://images.unsplash.com/photo-1503485838016-53579610c389?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Churros de la abuela",
        "descripcion": "Crujientes por fuera suaves por dentro. Fritura alargada, hecha con una masa de harina similar a la de los buñuelos, cubierta de azucar y canela.",
        "esFavorito": true,
        "imagen": 'https://images.unsplash.com/photo-1505851498219-ee2449c18936?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Iced latte",
        "descripcion": "Un iced latte es una versión refrescante del café latte tradicional. Se prepara con espresso y leche fría, servido sobre hielo. La proporción de espresso a leche es de 1:3.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1621865098497-689d8591d93d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Café moca",
        "descripcion": "Bebida de café que combina espresso, leche vaporizada y chocolate. Mezclada con sirope de chocolate y cacao en polvo, lo que le da un sabor distintivo a chocolate.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1523942839745-7848c839b661?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Affogato",
        "descripcion": "Mezcla rica y cremosa, hecho a base de expreso y helado artesanal de pistache.",
        "esFavorito": true,
        "imagen": 'https://images.unsplash.com/photo-1520224220083-214daa28c5f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Cold brew",
        "descripcion": "Elaborado con granos cuidadosamente seleccionados y un proceso de extracción en frío que libera todo el sabor y la suavidad, este café es perfecto para los amantes del café que buscan una experiencia refrescante y estimulante.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1526746687473-593f256d8b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Té matcha",
        "descripcion": "xxMatcha es un tipo de té verde en polvo de origen japonés. Se obtiene de hojas de té verde molidas finamente, lo que le confiere un color verde intenso y un sabor característico.",
        "esFavorito": false,
        "imagen": 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "nombre": "Caffè corretto",
        "descripcion": "Refrescante bebida elaborada con un doble expreso del grano de la casa y un chorrito de brandy.",
        "esFavorito": true,
        "imagen": 'https://images.unsplash.com/photo-1678261739137-85881474209c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]}

const root = document.getElementById('contenedor__tarjetas');
const contenedorTarjetas = document.getElementById('contenedor__tarjetas');
//const buscador = document.getElementById('input-buscador');
//const btnBuscar = document.getElementById('boton__buscar');

const mostrarTarjetas = (productos, mostrarSoloFavoritos) => {
    
    let card = '';    

    productos.forEach(producto => {
        if(mostrarSoloFavoritos && producto.esFavorito || !mostrarSoloFavoritos){
            card = card + armarTarjetaProducto(producto);
        }
    });
    root.innerHTML= card;
    
};

const armarTarjetaProducto = (producto) => {

    const {nombre, descripcion, imagen} = producto;
        return `<div class="tarjeta">  
        <img src=${imagen} alt="">
        <div class="contenido__tarjeta">
          <h1>${nombre}</h1>
          <p>${descripcion}</p>
          <a href="#"  class="boton__tarjeta">Comprar</a>
        </div>
        </div>`;
};

const obtieneSiSeDebenVerSoloFavoritos = () => {
    let titulo = document.title;

    return titulo === "Favoritos Avellana" ? true : false;
};

/*btnBuscar.addEventListener('click', () =>{
  
    var filtro, tarjetasProductos, titulo, a, i, txtValue;
    
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
  })*/


mostrarTarjetas(listaProductos.productos, obtieneSiSeDebenVerSoloFavoritos());