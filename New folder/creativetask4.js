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

allEl.addEventListener("click", () => {
    //burgercontainerEl.style.display = "none";
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
let navbarEl = document.getElementById("navbar");
let nav1El = document.getElementById("nav1");
let nav2El = document.getElementById("nav2");
let nav3El = document.getElementById("nav3");
let payEl = document.getElementById("payment");
let paymentEl = document.getElementById("payments");
//let tryel = document.getElementById("try");



payEl.addEventListener("click", () => {
    window.location.href = 'https://websolution.ccbp.tech/';
});

backBtnEl.addEventListener("click", () => {
    burgercontainerEl.style.display = "none";
    vegSoupContainerEl.style.display = "none";
    startersContainerEl.style.display = "none";
    foodCartEl.style.cssText = `
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;
});

document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    let count2 = 0;
    //let counter = 1;
    paneersoupaddCartEl.addEventListener("click", () => {
        navbarEl.style.display = "block";
        nav1El.textContent = count + " item paneersoup.";
        paneersoupaddCartEl.style.display = "none";
        addBtnEl.style.display = "block";
        //counter = count;
        //console.log(counter);
    });

    plusEl.addEventListener("click", () => {
        count += 1;
        numEl.textContent = count;

        nav1El.textContent = count + " item paneersoup ordered!";
    });

    manchuriansoupaddCartEl.addEventListener("click", () => {
        count2 += 1;
        navbarEl.style.display = "block";
        nav2El.textContent = count2 + " item manchurian soup ordered.";
        manchuriansoupaddCartEl.style.display = "none";
        addBtnEl2.style.display = "block";
        //console.log(counter);
    });
    plusEl2.addEventListener("click", () => {
        count2 += 1;
        numEl2.textContent = count2;
        console.log(count + count2);
        //counter = count2;
        nav2El.textContent = count2 + count + " item manchurian soup ordered!";
        paymentEl.textContent = count+"successfully placed...";
        //navbarEl.textContent = count+count2 + "items placed.";
    });
    //nav1El.textContent = count + count2 + " ordered.";

    navbarEl.style.display = "none";

});

navbarEl.addEventListener("click", () => {
    navbarEl.href = "https://websolution.ccbp.tech/";
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


var telegram_bot_id = "7285099423:AAFR332Ya2mYw8D1c27vk0txmhT1ZF6hBg"; //"7285099423:AAFR332Ya2mYw8D1c27vk0txmhT1ZFZ6hBg"; //"6043250755:AAFmSyi8jj5U_xxwwEbRoUhzB0xTULAtc4Y"; //"7285099423:AAFR332Ya2mYw8D1c27vk0txmht1ZFZ6hBg"; // ////"1949574883:AAG-88xhsq8h0rBEUxf_Ra7NDjU_408JL-E";///
//chat id
var chat_id = "160400772"; //"1604007722"; //1900968004; //1604007722; //; ////1467252650;
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

//modal section


//document.addEventListener('DOMContentLoaded', (event) => {



//});



//function emailSend() {

//   Email.send({
//     Host: "smtp.elasticemail.com",
//    Username: "ramkumarkandasamy26@gmail.com",
//     Password: "9AC3C724B80FF0A6962683787747998E991F",
//     To: 'rkoram908719@gmail.com.com',
//      From: "ramkumarkandasamy26@gmail.com",
//      Subject: "This is the subject",
//      Body: "And this is the body"
//   }).then(
//       message => alert(message)
//   );
//}