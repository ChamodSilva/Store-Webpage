//Reference to HTML headers
const body = document.body;
const main = body.querySelector('main');

//Configuration to build Navigation bar and store page
const layoutConfig =
{
    navOptions: 
    [
        {
            title: "Store",
            href: "/src/index.html"
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
            href: "/data_entry/index.html"
        },        
    ],
};

//---------------------------------------------------------

//Create navigation bar
layoutConfig.navOptions.forEach((item) =>
{
    const newMenuItem= document.createElement("a");
    newMenuItem.textContent = item.title;
    newMenuItem.href = item.href;
    document.querySelector(".menu").appendChild(newMenuItem);
});


