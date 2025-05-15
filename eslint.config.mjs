import { defineConfig, globalIgnores } from "eslint/config"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import security from "eslint-plugin-security"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default defineConfig([
  globalIgnores([
    "**/node_modules",
    "**/dist",
    "**/*eslint.config.js",
    "./src/components/ui",
    "**/.vscode",
    "**/src-tauri/",
    "**/tailwind.config.js"
  ]),
  {
    extends: compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:security/recommended-legacy",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ),

    plugins: {
      "@typescript-eslint": typescriptEslint,
      security
    },

    languageOptions: {
      parser: tsParser
    },

    rules: {
      "no-console": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports"
        }
      ],

      quotes: ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "only-multiline"],
      "react/react-in-jsx-scope": "off"
    }
  }
])
