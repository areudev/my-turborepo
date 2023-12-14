/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		'@vercel/style-guide/eslint/browser',
		'@vercel/style-guide/eslint/typescript',
		'@vercel/style-guide/eslint/react',
	].map(require.resolve),
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{allowConstantExport: true},
		],
	},
	overrides: [
		{
			files: 'src/main.tsx',
			rules: {
				'@typescript-eslint/no-non-null-assertion': 'off',
			},
		},
	],
}
