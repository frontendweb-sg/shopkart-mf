const path = require("path");
const common = require("./webpack.common");
const pkg = require('../package.json')
const {ModuleFederationPlugin} = require("webpack").container;
const { merge } = require("webpack-merge");

const domain = process.env.PROD_DOMAIN;

/**@type {import('webpack').Configuration} */
const config = {
    mode: "production",
    devtool: 'inline-source-map',
    output: {
        filename: "[name]-[contenthash].js"
    },
    performance:{
        hints:false
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
                auth: `auth@${domain}/auth/remoteEntry.js`,
                categories: `categories@${domain}/categories/remoteEntry.js`,
                cart: `cart@${domain}/cart/remoteEntry.js`,
                users: `users@${domain}/users/remoteEntry.js`,
                admin: `admin@${domain}/admin/remoteEntry.js`,
            },
            shared: pkg.dependencies

        })
    ]
}

module.exports = merge(common, config)