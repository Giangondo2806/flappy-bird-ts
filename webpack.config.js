const path = require('path');

module.exports = {
    entry: './src/index.ts', // chi dinh file chay dau tien
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts','.js'], // chi dinh duoi build
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // noi build cuoi cung cua js
    },
};