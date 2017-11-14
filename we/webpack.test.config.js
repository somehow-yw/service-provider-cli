var path = require('path'),
    webpack = require('webpack'),
    src_dir = path.resolve(__dirname,'src'),
    node_modules_dir = path.resolve(__dirname, 'node_modules');
//var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

var config = {
    entry: {
        bundle: [
            src_dir + '/vendors/common.js',
            src_dir + '/app.js',
            src_dir + '/less/style.less',
            src_dir + '/vendors/request/request.dev.js'
        ]
        //,
        //simplePage:[
        //    src_dir + '/vendors/1/simplePage.js',
        //    src_dir + '/vendors/1/simplePage.css'
        //]
    },
    output: {
        path: path.resolve(__dirname, 'build/Public/service-provider/js'),
        publicPath: 'Public/service-provider/js/',
        filename: 'bundle.js',
        chunkFilename:'test/[name].js'
    },
    resolve: {
        alias: {
            //jquery: 'jquery',
            iscroll: src_dir + '/vendors/lib/iscroll.js'
            //'react': src_dir + '/vendors/react.min.js',
            //'react-dom': src_dir + '/vendors/react-dom.min.js'
        }
    },
    module: {
        //noParse: [src_dir + '/react/react.min.js', src_dir + '/vendors/react-dom.min.js'],
        loaders: [
            {
                test: /\.less|\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.jsx?$/,

                // There is not need to run the loader through
                // vendors
                exclude: [node_modules_dir],
                loader: 'babel'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            },
            {
                test:/\.(woff|svg|eot|ttf)$/,
                loaders:['url?limit=15000']
            }
            //{ test: require.resolve("react"), loader: "expose?React" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            IScroll: 'iscroll'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
        //new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
        //    filename: src_dir = path.resolve(__dirname,'build') + '/test.html', //生成的html存放路径，相对于 path
        //    template: './src/template/test.html', //html模板路径
        //    hash: false
        //})
    ]
};

module.exports = config;
