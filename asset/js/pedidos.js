const baseDeDatos = [
{ id: 1, tipo: "Alfombras", medida: "50x100cm", img: "asset/media/Productos/Alfombra/veteada-con-flecos1.webp", descripción: "Alfombra veteada con flecos", },
{ id: 2, tipo: "Alfombras", medida: "50x85cm", img: "asset/media/Productos/Alfombra/veteada-con-flecos.webp", descripción: "Alfombra veteada con flecos", },
{ id: 3, tipo: "Alfombras", medida: "60x60cm", img: "asset/media/Productos/Alfombra/alfom1.webp", descripción: "Alfombra tipo Handira cuadrada", },
{ id: 4, tipo: "Alfombras", medida: "50cm", img: "asset/media/Productos/Alfombra/alfom2.webp", descripción: "Alfombra tipo Handira redonda", },
{ id: 5, tipo: "Alfombras", medida: "70cm", img: "asset/media/Productos/Alfombra/alfom3.webp", descripción: "Alfombra tipo Handira redonda", },
{ id: 6, tipo: "Alfombras", medida: "60x40cm", img: "asset/media/Productos/Alfombra/alfom4.webp", descripción: "Alfombra tipo Handira ovalada", },
{ id: 7, tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfombra/alfom5.webp", descripción: "Alfombra tipo Handira rectangular", },
{ id: 8, tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfombra/alfom7.webp", descripción: "Alfombra tipo Handira corazón", },
{ id: 9, tipo: "Alfombras", medida: "60x120cm", img: "asset/media/Productos/Alfombra/alfom10.webp", descripción: "Alfombra tipo Handira rectangular", },
{ id: 10, tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfombra/alfom11.webp", descripción: "Alfombra tipo Handira corazón", },
{ id: 11, tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfombra/alfom12.webp", descripción: "Alfombra tipo Handira rectangular", },
{ id: 12, tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/alfom13.webp", descripción: "Alfombra tipo Handira corazón", },
{ id: 13, tipo: "Alfombras", medida: "60x80cm", img: "asset/media/Productos/Alfombra/alfom14.webp", descripción: "Alfombra tipo Handira rectagular", },
{ id: 14, tipo: "Alfombras", medida: "70x90cm", img: "asset/media/Productos/Alfombra/alfom15.webp", descripción: "Alfombra tipo Handira corazón blanco", },
{ id: 15, tipo: "Alfombras", medida: "60x120cm", img: "asset/media/Productos/Alfombra/alfom16.webp", descripción: "Alfombra tipo Handira rectangular", },
{ id: 16, tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/alfom17.webp", descripción: "Alfombra tipo Handira corazón", },
{ id: 17, tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/veteada.webp", descripción: "Alfombra veteada", },
{ id: 18, tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/veteada1.webp", descripción: "Alfombra veteada", },
{ id: 19, tipo: "Alfombras", medida: "50x50cm", img: "asset/media/Productos/Alfombra/veteada2.webp", descripción: "Alfombra veteada", },
{ id: 20, tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa1.webp", descripción: "Camino de mesa blanco", },
{ id: 21, tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa2.webp", descripción: "Camino de mesa blanco y marrón", },
{ id: 22, tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa4.webp", descripción: "Camino de mesa gris", },
{ id: 23, tipo: "Caminos de Mesa", medida: "35x160cm", img: "asset/media/Productos/Camino de mesa/cmesa5.webp", descripción: "Camino de mesa blanco con marrón", },
{ id: 24, tipo: "Elementos de Limpieza", medida: "35x40cm", img: "asset/media/Productos/Elementos de limpieza/rejilla1.webp", descripción: "Rejilla gris", },
{ id: 25, tipo: "Elementos de Limpieza", medida: "35x45cm", img: "asset/media/Productos/Elementos de limpieza/rejilla2.webp", descripción: "Rejilla pesada blanca", },
{ id: 26, tipo: "Elementos de Limpieza", medida: "50x50cm", img: "asset/media/Productos/Elementos de limpieza/tpiso1.webp", descripción: "Trapo de piso gris", },
{ id: 27, tipo: "Elementos de Limpieza", medida: "50x50cm", img: "asset/media/Productos/Elementos de limpieza/tpiso2.jpg", descripción: "Trapo de piso blanco", },
{ id: 28, tipo: "Alfombras", medida: "50x100cm", img: "asset/media/Productos/Alfombra/alfombraM1.webp", descripción: "Alfombra medialuna", },
];
let carrito = [];

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonPedido = document.querySelector('#boton-pedido');
const DOMtotalCantidad = document.querySelector('#total-cantidad');
// Selecciona todos los botones de filtro
const filtros = document.querySelectorAll('.filtro');

// Añadir un evento de clic a cada botón de filtro
filtros.forEach(filtro => {
    filtro.addEventListener('click', (e) => {
        const tipoSeleccionado = e.target.dataset.tipo;  // Obtén el tipo del botón seleccionado
        renderizarProductos(tipoSeleccionado);  // Llama a la función de renderización pasándole el tipo
    });
});

function renderizarProductos(filtroTipo = 'Todos') {
    // Limpiar el contenido actual de los productos
    DOMitems.innerHTML = '';

    // Filtrar los productos según el tipo seleccionado
    const productosFiltrados = filtroTipo === 'Todos'
        ? baseDeDatos
        : baseDeDatos.filter(producto => producto.tipo === filtroTipo);

    // Renderizar los productos filtrados
    productosFiltrados.forEach((tipo) => {
        const miNodo = document.createElement('div');
        miNodo.classList.add('div');
        miNodo.innerHTML = `
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${tipo.img}" loading="lazy">
                </div>
                <div class="card-back">
                    <img src="${tipo.img}" loading="lazy">
                    <h2>${tipo.descripción}</h2>
                    <p><strong>Medidas: ${tipo.medida}</strong></p>
                    <button class="btn btn-primary agregar-carrito" data-id="${tipo.id}">
                        Agregar (<span class="btnspan" id="contador-${tipo.id}">${getCantidadEnCarrito(tipo.id)}</span>)
                    </button>
                </div>
            </div>
        </div>
        `;
        DOMitems.appendChild(miNodo);
    });

    // Agregar eventos a los botones de agregar al carrito
    document.querySelectorAll('.agregar-carrito').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = baseDeDatos.find(p => p.id == e.target.dataset.id);
            const existe = carrito.find(p => p.id === producto.id);
            if (existe) {
                existe.cantidad += 1;
            } else {
                carrito.push({ ...producto, cantidad: 1 });
            }
            actualizarCarrito();
            const contador = document.getElementById(`contador-${producto.id}`);
            if (contador) {
                contador.textContent = carrito.find(p => p.id === producto.id)?.cantidad || 0;
            }
        });
    });
}

// Función para obtener la cantidad de un producto en el carrito
function getCantidadEnCarrito(id) {
    const productoEnCarrito = carrito.find(p => p.id === id);
    return productoEnCarrito ? productoEnCarrito.cantidad : 0;
}

// Función para actualizar el carrito (esto ya lo tienes)
function actualizarCarrito() {
    DOMcarrito.innerHTML = '';
    let totalCantidad = 0;

    carrito.forEach((producto, index) => {
        totalCantidad += producto.cantidad;
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.innerHTML = `
            ${producto.descripción} (x${producto.cantidad})
            <button class="btn btn-danger btn-sm eliminar" data-id="${producto.id}" data-index="${index}">X</button>
        `;
        DOMcarrito.appendChild(item);
    });

    // Actualiza el total de productos en el carrito
    DOMtotalCantidad.textContent = totalCantidad;

    // Actualiza los contadores de cada producto en las tarjetas
    actualizarContadores();

    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const index = parseInt(e.target.dataset.index);

            if (carrito[index].cantidad > 1) {
                carrito[index].cantidad -= 1;
            } else {
                carrito.splice(index, 1);
            }
            actualizarCarrito();
        });
    });
}

// Función para actualizar los contadores en las tarjetas (lo que ya tenías, solo que más ajustado)
function actualizarContadores() {
    baseDeDatos.forEach(producto => {
        const contador = document.getElementById(`contador-${producto.id}`);
        if (contador) {
            const itemCarrito = carrito.find(p => p.id === producto.id);
            contador.textContent = itemCarrito ? itemCarrito.cantidad : 0;
        }
    });
}


function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function enviarPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "Hola, quiero pedir:\n";
    carrito.forEach(item => {
        mensaje += `- ${item.descripción} -${item.medida} (x${item.cantidad})\n`;
    });

    const url = `https://wa.me/3458430884?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMbotonPedido.addEventListener('click', enviarPedido);

renderizarProductos();
