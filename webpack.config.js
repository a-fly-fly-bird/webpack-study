const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // JavaScript 执行入口文件
    entry: './main.js',
    mode: 'development',
    /**
     * webpack-dev-server 在编译之后不会写入任何输出文件，而是将 bundle 文件保留在内存中，然后将它们作为可访问资源部署在 server 中，就像是挂载在 server 根路径上的真实文件一样。
     * 以下配置告知 webpack-dev-server 将 dist 目录下的文件作为可访问资源部署在 localhost:8080。。
     */
    devServer: {
		static: "./"
	},
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                // 用正则去匹配要用该 loader 转换的 CSS 文件
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
};