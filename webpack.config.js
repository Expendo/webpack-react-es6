
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: [
      './src/app.jsx'
    ],
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            include: path.join(__dirname, 'src')
        },
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
         {
         test: /\.less$/,
          // exclude: /node_modules/,
          include: path.join(__dirname, 'less'),
          loader: 'style!css!less'
        }

        ]
    }
};
