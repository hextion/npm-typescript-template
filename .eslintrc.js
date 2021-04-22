module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
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
  ],
};
