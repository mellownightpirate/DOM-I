const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation

const navBar = document.querySelectorAll("a");

navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

// Call to Action

const ctaText = document.querySelector(".cta .cta-text h1").innerHTML = "DOM<br/>Is</br>Awesome";
const ctaBtn = document.querySelector(".cta .cta-text button").innerHTML = "Get Started";
const ctaImg = document.getElementById("cta-img");
ctaImg.src = "/img/header-img.png";

// Headers

const headerText = document.querySelectorAll(".main-content h4");

headerText[0].textContent = siteContent["main-content"]["features-h4"];
headerText[1].textContent = siteContent["main-content"]["about-h4"];
headerText[2].textContent = siteContent["main-content"]["services-h4"];
headerText[3].textContent = siteContent["main-content"]["product-h4"];
headerText[4].textContent = siteContent["main-content"]["vision-h4"];

// Paragraph-Content

const textP = document.querySelectorAll(".main-content p");

textP[0].textContent = siteContent["main-content"]["features-content"];
textP[1].textContent = siteContent["main-content"]["about-content"];
textP[2].textContent = siteContent["main-content"]["services-content"];
textP[3].textContent = siteContent["main-content"]["product-content"];
textP[4].textContent = siteContent["main-content"]["vision-content"];

// Middle Img

const middleImg = document.getElementById("middle-img");
middleImg.src = "/img/mid-page-accent.jpg";

// Contact
const contactHeader = document.querySelector(".contact h4");

contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactPara = document.querySelectorAll(".contact p");

contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

// Footer

const footer = document.querySelector("footer");

footer.textContent = siteContent["footer"]["copyright"];


// New Nav Elements

const newItems = document.querySelector("nav");

const social = document.createElement('a'); {
social.textContent = "Social";
social.href = "#";
social.style.color = "green";
newItems.prepend(social);
}

const careers = document.createElement('a'); {
  careers.textContent = "Careers";
  careers.href = "#";
  careers.style.color = "green";
  newItems.appendChild(careers);
}

// Change Navigation text to green

navBar.forEach(element => {element.style.color = 'green'})

// Change CTA text header to green

document.querySelector(".cta-text h1").style.color="green";
console.log(newAnchorLast);

// Adding click event listener background color changes to red

// let buttonClick = document.querySelector('.cta .cta-text button');
// buttonClick.innerText = 'Get Started';

// buttonClick.addEventListener('click', (n) => {
//   n.target.style.backgroundColor = 'red';
// });