import eslintPluginProperArrows from "@getify/eslint-plugin-proper-arrows";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigStandartWithTypescript from "eslint-config-standard-with-typescript";
import { defineFlatConfig } from "eslint-define-config";
import eslintPluginArrayFunc from "eslint-plugin-array-func";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginNoInferredMethodName from "eslint-plugin-no-inferred-method-name";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginRegexp from "eslint-plugin-regexp";
import eslintPluginSortKeysFix from "eslint-plugin-sort-keys-fix";
import eslintPluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default defineFlatConfig([
  {
    ignores: [
      "node_modules",
      ".nuxt",
      ".husky",
      "pnpm-lock.yaml",
      ".gitignore",
      ".npmrc",
      ".prettierignore",
      "*.json",
      "README.md",
    ],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
    },
    rules: {
      ...eslintConfigStandartWithTypescript.rules,
      ...eslintPluginTypescript.configs["recommended"].rules,
    },
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.mjs", "**/*.cjs"],
    plugins: {
      "@getify/proper-arrows": eslintPluginProperArrows,
      "array-func": eslintPluginArrayFunc,
      import: eslintPluginImport,
      "no-inferred-method-name": eslintPluginNoInferredMethodName,
      promise: eslintPluginPromise,
      regexp: eslintPluginRegexp,
      "sort-keys-fix": eslintPluginSortKeysFix,
    },
    rules: {
      ...eslintPluginProperArrows.configs["getify-says"].rules,
      ...eslintPluginArrayFunc.configs["recommended"].rules,
      ...eslintPluginRegexp.configs["recommended"].rules,
      "import/order": [
        "error",
        { alphabetize: { order: "asc" }, "newlines-between": "always" },
      ],
      // "no-inferred-method-name/no-inferred-method-name": "error",
      "sort-keys-fix/sort-keys-fix": "error",
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
    },
    plugins: {
      "jsx-a11y": eslintPluginJsxA11y,
      vue: eslintPluginVue,
    },
    rules: {
      ...eslintPluginVue.configs["vue3-recommended"].rules,
      ...eslintPluginJsxA11y.configs["recommended"].rules,
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/component-options-name-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": ["error", "kebab-case"],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/no-required-prop-with-default": ["error", { autofix: false }],
      "vue/script-indent": ["error", 2, { baseIndent: 1 }],
    },
  },
  {
    files: ["*"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "prettier/prettier": "error",
    },
  },
]);
