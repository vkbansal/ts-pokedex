const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'react',
                                [
                                    'env',
                                    {
                                        modules: false,
                                        targets: {
                                            browsers: 'last 2 versions'
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};
