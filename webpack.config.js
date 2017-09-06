var webpack = require("webpack"),
    path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        __dirname + '/src' + '/index.js'
    ],
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            'plugins': [
                                'transform-class-properties'
                            ],
                            'presets': [
                                "es2015",
                                "react",
                                "stage-3"
                            ]
                        }
                    }]
            }]
    },
    devServer: {
        contentBase: __dirname + '/public'
    }
};