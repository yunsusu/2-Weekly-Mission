module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
      plugins: ["@typescript-eslint", "react", "react-hooks"],
      rules: {
        "react/react-in-jsx-scope": 0,
        "no-unused-vars": "warn",
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
};
