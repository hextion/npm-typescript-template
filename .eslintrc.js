module.exports = {
    root: true,
    extends: ["eslint:recommended", "prettier"],
    overrides: [
        {
            files: ["**/*.ts"],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:@typescript-eslint/strict",
                "prettier",
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ["./tsconfig.json"],
            },
            plugins: ["@typescript-eslint"],
            rules: {
                "@typescript-eslint/array-type": ["error", { default: "array", readonly: "array" }],
            },
        },
        // lint config files, eg: `babel.config.js`, `.eslintrc.js`, `.prettierrc.cjs`, etc.
        {
            files: ["**/?(.)*.?(c)js"],
            env: {
                node: true,
            },
            parserOptions: {
                ecmaVersion: "latest",
            },
        },
    ],
};
