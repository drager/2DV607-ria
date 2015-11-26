var config = {
    entry: {
        js: './src/app.js',
        html: './index.html',
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?' + JSON.stringify({
                        presets: ["react", "es2015"],
                    })
                ],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ],
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname,
    },

};

module.exports = config;