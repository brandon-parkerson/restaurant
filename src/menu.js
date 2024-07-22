const content = document.querySelector("#content");

export function loadMenu() {
    content.innerHTML = "";

    loadTitle();
    loadMenuContent();
    drinkList();
    
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
    
    const drinks = document.createElement("p");
    drinks.innerText = `Coke
    Coffee
    Orange Juice`;

    
    content.appendChild(drinks);
    // TODO: Finish drink list and other food items. Design the menu item text.

}