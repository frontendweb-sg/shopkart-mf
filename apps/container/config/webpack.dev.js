const common = require("./webpack.common");
const path = require("path");
const pkg = require('../package.json')
const { merge } = require("webpack-merge");
const {ModuleFederationPlugin} = require("webpack").container;

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
                "./AppTheme": path.resolve(__dirname, "..", "src/context/theme"),
                "./AppHeader": path.resolve(__dirname, "..", "src/layout/Header"),
                "./AppFooter":path.resolve(__dirname, "..", "src/layout/Footer"),
            },
            remotes: {
                auth: "auth@http://localhost:3001/remoteEntry.js",
                categories: "categories@http://localhost:3002/remoteEntry.js",
                cart: "cart@http://localhost:3003/remoteEntry.js",
                users: "users@http://localhost:3004/remoteEntry.js",
                admin: "admin@http://localhost:3005/remoteEntry.js"
            },
            shared: pkg.dependencies
        })
       
    ]
}

module.exports = merge(config, common)