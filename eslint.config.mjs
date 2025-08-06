import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Включи нужные правила вручную
      ...importPlugin.configs.recommended.rules,
    },
    settings: {
      'import/resolver': {
        webpack: {
          config: './webpack.config.js', // или dev.js, если используешь его
        },
      },
    },
  },
])