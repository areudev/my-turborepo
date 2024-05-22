/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [require.resolve('@repo/lint/vite.js')],
	ignorePatterns: ['postcss.config.js', 'tailwind.config.js'],
	parserOptions: {
		project: [`${__dirname}/tsconfig.json`, `${__dirname}/tsconfig.node.json`],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'react/jsx-sort-props': 'off',
				'@typescript-eslint/no-empty-interface': 'off',
			},
		},
	],
	// plugins: ['@typescript-eslint'],
}
