module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "flowtype"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "warn",
    "flowtype/no-types-missing-file-annotation": "off",
    "no-console": "off",
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
