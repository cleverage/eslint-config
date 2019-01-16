module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
    "browser": true,
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "babel",
  ],
  "rules": {
    "no-multiple-empty-lines": [1, { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
    "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "import", "next": "*" },
        { "blankLine": "never", "prev": "import", "next": "import" },
    ]
  }
}
