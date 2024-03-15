module.exports = {
    // 定义入口点
    entry: './src/keyHandmarker2.js',

    // 定义输出
    output: {
        filename: 'keyHandmarker_bundle.js',
        path: __dirname + '/dist'
    },

    watch: true,

    // 模块加载器
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};