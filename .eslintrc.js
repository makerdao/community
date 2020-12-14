module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "warn",
  },
  overrides: [
    {
      files: [
        ".eslintrc.js",
        "gatsby-config.js",
        "gatsby-node.js",
        "scripts/*.js",
        "src/build-utils.js",
      ],
      env: {
        node: true,
      },
    },
  ],
};
