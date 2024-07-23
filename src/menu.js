const content = document.querySelector("#content");

export function loadMenu() {
    content.innerHTML = "";

    loadTitle();
    loadMenuContent();
    drinkList();
    loadMains();
    
};

function loadTitle() {
    const title = document.createElement("h1");
    title.classList.add("title");
    
    title.textContent = "Menu";
    content.appendChild(title);
};

function loadMenuContent() {
    const drinks = document.createElement("h1");
    drinks.classList.add("drinks-title");
    drinks.innerText = "Drinks:";
    content.appendChild(drinks);

};

function drinkList() {
    const drinksSection = document.createElement("div");
    drinksSection.classList.add("drinks-section");
    const drinks = document.createElement("p");
    drinks.classList.add("drinks");

    drinks.innerText = `Coke $1
    Coffee $1
    Orange Juice $2
    Lemonade $3`;
    

    
    drinksSection.appendChild(drinks);
    content.appendChild(drinksSection);
}

function loadMains() {
    const mainSection = document.createElement("div");
    mainSection.classList.add("main-section");
    const mains = document.createElement("p");
    mains.classList.add("mains");

    mains.innerText = `Brandon's Favorite... $20
    Bacon & Eggs... $15
    Pancakes... $15
    Waffles... $10
    Breakfast Sandwich... $20
    
    Apple Pie... $5
    Cheesecake... $7
    Ice-Cream Sunday... $8`;

    mainSection.appendChild(mains);
    content.appendChild(mainSection);
}