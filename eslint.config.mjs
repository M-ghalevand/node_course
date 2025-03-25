import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    ignores: ['**/node_modules', '**/dist', '**/public', '**/*.md', '**/.idea']
  },
  ...fixupConfigRules(compat.extends('plugin:import/typescript', 'plugin:import/warnings')),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: fixupPluginRules(_import),
      prettier: fixupPluginRules(prettier)
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: path.resolve('./'),
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx']
        }
      }
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',

        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-console': 'error',
      'prefer-const': 'error',

      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index']
          ]
        }
      ],
      'prettier/prettier': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'const', next: '*' },
        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'always', prev: '*', next: 'return' }
      ]
    }
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message: 'Only TypeScript (.ts, .tsx) files are allowed.'
        }
      ]
    }
  }
];
