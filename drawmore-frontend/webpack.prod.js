var merge = require('webpack-merge');
var common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge.smart(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});