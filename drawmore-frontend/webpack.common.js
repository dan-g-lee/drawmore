const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    module: {
        rules: [
            { 
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { 
                test: /\.(sa|sc|c)ss$/, 
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'postcss-loader'
                    }, 
                    { 
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ] 
            },
            { 
                test: /\.html$/, 
                use: 'html-loader' 
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
}
