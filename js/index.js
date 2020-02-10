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

// ===== My code starts here



// console.log(newLink)

// ===== Nav
let addLinks = document.querySelectorAll('a');
let navItem = 1
addLinks.forEach( anchor => {
    anchor.style.color = 'green';
    anchor.textContent = siteContent["nav"]["nav-item-"+ navItem];
    navItem++;
} );
// Nav Additions //
const freshLink = document.createElement('a');
freshLink.textContent = "Developer";
freshLink.style.color = 'green';
const navParent = document.querySelector("nav");
navParent.prepend(freshLink);
const newLink = document.createElement('a');
newLink.textContent = "Investors";
newLink.style.color = 'green';
navParent.append(newLink);

// ===== CTA Style
const ctaText = document.querySelector(".cta-text")
// ctaText.style.display = "flex";
// ctaText.style.flexDirection = "column";
// ctaText.style.justifyContent = "center";
// ctaText.style.alignItems = "center";

let ctaTitle = document.querySelector(".cta-text h1");
// ctaTitle.style.color = "red";
ctaTitle.textContent = siteContent["cta"]["h1"];
// ctaTitle.style.width = "42%";
// ctaText.style.verticalAlign = "center";
let ctaButton = document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


// ===== Main Content Titles 
let mainContentTitles = document.querySelectorAll(".main-content h4");
console.log(mainContentTitles)
let mainTitleArray = Array.from(mainContentTitles);
console.log(mainTitleArray);
mainTitleArray[0].textContent = siteContent["main-content"]["features-h4"]
mainTitleArray[1].textContent = siteContent["main-content"]["about-h4"]
mainTitleArray[2].textContent = siteContent["main-content"]["services-h4"]
mainTitleArray[3].textContent = siteContent["main-content"]["vision-h4"]

// ===== Main Content Body
let mainContentBody = document.querySelectorAll(".main-content p");
let mainBodyArray = Array.from(mainContentBody);
mainBodyArray[0].textContent = siteContent["main-content"]["features-content"]
mainBodyArray[1].textContent = siteContent["main-content"]["about-content"]
mainBodyArray[2].textContent = siteContent["main-content"]["services-content"]
mainBodyArray[3].textContent = siteContent["main-content"]["vision-content"]

// ===== Main Content Img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// ===== Contact/Footer

let contactTitle = document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
let contactInfo = document.querySelectorAll(".contact p")
let contactArray = Array.from(contactInfo)
contactArray[0].textContent = siteContent["contact"]["address"]
contactArray[1].textContent = siteContent["contact"]["phone"]
contactArray[2].textContent = siteContent["contact"]["email"]

let footerContent = document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];









// let featuresBody = document.querySelector(".main-content p");
// featuresBody.setAttribute('p', siteContent["main-content"]["features-content"])

