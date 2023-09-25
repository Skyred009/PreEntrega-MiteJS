// Array para almacenar los productos en el carrito
const cart = [];
let products = [];

// Función para obtener productos desde la API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Hubo un problema al obtener los productos.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        return [];
    }
}



// Función para agregar productos al carrito
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// Función para actualizar y mostrar el carrito
function renderCart() {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
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

// Llama a fetchProducts 
fetchProducts()
    .then((data) => {
        products = data; 
        renderProducts(); //
    })
    .catch((error) => {
        console.error('Error al obtener los productos:', error);
    });


// Función para renderizar los productos
function renderProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Limpiar el contenedor

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Agregar al Carrito</button>
        `;

        // Agregar un controlador de eventos para el botón "Agregar al Carrito"
        const addToCartButton = productDiv.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () => {
            addToCart(product);
        });

        productContainer.appendChild(productDiv);
    });
}


fetchProducts()
    .then((data) => {
        products = data; 
        renderProducts();
    })
    .catch((error) => {
        console.error('Error al obtener los productos:', error);
    });
