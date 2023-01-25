const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {

    entry: {
        index_head: ['./src/index.js']
    },
    plugins: [
        new HtmlWebpackPlugins({
            template:"./src/index.html",
            filename:"./index.html",
            minify: false
        }),
    ],
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};

