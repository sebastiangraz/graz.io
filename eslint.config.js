import js from "@eslint/js";
import sort from "eslint-plugin-sort-exports";

// import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import tseslint from "@typescript-eslint/eslint-plugin";
// import refresh from "eslint-plugin-react-refresh";
// import ts from "@typescript-eslint/eslint-plugin";

import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.tsx", "src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      sort,
      hooks,
      tseslint,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
      "tseslint/no-unused-vars": "warn",
      "hooks/rules-of-hooks": "error",
      "hooks/exhaustive-deps": "warn",
      "sort/sort-exports": "error",
    },
  },
];

/* {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "sort-exports"],
  "rules": {
    // "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
    "react/no-unknown-property": "off",
    "react/display-name": "off",
    "plugin:react-hooks/recommended": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "object-shorthand": 1,
    
  }
}
 */
