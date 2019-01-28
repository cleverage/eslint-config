# @cleverage/eslint-config

Clever Age javaScript coding style guide.

This config depends on [Airbnb coding style guide](https://github.com/airbnb/javascript).

## Install

Using NPM:
```sh
npm install --save-dev @cleverage/eslint-config
```

Using Yarn:
```sh
yarn add --dev @cleverage/eslint-config
```

### Install Peer Dependencies

Clever Age eslint config need some peer dependencies mainly inherited from AirBnB config. To install it you have to run this command:
```sh
npx install-peerdeps --dev @cleverage/eslint-config
```

### Add this to your your `.eslintrc.js`:

```json
{
  "extends": "@cleverage"
}
```

## Differences with airBnB config

### [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)
```js
'no-multiple-empty-lines': [1, { max: 1, maxEOF: 1, maxBOF: 0 }],
```
AirBnB’s rules allow 2 successive empty lines but the purpose of a linter  is to avoid human debates when reviewing code. To avoid debates on 1 or 2 empty lines, we choose to limit to one only empty line everywhere.

### `padding-line-between-statements`
```js
'padding-line-between-statements': [
  'error',
  { blankLine: 'always', prev: '*', next: 'return' },
  { blankLine: 'always', prev: 'import', next: '*' },
  { blankLine: 'never', prev: 'import', next: 'import' },
],
```
AirBnB set this rule to `off`.
We prefer set it to:
- not have blank line between `import`,
- always separate `import` lines from rest of code by one blank line.
- always precede `return` statement by a blank line if not alone in the code block.

