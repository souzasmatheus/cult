module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  ignorePatterns: [
    'node_modules/',
    'e2e',
    '__mocks__',
    'coverage',
    '_templates',
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    "react/react-in-jsx-scope": "off",
    'react/prop-types': 0,
    'react/display-name': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'array-callback-return': 0,
    'react/jsx-props-no-spreading': 0,
    'no-duplicate-imports': 'error',
    'react/state-in-constructor': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
