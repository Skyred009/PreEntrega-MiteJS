// Array para almacenar los productos en el carrito
const cart = [];

// Obtener elementos del DOM relacionados con el carrito y el total
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

// Función para agregar productos al carrito
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// Función para actualizar y mostrar el carrito
function renderCart() {
    cartList.innerHTML = ""; // Limpiar la lista
    let total = 0;

    cart.forEach((product) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(cartItem);
        total += product.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Obtener todos los botones "Agregar al Carrito"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Agregar un controlador de eventos a cada botón
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productId = parseInt(button.parentElement.querySelector("h2").textContent.match(/\d+/)); // Extraer el número de producto del título
        const product = products.find((p) => p.id === productId);

        if (product) {
            addToCart(product); // Agregar al carrito
        }
    });
});
