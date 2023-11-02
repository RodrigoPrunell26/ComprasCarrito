document.addEventListener("DOMContentLoaded", function () {
    // Paso 1: Declarar variables y constantes necesarias
    const precioProducto = 50; // Precio unitario del producto
    const cantidadInput = document.getElementById("cantidad");
    const subtotalSpan = document.getElementById("subtotal");
    const agregarButton = document.getElementById("agregar");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");

    // Paso 2: Agregar eventos para interactuar con la página
    cantidadInput.addEventListener("input", calcularSubtotal);
    agregarButton.addEventListener("click", agregarAlCarrito);

    // Paso 3: Función para calcular el subtotal en tiempo real
    function calcularSubtotal() {
        // Completar esta función para calcular el subtotal
        const cantidad = parseInt(cantidadInput.value);
        const subtotal = precioProducto * cantidad;
        subtotalSpan.textContent = `$${subtotal}`;
    }

    // Paso 4: Función para agregar productos al carrito
    function agregarAlCarrito() {
        // Completar esta función para agregar productos al carrito
        const cantidad = parseInt(cantidadInput.value);

        if (cantidad > 0) {
            const producto = document.createElement("li");
            producto.textContent = `Producto 1 x${cantidad}`;
            listaCarrito.appendChild(producto);
            calcularTotalCarrito();
    }
}

    // Paso 5: Función para calcular el total del carrito
    function calcularTotalCarrito() {
        // Completar esta función para calcular el total del carrito
        let total = 0;
        const productosEnCarrito = listaCarrito.children;

        for (let i = 0; i < productosEnCarrito.length; i++) {
            
            total += precioProducto * cantidadInput.value;
        }

        totalSpan.innerHTML = `$${total}`;
    }
});
