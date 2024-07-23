const content = document.querySelector("#content");

export function loadAbout() {
    content.innerHTML = "";

    loadTitle();
    loadInfo();
    loadBio();

};

function loadTitle() {
    const title = document.createElement("h1");
    title.classList.add("title");
    
    title.textContent = "About";
    content.appendChild(title);
};

function loadInfo() {
    const infoSection = document.createElement("div");
    const info = document.createElement("p");

    infoSection.classList.add("info-section");
    info.classList.add("info");

    info.innerText = `Brandon Parkerson (Chef)
    Phone: 555-555-5555
    Email: asdffsggdgss@gjgjg.com
    
    John Smith (Owner)
    Phone: 555-555-5555
    Email: upyourbutt@jsj.com
    
    Jane Doe (Manager)
    Phone: 555-555-5555
    Email: manager@you.com`;

    infoSection.appendChild(info);
    content.appendChild(infoSection);

};

function loadBio() {
    const bioSection = document.createElement("div");
    const bio = document.createElement("p");

    bioSection.classList.add("bio-section");
    bio.classList.add("bio");

    bio.innerText = `Established: 1998
    Nestled in the heart of our community, Brandon's Diner has been serving up hearty, delicious meals since 1998. With a rich history rooted in family traditions 
    and a passion for great food, our diner has become a beloved gathering spot for friends, families, and food enthusiasts alike.
    
    Brandon's Diner was founded by Brandon Mitchell, a culinary enthusiast with a dream of creating a welcoming place where people could enjoy classic 
    American comfort food. What started as a small, cozy diner quickly grew into a local favorite, thanks to Brandon's commitment to quality, service, and a warm, 
    inviting atmosphere.`;

    bioSection.appendChild(bio);
    content.appendChild(bioSection);
}