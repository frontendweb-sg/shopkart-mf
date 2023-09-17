const path = require("path");

const regex = {
    js: /\.(js|jsx|ts|tsx)$/,
    css: /\.(scss|sass)$/,
    img: /\.(jpe?g|png|gif|svg)$i/
}

/** @type{import("webpack").Configuration} */
module.exports = {
    entry: "./src/index.ts",
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
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
                test: regex.js,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}