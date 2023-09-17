const common = require("./webpack.common");
const Html = require("html-webpack-plugin");
const path = require("path");
const pkg = require("../package.json")
const { VueLoaderPlugin } = require("vue-loader");
const { merge } = require("webpack-merge");
const {ModuleFederationPlugin} = require("webpack").container;


/**@type{import('webpack').Configuration}*/
const config = {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: "http://localhost:3005/"
    },
    optimization: {
        //  runtimeChunk: "single"
    },
    devServer: {
        port: 3005,
        liveReload: true,
        historyApiFallback: true,
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "admin",
            filename: "remoteEntry.js",
            exposes: {
                "./AdminBootstrap": path.resolve(__dirname, "..", "src/bootstrap")
            },
            remotes: {
                container: "container@http://localhost:3000/remoteEntry.js",
                auth: "auth@http://localhost:3001/remoteEntry.js",
            },
            shared: pkg.dependencies
        }),
        new Html({
            template: path.resolve(__dirname, "..", "public/index.html")
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = merge(config, common)