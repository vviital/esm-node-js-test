"use strict";

module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js"] },
      exports: {},
    },
  },
  rules: {
    "import/no-unresolved": ["error", { commonjs: true }],
  },
};
