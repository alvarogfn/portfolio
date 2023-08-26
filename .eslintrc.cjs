module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "vue/script-indent": ["warn", 2, { baseIndent: 1 }],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/component-options-name-casing": ["error", "kebab-case"],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/define-props-declaration": ["error", "type-based"],
    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/no-required-prop-with-default": ["error", { autofix: false }],
  },
};
