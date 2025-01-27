const productos = [
    { tipo: "Alfombras", medida: "60x60cm", img: "asset/media/Productos/Alfomabra/alfom1.webp", descripción: "Alfombra tipo Handira cuadrada", },
    { tipo: "Alfombras", medida: "50cm", img: "asset/media/Productos/Alfomabra/alfom2.webp", descripción: "Alfombra tipo Handira redonda", },
    { tipo: "Alfombras", medida: "70cm", img: "asset/media/Productos/Alfomabra/alfom3.webp", descripción: "Alfombra tipo Handira redonda", },
    { tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfomabra/alfom4.webp", descripción: "Alfombra tipo Handira ovalada", },
    { tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfomabra/alfom5.webp", descripción: "Alfombra tipo Handira ovalada", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfomabra/alfom6.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfomabra/alfom7.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "60x60cm", img: "asset/media/Productos/Alfomabra/alfom9.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfomabra/alfom10.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "50x90cm", img: "asset/media/Productos/Alfomabra/alfom11.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfomabra/alfom12.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfomabra/alfom13.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfomabra/alfom14.webp", descripción: "Alfombra tipo Handira rectagular", },
    { tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfomabra/alfom15.webp", descripción: "Alfombra tipo Handira corazón blanco", },
    { tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfomabra/alfom16.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfomabra/alfom17.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa1.webp", descripción: "Camino de mesa blanco", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa2.webp", descripción: "Camino de mesa blanco y marrón", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa4.webp", descripción: "Camino de mesa gris", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa5.webp", descripción: "Camino de mesa blanco con marrón", },
    { tipo: "Elementos de Limpieza", medida: "35x40cm", img: "asset/media/Productos/Elementos de limpieza/rejilla1.webp", descripción: "Rejilla gris", },
    { tipo: "Elementos de Limpieza", medida: "35x40cm", img: "asset/media/Productos/Elementos de limpieza/rejilla2.webp", descripción: "Rejilla pesada blanca", },
    { tipo: "Elementos de Limpieza", medida: "50x50cm", img: "asset/media/Productos/Elementos de limpieza/tpiso1.webp", descripción: "Trapo de piso gris", },
    { tipo: "Elementos de Limpieza", medida: "50x50cm", img: "asset/media/Productos/Elementos de limpieza/tpiso2.webp", descripción: "Trapo de piso blanco", },
];

// Seleccionamos los botones de filtro y el contenedor de sub-productos
const botonesFiltro = document.querySelectorAll('.filtro');
const contenedorSubProductos = document.querySelector('.sub-productos');

// Imagen por defecto para los productos
const defaultImg = "asset/media/default.jpg";

// Función para generar las tarjetas de productos
const generarSubProductos = (productos) => {
    const subProductosHTML = productos.map(producto => `
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${producto.img || defaultImg}" alt="${producto.tipo}" loading="lazy">
                </div>
                <div class="card-back">
                    <img src="${producto.img || defaultImg}" alt="${producto.tipo}" loading="lazy">
                    <h2>${producto.descripción}</h2>
                    <p>Medidas: ${producto.medida}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Renderizamos las tarjetas en el contenedor
    contenedorSubProductos.innerHTML = subProductosHTML;
};

// Función para manejar los filtros
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.getAttribute('data-tipo');
        const productosFiltrados = (filtro === "Todos")
            ? productos
            : productos.filter(producto => producto.tipo === filtro);
        generarSubProductos(productosFiltrados);
    });
});

// Generar todos los productos al cargar la página
generarSubProductos(productos);

