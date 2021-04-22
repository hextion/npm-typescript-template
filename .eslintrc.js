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
        "@typescript-eslint/array-type": ["error", { default: "generic", readonly: "generic" }],
        "@typescript-eslint/method-signature-style": ["error", "property"],
      },
    },
    // lint config files, eg: .eslintrc.js, .prettierrc.js, etc.
    {
      // eslint-disable-next-line no-useless-escape
      files: ["**/\.*.js"], // prettier-ignore
      env: {
        node: true,
        es6: true,
      },
    },
  ],
};
