import './style.css';
import table from './diner-background.jpg';
import { loadMenu } from './menu';
import { loadAbout } from './about';

const header = document.querySelector(".header");
const navigation = document.querySelector(".nav");
const content = document.getElementById("content");
const imgElement = document.createElement("img");

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

function loadButtons() {
    navigation.innerHTML = "";
    const btnHome = document.createElement("button");
    btnHome.classList.add("home");
    const btnMenu = document.createElement("button");
    btnMenu.classList.add("menu");
    const btnAbout = document.createElement("button");
    btnAbout.classList.add("about");
    btnHome.innerText = "Home";
    btnMenu.innerText = "Menu";
    btnAbout.innerText = "About";

    navigation.appendChild(btnHome);
    navigation.appendChild(btnMenu);
    navigation.appendChild(btnAbout);

    header.appendChild(navigation);

    // Ensure event listeners are added after buttons are created
    listenButtons();
}

function loadTable() {
    imgElement.src = table;
    imgElement.classList.add("table");
    content.appendChild(imgElement);
}

function loadQuote() {
    const quote = document.createElement("p");
    quote.classList.add("quote");
    quote.innerText = `"This is the greatest restaurant to ever exist in the history of the world." \n -Gordon Ramsey`;
    content.appendChild(quote);
}

function loadHours() {
    const hoursSection = document.createElement("div");
    hoursSection.classList.add("hours-section");
    const hoursHeader = document.createElement("h2");
    const hoursContent = document.createElement("p");
    hoursContent.classList.add("hours-content");
    hoursHeader.innerText = "Hours:";
    hoursContent.innerText = `Sunday: 8AM - 3PM \n Monday: 6AM - 3PM \n Tuesday: 6AM - 3PM \n Wednesday: 6AM - 3PM \n Thursday: 6AM - 3PM 
    Friday: 6AM - 3PM \n Saturday: 8AM - 3PM`;

    hoursSection.appendChild(hoursHeader);
    hoursSection.appendChild(hoursContent);
    content.appendChild(hoursSection);
}

function loadLocation() {
    const locationSection = document.createElement("div");
    locationSection.classList.add("location-section");
    const locationHeader = document.createElement("h2");
    const locationContent = document.createElement("p");
    locationContent.classList.add("location-content");
    locationHeader.innerText = "Location:";
    locationContent.innerText = `123 Parkerson Ave, Metropolis, California`;

    locationSection.appendChild(locationHeader);
    locationSection.appendChild(locationContent);
    content.appendChild(locationSection);
}

function listenButtons() {
    const menuButton = document.querySelector(".menu");
    const homeButton = document.querySelector(".home");
    const aboutButton = document.querySelector(".about");

    menuButton.addEventListener("click", loadMenu);
    homeButton.addEventListener("click", loadHome);
    aboutButton.addEventListener("click", loadAbout);
}

function loadTitle() {
    const title = document.querySelector(".title");
    if (!title) {
        const newTitle = document.createElement("h1");
        newTitle.classList.add("title");
        newTitle.innerText = "Brandon's Breakfast Diner";
        content.prepend(newTitle);
    } else {
        title.innerText = "Brandon's Breakfast Diner";
    }
}

function loadHome() {
    content.innerHTML = ""; // Clear the content section before loading home content
    loadButtons();
    loadTitle();
    loadTable();
    loadQuote();
    loadHours();
    loadLocation();
}
