const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Managment',
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
           {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
           },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
};