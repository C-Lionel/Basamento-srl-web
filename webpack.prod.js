const HtmlWepackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /main\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /main\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },

            {
                test: /\.(png|webp|ttf|ico|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new HtmlWepackPlugin({
            filename: './index.html',
            template: './src/index.html'

        }),
        new HtmlWepackPlugin({
            filename: './nosotros.html',
            template: './src/nosotros.html'

        }),
        new HtmlWepackPlugin({
            filename: './proyectos.html',
            template: './src/proyectos.html'

        }),
        new HtmlWepackPlugin({
            filename: './servicios.html',
            template: './src/servicios.html'

        }),
        new HtmlWepackPlugin({
            filename: './contacto.html',
            template: './src/contacto.html',
        }),
        // new HtmlWepackPlugin({
        //     template: './src/assets/icon-1.ico',
        //     favicon: './assets'
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            ignoreOrder: false
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
        
    ]
    
};

