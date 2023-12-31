const common = require('./webpack.common');
const {merge}=require('webpack-merge');
const {ModuleFederationPlugin}=require('webpack').container;
const path = require("path");
const pkg = require("../package.json")


const domain = process.env.PROD_DOMAIN;

/**@type {import('webpack').Configuration} */
const config={
    mode:"production",
    output:{
        filename:"[name].[contenthash].jst"
    },
    plugins:[
        ModuleFederationPlugin({
            name:"categories",
            exposes:{
                "./CategoriesBootstrap": path.resolve(__dirname, "..", "src/bootstrap")
            },
            remotes:{
                container: `container@${domain}/remoteEntry.js`,
                auth:`auth@${domain}/auth/remoteEntry.js`,
            },
        })
    ]
}

module.exports = merge(common,config)