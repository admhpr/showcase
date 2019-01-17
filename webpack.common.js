var path = require('path');

module.exports = {
    entry: ['./js/main.js', './scss/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        }]
    }
};