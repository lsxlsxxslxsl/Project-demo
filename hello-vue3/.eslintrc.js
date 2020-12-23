module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "arrow-body-style": ["warn", "never"],
    indent: ['error', 4, { SwitchCase: 1 }],
    'no-shadow': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 1,
    'global-require': 0,
    'no-console': 0,
    'no-underscore-dangle': 1,
    'vue/html-indent': [2, 4],
    'vue/component-name-in-template-casing': [2, 'kebab-case'],
    'max-len': [
        'error',
        120,
        2,
        {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
