import { createAboutSection, createWelcomeSection } from "./home";

export function aboutSection() {
    // Clear the content
    const content = document.getElementById('content');
    content.innerHTML = '';

    const welcomeHeadingString = 'About Us';
    const welcomeParagraphString = 'Our story began in 2020, and we have been serving delicious meals ever since.';
    const welcomeSection = createWelcomeSection(welcomeHeadingString, welcomeParagraphString);
    
    const aboutHeadingString = 'Who we are';
    const aboutParagraphStringList = [
        'AFB Foods is a family-owned restaurant that has been serving delicious meals since 2020.',
        'We believe in using fresh, locally sourced ingredients to create our dishes.',
        'Our mission is to provide a warm and welcoming atmosphere for our guests.',
        'Join us for a meal and experience the AFB Foods difference!'
    ];

    const aboutSection = createAboutSection(aboutHeadingString, aboutParagraphStringList);

    // Append the about section to the content
    content.appendChild(welcomeSection);
    content.appendChild(aboutSection);
}
