const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: [
        './src/main.js',
        './src/main1.js'
    ],
    mode: 'development',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[fullhash].js'
    },
    module: {
        rules: [
            {
                test: /\.txt/,
                use: ['raw-loader']
            }
        ]
    },
    plugins: [new TerserPlugin()]
}