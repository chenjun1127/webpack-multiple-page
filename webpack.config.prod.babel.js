import path from 'path';
import glob from 'glob';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'; //

const webpackConfig = {
    mode: 'production',
    entry: entries(),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].[hash:8].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                'postcss-loader',
            ],
        }, {
            test: /\.pug/,
            use: [{
                loader: 'pug-loader'
            }]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: { name: 'images/[name].[hash:8].[ext]' }
            }]
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
        new MiniCssExtractPlugin({ filename: 'css/[name].[hash:8].css' }),
        new OptimizeCssAssetsPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 首先: 打包node_modules中的文件
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10
                },
                // 注意: priority属性
                // 其次: 打包业务中公共代码
                common: {
                    name: "common",
                    chunks: "all",
                    minSize: 1,
                    priority: 0
                }
            }
        }
    }
}

function entries() {
    const globPath = path.resolve(__dirname, 'src/js/*.{js,jsx}');
    var entries = {},
        filename;
    glob.sync(globPath).forEach(function(filePath) {
        filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        entries[filename] = filePath;
    });
    return entries;
}

Object.keys(entries()).forEach(function(name) {
    var plugin = new HtmlWebpackPlugin({
        // 生成出来的html文件名
        filename: name + '.html',
        // 每个html的模版，这里多个页面使用同一个模版
        template: './src/views/' + name + '.pug',
        title: name,
        // 自动将引用插入html
        inject: true,
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: ['vendor', 'common', name],
        chunksSortMode: 'manual', // 手动排序
        minify: {
            // 去除注释
            removeComments: true,
            // 压缩HTML代码，变成一行
            collapseWhitespace: true
        },
    });
    webpackConfig.plugins.push(plugin);
})

export default webpackConfig;