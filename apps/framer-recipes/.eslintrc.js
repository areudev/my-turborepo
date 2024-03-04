/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [require.resolve('@repo/lint/next.js')],
	overrides: [
		{
			files: ['*'],
			rules: {
				// 'react/jsx-sort-props': 'off',
				'@next/next/no-img-element': 'off',
				'@typescript-eslint/no-misused-promises': 'off',
				'jsx-a11y/anchor-is-valid': 'off',
				'no-console': 'warn',
			},
		},
	],
	parserOptions: {
		project: true,
	},

	plugins: ['@typescript-eslint'],
}
