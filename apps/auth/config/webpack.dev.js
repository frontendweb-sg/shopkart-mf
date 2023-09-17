const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const Html = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const pkg = require("../package.json")


/**@type{import('webpack').Configuration}*/
const config = {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: "http://localhost:3001/"
    },
    optimization: {
        
        //  runtimeChunk: "single"
    },
    devServer: {
        port: 3001,
        liveReload: true,
        historyApiFallback: true,
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./AuthBootstrap": path.resolve(__dirname, "..", "src/bootstrap")
            },
            remotes: {
                container: "container@http://localhost:3000/remoteEntry.js"
            },
            shared: pkg.dependencies
        }),
        new Html({
            template: path.resolve(__dirname, "..", "public/index.html")
        })
    ]
}

module.exports = merge(config, common)