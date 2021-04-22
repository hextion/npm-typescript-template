const prettier = "prettier --check";
const eslint = "eslint --no-ignore --max-warnings 0";

module.exports = {
  "*.{js,json,md}": [prettier],
  "*.{js,ts}": [prettier, eslint],
};
