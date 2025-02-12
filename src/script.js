//Importing constants
import {CATEGORIES, BRANDS} from "./constants.js";

//Reference to HTML headers
const body = document.body;
const main = body.querySelector('main');

console.log(CATEGORIES.LOGITECH);

//Product Constructor
function Product(id, name, brand, price, category)
{
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.category = category;
}


const products =
[
    {
        "id": 0,
        "name": "keyboard-0",
        "brand": "Logitech",
        "price": 168.99,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": 1,
        "name": "keyboard-1",
        "brand": "Razer",
        "price": 120.50,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": 2,
        "name": "keyboard-2",
        "brand": "Hyper X",
        "price": 99.99,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": 3,
        "name": "keyboard-3",
        "brand": "Thermaltake",
        "price": 60.00,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": 4,
        "name": "keyboard-4",
        "brand": "Keychron",
        "price": 149.99,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": 5,
        "name": "keyboard-5",
        "brand": "Cherry",
        "price": 179.99,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": 6,
        "name": "keyboard-6",
        "brand": "Gigabyte",
        "price": 49.99,
        "category": "keyboard",
        "qty": 1
    },
    {
        "id": "7",
        "name": "keyboard-7",
        "brand": "Ducky",
        "price": 119.99,
        "category": "keyboard",
        "qty": 1
    }   
];

//Creating arrays based on category of product.
const categoryKeyboard = products.filter((item) => item.category === CATEGORIES.KEYBOARD);

//Creating arrays based on brand of product.
const brandLogitech = products.filter((item) => item.brand === BRANDS.LOGITECH);
const brandRazer = products.filter((item) => item.brand === BRANDS.RAZER);
const brandHyperX = products.filter((item) => item.brand === BRANDS.HYPERX);
const brandThermaltake = products.filter((item) => item.brand === BRANDS.THERMALTAKE);
const brandKeychron = products.filter((item) => item.brand === BRANDS.KEYCHRON);
const brandCherry = products.filter((item) => item.brand === BRANDS.CHERRY);
const brandGigabyte = products.filter((item) => item.brand === BRANDS.GIGABYTE);
const brandDucky = products.filter((item) => item.brand === BRANDS.DUCKY);


//Configuration to build Navigation bar and store page
const layoutConfig =
{
    navOptions: 
    [
        {
            title: "Store",
            href: "./indexv2.html"
        },
        {
            title: "About Us",
            href: "/about-us"
        },
        {
            title: "Contact Us",
            href: "contact-us"
        },
        {
            title: "Data Entry",
            href: "./data-entry.html"
        },        
    ],
};

//--- Adding products into the shoppingBasket array --------
//Shopping Basket
const shoppingBasket = [];

//Used to build the store menu for products.
function popUpShoppingBasket()
{
    let popup = document.getElementById("popup-shopping-cart");
    if(popup)
    {
        let currentDisplayMode = popup.style.display;
        console.log(currentDisplayMode);
        if(currentDisplayMode === "none")
        {
            popup.style.display = "flex";
        }
        else
        {   
            popup.style.display = "none";
        }
        return
    }


    popup = document.createElement('div');
    popup.id = "popup-shopping-cart";
    popup.style.cssText =
    `
    height: 500px;
    width: 300px;
    border: 2px solid black;
    background-color: fuchsia;
    border-radius: 20px;
    justify-content: center;
    align-content: start;
    flex-direction: column;
    `

    const title = document.createElement('h2');
    title.textContent = "Shopping Basket";
    title.style.cssText =
    `
    padding: 0;
    margin: 0;
    text-align: center;
    align-items: start;
    `
    popup.appendChild(title);

    const basket = document.createElement("ul");
    basket.id = 'basketContents';
    basket.className = 'basket-contents'
    popup.appendChild(basket);

    main.appendChild(popup);

    popup.style.display = "flex";
}

//Update basket display
function updateBasketContents(contents)
{
    const basketContainer = document.getElementById('basketContents');
    basketContainer.innerHTML = "";

    if(contents.length === 0)
    {
        basketContainer.textContent = "Cart is empty!"
        return;
    }

    contents.forEach(item =>
    {
        const productEntry = document.createElement('li');
        productEntry.textContent = `${item.name} x ${item.qty} - $${item.price * item.qty}`;
        basketContainer.appendChild(productEntry);
    });
}

//Functionality to cart button
const basketBtn = document.getElementById('basket');
if (basketBtn)
{
    basketBtn.addEventListener('click', popUpShoppingBasket);
}
else
{
    console.log("Basket button not found!")
}

//Adds product to the basket.
function addToBasket(productID)
{
    const existsInBasket = shoppingBasket.find(item => item.id === productID);
    if(existsInBasket)
    {
        existsInBasket.qty++;
    }
    else
    {
        shoppingBasket.push(products[productID]);
    }
    updateBasketContents(shoppingBasket);
}

//Eventlistener for the product-list div on the HTML page which contains all the products (and the "BUY" buttons).
//Can be used later to add different functionality when pressing the actual product instead of the buy button.
const htmlProductList = document.getElementById('product-list');
htmlProductList.addEventListener('click', function(event)
{
    clickedButton = event.target;

    //Executes when clicked button contains 'btn-buy' class.
    if(clickedButton.classList.contains('btn-buy'))
    {
        console.log("Buy button clicked for product ID: ", clickedButton.id);
        addToBasket(Number(clickedButton.id));      //The id needs to be parsed back into a number as it being pulled from html code.
    }
    else
    {
        console.log("No buy button was clicked.")
    }

});
//---------------------------------------------------------

//Create navigation bar
layoutConfig.navOptions.forEach((item) =>
{
    const newMenuItem= document.createElement("a");
    newMenuItem.textContent = item.title;
    newMenuItem.href = item.href;
    document.querySelector(".menu").appendChild(newMenuItem);
});

//Populates the 'product-list' div with the products array and generates a buy button with respective id.
products.forEach((product) =>
{
    const newProduct = document.createElement("div");
    const newBuyButton = document.createElement("button");
    
    newProduct.innerHTML = `<ul>
        <li>ID: ${product.id}</li>
        <li>Name: ${product.name}</li>
        <li>${product.brand}</li>
        <li>${product.category}</li>
        <li>$${product.price}</li>
        </ul>`;
    newProduct.className = "box";
    console.log(product.id);

    newBuyButton.type = "button";
    newBuyButton.id = `${product.id}`;
    newBuyButton.className = "btn-buy";
    newBuyButton.innerHTML = "BUY";

    document.getElementById("product-list").appendChild(newProduct).appendChild(newBuyButton);
});


