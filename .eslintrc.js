module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "flowtype"],
  ignorePatterns: ["**/flow-typed/**/*.js"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "warn",
    "flowtype/no-types-missing-file-annotation": "off",
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
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
