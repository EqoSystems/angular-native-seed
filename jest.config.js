module.exports = {
  preset: "jest-preset-angular",
  roots: ["src"],
  setupTestFrameworkScriptFile: "<rootDir>/src/jest.setup.ts",
  moduleNameMapper: {
    "@env/(.*)": "<rootDir>/src/environments/$1"
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/*jest*"
  ]
};
