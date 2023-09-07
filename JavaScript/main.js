// Array para almacenar los productos en el carrito
const cart = [];

const products = [
  {
      id: 1,
      name: "Producto 1",
      price: 19.99,

  },
  {
      id: 2,
      name: "Producto 2",
      price: 24.99,
    
  },
  {
    id: 3,
    name: "Producto 3",
    price: 24.99,
  
  },
  {
    id: 4,
    name: "Producto 4",
    price: 24.99,
  },
  {
    id: 5,
    name: "Producto 5",
    price: 24.99,
   },
   {
    id: 6,
    name: "Producto 6",
    price: 24.99,
   },

  
];


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
    cartList.innerHTML = ""; 
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
            addToCart(product); 
        }
    });
});
