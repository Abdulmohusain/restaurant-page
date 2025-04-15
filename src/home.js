
export function createWelcomeSection(welcomeHeadingString, welcomeParagraphString) {
    const welcomeSection = document.createElement('div');
    const welcomeHeading = document.createElement('h2');
    welcomeHeading.textContent = welcomeHeadingString;
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = welcomeParagraphString;
    welcomeSection.appendChild(welcomeHeading);
    welcomeSection.appendChild(welcomeParagraph);
    return welcomeSection;
}

export function createFoodSection(menuHeadingString, menuItems) {
    const menuSection = document.createElement('div');
    menuSection.id = 'menu';
    const menuHeading = document.createElement('h2');
    menuHeading.textContent = menuHeadingString || 'Menu'; 
    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });
    menuSection.appendChild(menuHeading);
    menuSection.appendChild(menuList);
    return menuSection;
}

export function createAboutSection(aboutHeadingString, aboutParagraphStringList) {
    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'about';
    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = aboutHeadingString || 'About Us';

    aboutDiv.appendChild(aboutHeading);
    aboutParagraphStringList.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        aboutDiv.appendChild(paragraph);
    });
    return aboutDiv;
}

export function loadHome() {
    // Create the main container
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Welcome section
    const welcomeHeadingString = 'Welcome to AFB Foods';
    const  welcomeParagraphString = 'AFB Foods is dedicated to providing the best dining experience.';
    const welcomeSection = createWelcomeSection(welcomeHeadingString, welcomeParagraphString);

    // Menu section
    const menuHeadingString = 'Serving delicious food at your table';
    const menuItems = ['Pizza', 'Burgers', 'Pasta', 'Salads'];
    const menuSection = createFoodSection(menuHeadingString, menuItems);

    // Append welcome and menu sections to the first div
    content.appendChild(welcomeSection);
    content.appendChild(menuSection);

    // About Us section
    const aboutHeadingString = 'About Us';
    const aboutParagraphs = [
        'AFB Foods is dedicated to providing the best dining experience.',
        'Welcome to AFB Foods, where passion meets flavor! Our mission is to provide a memorable dining experience by serving delicious, high-quality meals made with the freshest ingredients. Whether you\'re craving classic comfort food or exploring new culinary delights, we have something for everyone.',
        'Founded in 2023, AFB Foods is dedicated to creating a warm and welcoming atmosphere for families, friends, and food enthusiasts alike. Our team of skilled chefs and friendly staff work tirelessly to ensure every visit is special.',
        'Thank you for choosing AFB Foods. We look forward to serving you and making your dining experience truly unforgettable!'
    ];
    const aboutDiv = createAboutSection(aboutHeadingString, aboutParagraphs);
    content.appendChild(aboutDiv);
}
