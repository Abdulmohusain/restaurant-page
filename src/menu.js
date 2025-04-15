import { createWelcomeSection, createFoodSection } from "./home";

createWelcomeSection();
export function menuSection() {
    // Clear the content
    const content = document.getElementById('content');
    content.innerHTML = '';

    const welcomeHeadingString = 'Our Menu';
    const welcomeParagraphString = 'Here at AFB Foods, we take pride in our diverse menu that caters to all tastes.';
    const welcomeSection = createWelcomeSection(welcomeHeadingString, welcomeParagraphString);

    // Create the menu section
    const menuHeadingString = 'Our Delicious Offerings';
    const menuItems = ['Pizza', 'Burgers', 'Pasta', 'Salads'];
    const menuSection = createFoodSection(menuHeadingString, menuItems);

    // Append the menu section to the content
    content.appendChild(welcomeSection);
    content.appendChild(menuSection);
}
