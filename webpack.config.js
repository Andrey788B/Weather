const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main:'./js/index.js'
    },
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
          new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

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
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
                  {
                test: /\.(png|jpe?g|gif|mp3|svg|woff2?|ttf|eot)$/i,
                type: 'asset/resource',
            },
        ],
    },
}