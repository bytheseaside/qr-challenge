module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'eslint.config.js', 'tailwind.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    '@stylistic',
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    '@stylistic/indent': ['error', 2],
    "@stylistic/jsx-indent": [1, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    "@stylistic/jsx-indent-props": [1, 2],
    "@stylistic/jsx-max-props-per-line": [2, { maximum: 1, when: "always" }],
    "@stylistic/jsx-equals-spacing": [2, "never"],
    "@stylistic/jsx-closing-bracket-location": ["error", { selfClosing: 'after-props', nonEmpty: 'tag-aligned' }],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "@stylistic/jsx-self-closing-comp": ["error", { "component": true, "html": true }],
    "react-refresh/only-export-components": ['warn', { allowConstantExport: true }],
  },
}