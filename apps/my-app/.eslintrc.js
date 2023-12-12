/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [require.resolve('@repo/lint/next.js')],
	overrides: [
		{
			files: ['*'],
			rules: {
				// 'react/jsx-sort-props': 'off',
				// 'no-console': 'warn',
			},
		},
	],
	parserOptions: {
		project: true,
	},

	plugins: ['@typescript-eslint'],
}
