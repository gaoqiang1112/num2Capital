const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: __dirname + "/src/num2Capital.js",
    output: {
        path: __dirname + "/dist",
        filename: "num2Capital.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {loader:'babel-loader'}
                ]
            },
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: /\/node_modules/,
            uglifyOptions: {
                compress: {drop_console:true},
            }
        })
    ]
}
