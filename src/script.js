//Category Constants
const KEYBOARD = "keyboard";
const MOUSE = "mouse";

//Brand Constants
const LOGITECH = "Logitech";
const RAZER = "Razer";
const HYPERX = "Hyper X";
const THERMALTAKE = "Thermaltake";
const KEYCHRON = "Keychron";
const CHERRY = "Cherry";
const GIGABYTE = "Gigabyte";
const DUCKY = "Ducky";


//Product Contructor
function Product(id, name, brand, price, category)
{
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.category = category;
}

//Shopping Basket
const shoppingBasket = [];

const products =
[
    {
        "id": "0",
        "name": "keyboard-0",
        "brand": "Logitech",
        "price": 168.99,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "1",
        "name": "keyboard-1",
        "brand": "Razer",
        "price": 120.50,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "2",
        "name": "keyboard-2",
        "brand": "Hyper X",
        "price": 99.99,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "3",
        "name": "keyboard-3",
        "brand": "Thermaltake",
        "price": 60.00,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "4",
        "name": "keyboard-4",
        "brand": "Keychron",
        "price": 149.99,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "5",
        "name": "keyboard-5",
        "brand": "Cherry",
        "price": 179.99,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "6",
        "name": "keyboard-6",
        "brand": "Gigabyte",
        "price": 49.99,
        "category": "keyboard",
        "qty": 0
    },
    {
        "id": "7",
        "name": "keyboard-7",
        "brand": "Ducky",
        "price": 119.99,
        "category": "keyboard",
        "qty": 0
    }   
];

//Creating arrays based on category of product.
const categoryKeyboard = products.filter((item) => item.category === KEYBOARD);

//Creating arrays based on brand of product.
const brandLogitech = products.filter((item) => item.brand === LOGITECH);
const brandRazer = products.filter((item) => item.brand === RAZER);
const brandHyperX = products.filter((item) => item.brand === HYPERX);
const brandThermaltake = products.filter((item) => item.brand === THERMALTAKE);
const brandKeychron = products.filter((item) => item.brand === KEYCHRON);
const brandCherry = products.filter((item) => item.brand === CHERRY);
const brandGigabyte = products.filter((item) => item.brand === GIGABYTE);
const brandDucky = products.filter((item) => item.brand === DUCKY);

//Used to build the store menu for products.
function storeProductBuilder(products)
{

}

//Configuration to build Navigation bar and store page
const layoutConfig =
{
    navOptions: 
    [
        {
            title: "Store",
            href: "index.html"
        },
        {
            title: "About Us",
            href: "/about-us"
        },
        {
            title: "Contact Us",
            href: "contact-us"
        },        
    ],
    productList: storeProductBuilder()
};

//Create navigation bar
layoutConfig.navOptions.forEach((item) =>
{
    const newMenuItem= document.createElement("a");
    newMenuItem.textContent = item.title;
    newMenuItem.href = item.href;
    document.querySelector(".menu").appendChild(newMenuItem);
});

//Create products into product list.
// const contentProducts = document.getElementById("list");
// const htmlProductList = layoutConfig.productList;
// contentProducts.innerHTML = htmlProductList;

products.forEach((product) =>
{
    const newProduct = document.createElement("div");
    newProduct.innerHTML = product.name;
    newProduct.className = "box";
    document.getElementById("product-list").appendChild(newProduct);
})
