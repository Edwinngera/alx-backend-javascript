module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,
      sourceType:  'module',
    },
    rules:  {
        'quotes': ['error', 'single'],
        // we want to force semicolons
        'semi': ['error', 'always'],
        // we use 2 spaces to indent our code
        'indent': ['error', 2],
        // we want to avoid extraneous spaces
        'no-multi-spaces': ['error'],
    },
  };