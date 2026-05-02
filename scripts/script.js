'use strict';

// Navbar JS
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav-dropdown");

navIcon.addEventListener("click", toggleLinks);
function toggleLinks(e){
    nav.classList.toggle("nav-hide");
}

// Table JS
const versionRows =  document.querySelectorAll(".version-tr");

var i = 0;
versionRows.forEach(element => {

    element.addEventListener("click", (event) => {

        element.nextElementSibling.firstElementChild.classList.toggle("hide");
    
    });
});

// Link from Header JS

const h3List = document.querySelectorAll(".handbook-content h3");
const h4List = document.querySelectorAll(".handbook-content h4");
const h5List = document.querySelectorAll(".handbook-content h5");

h3List.forEach(element => {
   element.addEventListener("click", copyLink);
});
h4List.forEach(element => {
    element.addEventListener("click", copyLink);
});
h5List.forEach(element => {
    element.addEventListener("click", copyLink);
});

function copyLink(e) {
    navigator.clipboard.writeText(document.URL+"#"+e.target.id);
}


