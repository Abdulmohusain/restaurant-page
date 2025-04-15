# Restaurant Page

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum and was created to practice using **Webpack** for bundling JavaScript, CSS, and other assets. The goal was to learn webpack and ES6+ features like modules and `import/export` by building a simple restaurant page with multiple sections dynamically rendered using JavaScript.

## Features

- **Dynamic Content Rendering**: All sections (Home, Menu, About, Contact) are dynamically generated using JavaScript.
- **Webpack Integration**: The project is bundled using Webpack for modularity and efficient asset management.

- **Modern JavaScript**: ES6+ features like modules and `import/export` are used.

## Technologies Used

- **HTML5**: For the structure of the page.
- **CSS3**: For styling and layout.
- **JavaScript (ES6+)**: For dynamic content rendering.
- **Webpack**: For bundling and managing assets.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulmohusain/restaurant-page.git
   cd restaurant-page

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

## Project Structure

```
restaurant-page/
├── dist/               # Bundled output files
├── src/                # Source files
│   ├── index.js        # Entry point for JavaScript
│   ├── home.js         # Home section module
│   ├── menu.js         # Menu section module
│   ├── about.js        # About section module
│   ├── contact.js      # Contact section module
│   ├── styles.css      # Main CSS file
│   └── template.html   # HTML template
├── webpack.config.js   # Webpack configuration
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## What I Learned

- How to set up and configure **Webpack** for a JavaScript project.
- How to use **Webpack loaders** for handling CSS and images.
- How to dynamically generate HTML content using JavaScript modules.
- The importance of modular code structure for maintainability.

## Live Demo

You can view the live version of the project [here](https://abdulmohusain.github.io/restaurant-page/) 

## Acknowledgments

- This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.
- Thanks to the Odin Project community for their support and guidance.

## License

This project is open-source and available under the [MIT License](LICENSE).