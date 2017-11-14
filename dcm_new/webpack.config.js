let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        //首页框架文件
        main: path.resolve('./src/entry/main/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                    // name: 'assets/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,   //这是注释掉的模块，一开始很疑惑加入css的编译模块马上就报错了，注释掉之后sass代码照样可以成功编译。
                loader: ["vue-style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
}

let output_html = [];


// if (process.env.NODE_ENV === 'production') {
module.exports.devtool = '#source-map'
// http://vue-loader.vuejs.org/en/workflow/production.html
// module.exports.plugins = (module.exports.plugins || []).concat([
//   new webpack.DefinePlugin({
//     'process.env': {
//       NODE_ENV: '"production"'
//     }
//   }),
//   new webpack.optimize.UglifyJsPlugin({
//     sourceMap: true,
//     compress: {
//       warnings: false
//     }
//   }),
//   new webpack.LoaderOptionsPlugin({
//     minimize: true
//   })
// ])


output_html.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"production"'
    }
}));
output_html.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
        warnings: false
    }
}));
output_html.push(new webpack.LoaderOptionsPlugin({
    minimize: true
}));
// }

for (let i in module.exports.entry) {
    let _obj = new HtmlWebpackPlugin({
        filename: 'html/' + i + '.html',
        template: path.resolve(__dirname, './index.html'), //html模板,绝对路径。
        inject: true,
        cache: true,
        chunks: [i]
    });
    output_html.push(_obj);
}

module.exports.plugins = (module.exports.plugins || []).concat(output_html);