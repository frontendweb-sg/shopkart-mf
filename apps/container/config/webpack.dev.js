const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const Html = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const pkg = require('../package.json')

/**@type{import('webpack').Configuration}*/
const config = {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: "http://localhost:3000/"
    },
    optimization: {
        //  runtimeChunk: "single"
    },
    devServer: {
        port: 3000,
        liveReload: true,
        historyApiFallback: true,
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            exposes: {
                "./AppTheme": path.resolve(__dirname, "..", "src/context/theme")
            },
            remotes: {
                auth: "auth@http://localhost:3001/remoteEntry.js",
                categories: "categories@http://localhost:3002/remoteEntry.js",
                cart: "cart@http://localhost:3003/remoteEntry.js",
                users: "users@http://localhost:3004/remoteEntry.js",
                admin: "admin@http://localhost:3005/remoteEntry.js"
            },
            shared: pkg.dependencies
        }),
        new Html({
            template: path.resolve(__dirname, "..", "public/index.html")
        })
    ]
}

module.exports = merge(config, common)