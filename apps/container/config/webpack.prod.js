const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const domain = process.env.DOMAIN;

/**@type {import('webpack').Configuration} */
const config = {
    mode: "production",
    output: {
        filename: "[name]-[contenthash].js",
        publicPath: "/latest/container"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            filename: "remoteEntry.js",
            exposes: {
                "./AppTheme": path.resolve(__dirname, "..", "src/context/theme")
            },
            remotes: {
                auth: `auth@${domain}/remoteEntry.js`,
                admin: `admin@${domain}/remoteEntry.js`,
                users: `users@${domain}/remoteEntry.js`,
                products: `users@${domain}/remoteEntry.js`,
                cart: `cart@${domain}/remoteEntry.js`
            }
        })
    ]
}

module.exports = merge(common, config)