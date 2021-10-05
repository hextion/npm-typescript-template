module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
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
    // lint config files, eg: `babel.config.js`, `.eslintrc.js`, `.prettierrc.js`, etc.
    {
      files: ["**/?(.)*.js"],
      env: {
        node: true,
        es2020: true,
      },
    },
  ],
};
