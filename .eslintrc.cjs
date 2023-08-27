const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:array-func/recommended",
    "plugin:regexp/recommended",
    "plugin:promise/recommended",
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@nuxt/eslint-config",
    "prettier",
  ],
  ignorePatterns: ["node_modules", "dist", ".output"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "unused-imports",
    "array-func",
    "import",
    "promise",
    "regexp",
    "sort-keys-fix",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-shadow": "off",
    "import/order": [
      "error",
      { alphabetize: { order: "asc" }, "newlines-between": "always" },
    ],
    "sort-keys-fix/sort-keys-fix": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/component-options-name-casing": ["error", "kebab-case"],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/define-props-declaration": ["error", "type-based"],
    "vue/first-attribute-linebreak": "off",
    "vue/no-required-prop-with-default": ["error", { autofix: false }],
    "vue/no-template-shadow": "off",
    "vue/script-indent": ["error", 2, { baseIndent: 1 }],
  },
});
