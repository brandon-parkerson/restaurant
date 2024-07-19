import './style.css';
import table from './diner-background.jpg';

const header = document.querySelector(".header");
const navigation = document.querySelector(".nav");
const content = document.getElementById("content");
const imgElement = document.createElement("img");
const btnHome = document.createElement("button");
const btnMenu = document.createElement("button");
const btnAbout = document.createElement("button");

document.addEventListener('DOMContentLoaded', () => {
    
    loadButtons();
    loadTable();
    loadQuote();

});

function loadButtons() {
    btnHome.innerText = "Home";
    btnMenu.innerText = "Menu";
    btnAbout.innerText = "About";

    navigation.appendChild(btnHome);
    navigation.appendChild(btnMenu);
    navigation.appendChild(btnAbout);

    header.appendChild(navigation);
};

function loadTable() {
    imgElement.src = table;
    imgElement.classList.add("table");
    content.appendChild(imgElement);
};

function loadQuote() {
    const quote = document.createElement("p");
    quote.classList.add("quote");
    quote.innerText = `"This is the greatest restaurant to ever exist in the history of the world." \n -Gordon Ramsey`;
    content.appendChild(quote);
};

