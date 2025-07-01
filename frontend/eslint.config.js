import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
      // reglas personalizadas
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'all',
          arrowParens: 'always',
        },
      ],
      indent: 'off',
      '@typescript-eslint/indent': 'off',
      'linebreak-style': 'off',
      quotes: 'off',
      semi: 'off', 
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
