module.exports = {
    parser: "@typescript-eslint/parser",
    extends:[
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions:{
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "@typescript-eslint/quotes": [2, "double"],
    }
}