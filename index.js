module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "react",
    "react-hooks"
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-console": "warn",
    "react/button-has-type": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "warn",
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        bracketSpacing: true,
        endOfLine: "auto",
        jsxBracketSameLine: false,
        printWidth: 140,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "all"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_.*?$",
        ignoreRestSiblings: false
      }
    ],
    "import/order": [
      "warn",
      {
        allowSeparatedGroups: true,
        groups: ["builtin", "external", "index", "internal", "object", "parent", "sibling", "type"],
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "~/**",
            position: "after"
          }
        ]
      }
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true
      }
    ],
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*"
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      }
    ]
  }
};
