var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge.smart(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});