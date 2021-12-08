module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	globals: {
		describe: true,
		it: true,
		expect: true,
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'eslint-disable no-async-promise-executor': 'off',
		'no-useless-constructor': 'off',
		'no-async-promise-executor': 'off',
		camelcase: 'off',
	},
};
