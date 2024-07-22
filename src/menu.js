const content = document.querySelector("#content");


export function loadMenu() {
    content.innerHTML = "";

    loadTitle();
    
};

function loadTitle() {
    const title = document.createElement("h1");
    title.classList.add("title");
    
    title.textContent = "Menu";
    content.appendChild(title);
};