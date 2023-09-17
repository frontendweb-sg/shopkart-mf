const common = require("./webpack.common");
const path = require("path");
const pkg = require("../package.json")
const { merge } = require("webpack-merge");
const {ModuleFederationPlugin} = require("webpack").container;

const domain = process.env.PROD_DOMAIN;

/**@type {import("webpack").Configuration} */
const config={
    mode:"production",
    devtool:"inline-source-map",
    performance:{
        hints:false
    },
    output:{
        filename:"[name].[contenthash].js",
        publicPath:"/auth/remoteEntry.js"
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"auth",
            filename: "remoteEntry.js",
            exposes: {
                "./AuthBootstrap": path.resolve(__dirname, "..", "src/bootstrap")
            },
            remotes: {
                container: `container@${domain}/remoteEntry.js`
            },
            shared: pkg.dependencies
        })
    ]
}
module.exports=merge(common,config)