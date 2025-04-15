import "./styles.css";
import { loadHome } from "./home";
import { menuSection } from "./menu";
import { aboutSection } from "./about";
import { contactSection } from "./contact";

// Create the main container
const content = document.getElementById('content');

loadHome();

const navItems = document.querySelectorAll('nav ul li button');

navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.id === 'home-page') {
            loadHome();
        }
        if (e.target.id === 'menu-page') {
            menuSection();
        }
        if (e.target.id === 'about-page') {
            aboutSection();
        }
        if (e.target.id === 'contact-page') {
            contactSection();
        }
    })
})
