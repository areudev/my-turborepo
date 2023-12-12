/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/next.js')],
  overrides: [
    {
      files: ['**/**.tsx'],
      rules: {
        'react/jsx-sort-props': 'off',
      },
    },
  ],
  parserOptions: {
    project: true,
  },

  plugins: ['@typescript-eslint'],
}
