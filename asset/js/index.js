const productos = [
    { tipo: "Alfombras", medida: "60x33cm", img: "asset/media/Productos/Alfombra/alfombraM1.webp", descripción: "Alfombra medialuna", },
    { tipo: "Alfombras", medida: "50x100cm", img: "asset/media/Productos/Alfombra/veteada-con-flecos1.webp", descripción: "Alfombra veteada con flecos", },
    { tipo: "Alfombras", medida: "50x85cm", img: "asset/media/Productos/Alfombra/veteada-con-flecos.webp", descripción: "Alfombra veteada con flecos", },
    { tipo: "Alfombras", medida: "60x60cm", img: "asset/media/Productos/Alfombra/alfom1.webp", descripción: "Alfombra tipo Handira cuadrada", },
    { tipo: "Alfombras", medida: "50cm", img: "asset/media/Productos/Alfombra/alfom2.webp", descripción: "Alfombra tipo Handira redonda", },
    { tipo: "Alfombras", medida: "70cm", img: "asset/media/Productos/Alfombra/alfom3.webp", descripción: "Alfombra tipo Handira redonda", },
    { tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfombra/alfom4.webp", descripción: "Alfombra tipo Handira ovalada", },
    { tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfombra/alfom5.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfombra/alfom7.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "60x120cm", img: "asset/media/Productos/Alfombra/alfom10.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfombra/alfom11.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfombra/alfom12.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/alfom13.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfombra/alfom14.webp", descripción: "Alfombra tipo Handira rectagular", },
    { tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfombra/alfom15.webp", descripción: "Alfombra tipo Handira corazón blanco", },
    { tipo: "Alfombras", medida: "60x120cm", img: "asset/media/Productos/Alfombra/alfom16.webp", descripción: "Alfombra tipo Handira rectangular", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/alfom17.webp", descripción: "Alfombra tipo Handira corazón", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/veteada.webp", descripción: "Alfombra veteada", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/veteada1.webp", descripción: "Alfombra veteada", },
    { tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/veteada2.webp", descripción: "Alfombra veteada", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa1.webp", descripción: "Camino de mesa blanco", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa2.webp", descripción: "Camino de mesa blanco y marrón", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa4.webp", descripción: "Camino de mesa gris", },
    { tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa5.webp", descripción: "Camino de mesa blanco con marrón", },
    { tipo: "Elementos de Limpieza", medida: "35x40cm", img: "asset/media/Productos/Elementos de limpieza/rejilla1.webp", descripción: "Rejilla gris", },
    { tipo: "Elementos de Limpieza", medida: "35x45cm", img: "asset/media/Productos/Elementos de limpieza/rejilla2.webp", descripción: "Rejilla pesada blanca", },
    { tipo: "Elementos de Limpieza", medida: "50x50cm", img: "asset/media/Productos/Elementos de limpieza/tpiso1.webp", descripción: "Trapo de piso gris", },
    { tipo: "Elementos de Limpieza", medida: "50x50cm", img: "asset/media/Productos/Elementos de limpieza/tpiso2.jpg", descripción: "Trapo de piso blanco", },
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
                    <p><strong>Medidas: ${producto.medida}</strong></p>
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

