module.exports = {
    plugins: [
        require("css-prefers-color-scheme/postcss")({ preserve: false }),
        require("autoprefixer")()
    ]
}
