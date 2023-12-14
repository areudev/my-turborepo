/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: [
		'@vercel/style-guide/eslint/browser',
		'@vercel/style-guide/eslint/typescript',
		'@vercel/style-guide/eslint/react',
	].map(require.resolve),
	globals: {
		JSX: true,
	},
	plugins: ['only-warn'],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.cjs', '**/*.css'],
	// add rules configurations here
	rules: {
		'import/no-default-export': 'off',
	},
}
