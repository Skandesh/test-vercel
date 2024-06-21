let cart = [];

// Load cart from localStorage when the script is loaded
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart function
function addToCart(productName, productPrice) {
    loadCart();
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    saveCart();
    //alert(`${productName} added to cart`);
}

// Update cart display on cart.html
function updateCart() {
    loadCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    if (cartItemsContainer && totalPriceContainer) {
        cartItemsContainer.innerHTML = '';

        let totalPrice = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceContainer.innerText = totalPrice.toFixed(2);
    }
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    alert('Thank you for your purchase!');
    cart = [];
    saveCart();
    updateCart();
}

// Load the cart on script load
loadCart();
