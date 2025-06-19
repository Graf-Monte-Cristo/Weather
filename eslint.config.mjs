import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  // Вообще весь конфиг – один объект с overrides, а не массив
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs}"],
      plugins: {
        js,
        // автоматически найдётся плагин по имени "prettier"
        "prettier": "eslint-plugin-prettier",
      },
      extends: [
        "js/recommended",          // твои базовые правила
        "plugin:prettier/recommended" // в конце – Prettier, он выключит конфликтующие правила и добавит проверку форматирования
      ],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      rules: {
        // Если хочешь прямо здесь настраивать Prettier:
        "prettier/prettier": [
          "error",
          {
            singleQuote: true,
            trailingComma: "es5",
            printWidth: 80,
            // …другие опции из .prettierrc
          },
        ],
        // Твои дополнительные переопределения ESLint-правил
        // например:
        // "no-console": ["warn"],
      },
    },
  ],
});
