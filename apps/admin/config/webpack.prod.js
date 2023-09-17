const common = require("./webpack.common");
const path = require("path");
const pkg = require("../package.json")
const { VueLoaderPlugin } = require("vue-loader");
const { merge } = require("webpack-merge");
const {ModuleFederationPlugin} = require("webpack").container;

const domain = process.env.PROD_DOMAIN;

/**@type{import('webpack').Configuration}*/
const config = {
    mode: "production",
    devtool:"inline-source-map",
    performance:{
        hints:false
    },
    output: {
      filename:"[name].[contenthash].js"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "admin",
            filename: "remoteEntry.js",
            exposes: {
                "./AdminBootstrap": path.resolve(__dirname, "..", "src/bootstrap")
            },
            remotes: {
                container: `container@${domain}/remoteEntry.js`,
                auth: `auth@${domain}/auth/remoteEntry.js`,
            },
            shared: pkg.dependencies
        }),
        new VueLoaderPlugin()
    ]
}
module.exports = merge(common, config)