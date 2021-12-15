const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build/',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "css/**/*",
                },
                {
                    from: "img/**/*",
                },
                {
                    from: 'src/*.html'
                },
            ],
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.(jpg|jpeg|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: 'file-loader'
            },
        ]
    },
}