const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/jsx/main.js'
    },
    output: {
        filename: '[name].js',
        publicPath: '/js/',
        path: path.resolve(__dirname, 'web/js')
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    devtool: 'sourcemap',
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: require.resolve('jquery'),
                use: [
                    { loader: 'expose-loader', query: '$' },
                    { loader: 'expose-loader', query: 'jQuery' }
                ],
            }
        ]
    }
};
