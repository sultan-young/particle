const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    const { mode } = env;
    return {
        mode,
        entry: './main.ts',
        output: {
            filename:  '[name]-[hash:8].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(ts)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ]
                    }
                },
                {
                    test: /\.(jpe?g|png|gif)/,
                    use: [
                        {
                          loader: 'file-loader',
                          options: {
                            name: '[name]-[sha256:hash:8]-[emoji].[ext]',
                            outputPath: 'img',
                          },
                        },
                      ],
                },
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                title: '    ',
                template: './example/index.html'
            }),
            // 新版本clearWebpackPlugin不需要传入清理的目录，其会自动清理webpack配置中output的路径
            new CleanWebpackPlugin(),
        ],
        resolve: {
            extensions: ['.ts', '.js']
        }
    }
}