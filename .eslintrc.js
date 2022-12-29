module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'filenames/match-exported': ['off'],
        'filenames/match-regex': ['off'],
        'no-return-assign': ['error', 'except-parens'],
        'default-case': ['off'],
        'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['draft']}], // https://github.com/immerjs/immer/issues/189#issuecomment-506396244
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                printWidth: 120,
                bracketSpacing: false,
                tabWidth: 4,
                arrowParens: 'always',
                trailingComma: 'all',
                endOfLine: 'auto',
            },
        ],
    },
};
