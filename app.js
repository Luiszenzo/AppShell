// Datos de ejemplo (simulando datos que podrían venir de un API)
const productos = [
    {
        id: 1,
        nombre: "Cuaderno Universitario",
        precio: 4.99,
        categoria: "papeleria"
    },
    {
        id: 2,
        nombre: "Audífonos Bluetooth",
        precio: 29.99,
        categoria: "electronica"
    },
    {
        id: 3,
        nombre: "Barra de Granola",
        precio: 1.50,
        categoria: "snacks"
    }
];

// Función para mostrar los productos en el contenedor
function mostrarProductos() {
    const contenedor = document.getElementById('productos-container');
    
    // Limpiar el contenedor
    contenedor.innerHTML = '';
    
    // Agregar cada producto al contenedor
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.className = 'producto';
        productoElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <p>Categoría: ${producto.categoria}</p>
        `;
        contenedor.appendChild(productoElement);
    });
}

// Cargar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', mostrarProductos);