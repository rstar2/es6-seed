module.exports = {
    entry: {
        app: './src/js/app.js',
        style: './src/css/style.css'
    },

    output: {
        filename: './public/js/bundle.js'
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            // "env"

                            "es2015",
                            "stage-0"
                        ],
                        "plugins": [
                            // needed for object spreading like {...data}
                            // "transform-object-rest-spread",

                            "transform-runtime"
                        ]
                    }
                }
            }
        ]
    },

    // Turn on sourcemaps
    devtool: 'source-map',
    // Add minification
    // plugins: [
    //    new webpack.optimize.UglifyJsPlugin()
    // ]
};