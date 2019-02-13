# Installation

1. Clone the project and install all necessary modules via `npm install`.
2. Import Tokens.fig to your Figma project.
3. Create `secret.js`, and put your personal API key with the file id. You can find file id in the URL when open file through Figma's website. Also, you can use `secret.template.js` file in the root of the project.
4. Run `npm start` to start the dev server and generate Font and Typography tokens into `dist` folder.

# Development

The application highly dependent on pages name in Figma. You can find a clear dependency between pages name and models of this app. Check the `models` folder to create new token models.
