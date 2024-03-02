module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    React: 'readonly', // Assuming React is a global variable
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12, // Specify the ECMAScript version
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname, // Corrected typo: tsconfigRootDir
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require this
    'react/prop-types': 'off', // Use TypeScript or PropTypes
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow omitting return types for React components
    '@typescript-eslint/no-empty-interface': 'off', // Allow empty interfaces
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Warn if dependencies are not explicitly listed in useEffect
  },
};
