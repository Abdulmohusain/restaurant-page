const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
        clean: true, // Clean the output directory before each build
    },
    mode: 'development', // Set mode to 'development' or 'production'
    devtool: 'inline-source-map', // Source map for easier debugging
    devServer: {
        static: './dist', // Serve files from the output directory
        open: true, // Automatically open the browser
        hot: true, // Enable hot module replacement
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
      ],
    
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },              
            {
                test: /\.css$/i, // Match .css files
                use: ['style-loader', 'css-loader'], // Use these loaders
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Match image files
                type: 'asset/resource', // Handle them as assets
            },
        ],
    },
};