
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

let counts = 0;
let price;
function addToCart(productName, productPrice) {
    counts += 1;
    loadCart();
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    saveCart();

    nav1El.textContent = counts+" items added " ;
    nav2El.textContent = "Add items RS: "+existingProduct.quantity * existingProduct.price;
    console.log(existingProduct.quantity * existingProduct.price);
    //alert(`${productName} added to cart`);
};

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
            cartItem.classList.add = "cart_items";
            cartItem.style.padding = "12px";
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


//addEventListener


//////
let allEl = document.getElementById("all");
let vegSoupsEl = document.getElementById("vegSoups");
let startersEl = document.getElementById("starters");
let pizzaEl = document.getElementById("pizza");
let fryRiceEl = document.getElementById("fryRice");
let noodlesEl = document.getElementById("noodles");
let burgerEl = document.getElementById("burger");
let snacksEl = document.getElementById("snacks");

let vegSoupsBtnEl = document.getElementById("vegSoupsBtn");
let startersBtnEl = document.getElementById("startersBtn");
let pizzaBtnEl = document.getElementById("pizzaBtn");
let fryRiceBtnEl = document.getElementById("fryRiceBtn");
let noodlesBtnEl = document.getElementById("noodlesBtn");
let burgersBtnEl = document.getElementById("burgersBtn");
let snacksBtnEl = document.getElementById("snacksBtn");
let backBtnEl = document.getElementById("back");

let foodCartEl = document.getElementById("foodCart");
let vegSoupContainerEl = document.getElementById("vegSoupContainer");
let startersContainerEl = document.getElementById("startersContainer");
let burgercontainerEl = document.getElementById("burgerContainer");
let pizzaContainerEl = document.getElementById("pizzaContainer");

let paneersoupaddCartEl = document.getElementById("paneerSoupAddCart");
let addBtnEl = document.getElementById("addBtns");
let minusEl = document.getElementById("minus");
let plusEl = document.getElementById("plus");
let numEl = document.getElementById("num");
let manchuriansoupaddCartEl = document.getElementById("manchurianSoupAddCart");
let addBtnEl2 = document.getElementById("addBtns2");
let minusEl2 = document.getElementById("minus2");
let plusEl2 = document.getElementById("plus2");
let numEl2 = document.getElementById("num2");


////

 allEl.addEventListener("click", () => {
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    backBtnEl.style.display = "none";
    foodCartEl.style.cssText = `
        display: flex;
        flex-direction: row;
    `;
});
vegSoupsEl.addEventListener("click", () => {
    foodCartEl.style.display = "none";
    startersContainerEl.style.display = "none";
    backBtnEl.style.display = "block";
    vegSoupContainerEl.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;
});
vegSoupsBtnEl.addEventListener("click", () => {
    foodCartEl.style.display = "none";
    startersContainerEl.style.display = "none";
    backBtnEl.style.display = "block";
    vegSoupContainerEl.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;
});
startersEl.addEventListener("click", () => {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;
});
startersBtnEl.addEventListener("click", () => {
    foodCartEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;
});
burgerEl.addEventListener("click", () => {
    foodCartEl.style.display = "none";
    burgercontainerEl.style.cssText = `
        display: flex;
        flex-direction: column;
    `;
});
pizzaBtnEl.addEventListener("click", () => {
    foodCartEl.style.display = "none";
    pizzaContainerEl.style.cssText = `
        display: flex;
        flex-direction: row;
    `;
});


// Add to cart function

/////
let navbarEl = document.getElementById("navbar");
let nav1El = document.getElementById("nav1");
let nav2El = document.getElementById("nav2");
let nav3El = document.getElementById("nav3");
let payEl = document.getElementById("payment");
let paymentEl = document.getElementById("payments");
//let tryel = document.getElementById("try");
let count = 0;
paneersoupaddCartEl.addEventListener("click", () => {
    count += 1;
    paneersoupaddCartEl.style.display = "none";
    addBtnEl.style.display = "block";
    navbarEl.style.display = "flex";
    //nav1El.textContent = count + " item paneersoup.";
    
});
let counter = 0;
manchuriansoupaddCartEl.addEventListener("click", () => {
    counter += 1;
    manchuriansoupaddCartEl.style.display = "none";
    addBtnEl2.style.display = "block";
    navbarEl.style.display = "flex";
});


 payEl.addEventListener("click", () => {
      window.location.href = 'cart.html';
  });

backBtnEl.addEventListener("click", () => {
    // burgercontainerEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    foodCartEl.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;
});


const text = document.getElementById("textAnime");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "TASTY!";
    }, 0);
    setTimeout(() => {
        text.textContent = "HEALTHY!";
    }, 4000);
    setTimeout(() => {
        text.textContent = "SPICY!";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

document.getElementById('telegramForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const botToken = '6043250755:AAFmSyi8jj5U_xxwwEbRoUhzB0xTULAtc4Y'; // Replace with your bot token
    const chatId = '1900968004'; // Replace with your chat ID

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message: ' + data.description);
            }
        })
        .catch(error => console.error('Error:', error));
});



var telegram_bot_id = "6043250755:AAFmSyi8jj5U_xxwwEbRoUhzB0xTULAtc4Y"; //"7285099423:AAFR332Ya2mYw8D1c27vk0txmhT1ZFZ6hBg"; //"6043250755:AAFmSyi8jj5U_xxwwEbRoUhzB0xTULAtc4Y"; //"7285099423:AAFR332Ya2mYw8D1c27vk0txmht1ZFZ6hBg"; // ////"1949574883:AAG-88xhsq8h0rBEUxf_Ra7NDjU_408JL-E";///
//chat id
var chat_id = "1900968004"; //"1604007722"; //1900968004; //1604007722; //; ////1467252650;
//var u_name, phone, email, message;
var message;
var ready = function() {
    message = "New Order Placed! again";
};
var sender = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    return false;
};



// //////
// let cart = [];

// // Load cart from localStorage when the script is loaded
// function loadCart() {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//         cart = JSON.parse(storedCart);
//     }
// }

// // Save cart to localStorage
// function saveCart() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Add to cart function
// let counts = 0;
// let price;
// function addToCart(productName, productPrice) {
//     loadCart();
//     counts += 1;
//     const existingProduct = cart.find(item => item.name === productName);

//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cart.push({ name: productName, price: productPrice, quantity: 1 });
//     } 
//     //price = existingProduct.quantity * existingProduct.price;
//     // nav1El.textContent = existingProduct.name+": "+counts+" Total Price: " +price ;
//     // console.log(existingProduct.price);
//     saveCart();
//     alert(`${productName} added to cart`);
// }
// // function deleteToCart(productName, productPrice) {
// //     loadCart();
// //     counts -= 1;
// //     existingProduct = cart.find(item => item.name === productName);
// //     if(existingProduct) {
// //         existingProduct.quantity -= 1;
// //     } else{
// //         cart.push({ name: productName, price: productPrice, quantity: 1 });
// //     }
// //     // console.log(existingProduct.quantity);
// //     // price = existingProduct.quantity * existingProduct.price;
// //     // nav1El.textContent = existingProduct.name+": "+counts+" Total Price: " +price ;
// //     saveCart();
// // }

// // Update cart display on cart.html
// function updateCart() {
//     loadCart();
//     const cartItemsContainer = document.getElementById('cart-items');
//     const totalPriceContainer = document.getElementById('total-price');

//     if (cartItemsContainer && totalPriceContainer) {
//         cartItemsContainer.innerHTML = '';

//         let totalPrice = 0;
//         cart.forEach(item => {
//             const itemTotal = item.price * item.quantity;
//             totalPrice += itemTotal;

//             const cartItem = document.createElement('div');
//             cartItem.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
//             cartItemsContainer.appendChild(cartItem);
//         });

//         totalPriceContainer.innerText = totalPrice.toFixed(2);
//     }
// }

// // Checkout function
// function checkout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty.');
//         return;
//     }

//     alert('Thank you for your purchase!');
//     cart = [];
//     saveCart();
//     updateCart();
// }

// // Load the cart on script load
// loadCart();