const path = require("path");

const regex = {
    js: /\.(js|jsx|ts|tsx)$/,
    css: /\.(scss|sass)$/,
    img: /\.(jpe?g|png|gif|svg)$/i,
    vue: /\.vue$/
}

/** @type{import("webpack").Configuration} */
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "[name].[contenthash].js"
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".js", ".ts", ".vue"],
        alias: {
            "@": "/src"
        }
    },
    module: {
        rules: [
            {
                test: regex.img,
                type: "asset/resources"
            },
            {
                test: regex.css,
                exclude:/node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: regex.vue,
                loader: "vue-loader",
                exclude: /node_modules/
            },
            {
                test: regex.js,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}