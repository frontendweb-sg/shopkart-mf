const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const Html = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const pkg = require("../package.json")
const { VueLoaderPlugin } = require("vue-loader");

/**@type{import('webpack').Configuration}*/
const config = {
    mode: "production",
    output: {
        publicPath: "/admin/latest"
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
        new VueLoaderPlugin()
    ]
}
module.exports = merge(common, config)