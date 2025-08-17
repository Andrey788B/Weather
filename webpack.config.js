const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    context: __dirname,
    entry: {
        main:'./src/js/index.ts'
    },
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new ForkTsCheckerWebpackPlugin(),

        // new CopyPlugin({
        //     patterns: [
        //         { from: "source", to: "dest" },
        //         { from: "other", to: "public" },
        //     ],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                    // Options
                                    },
                                ],
                                ],
                            },
                            },
                    },
                    'sass-loader',
                    ],
            },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
            { test: /\.(png|jpe?g|gif|mp3|svg|woff2?|ttf|eot)$/i, type: 'asset/resource' },
        ],
    },
}