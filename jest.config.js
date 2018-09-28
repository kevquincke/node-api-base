module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "js",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^middleware/(.*)$": "<rootDir>/src/middleware/$1",
    "^migration/(.*)$": "<rootDir>/src/migration/$1",
    "^models/(.*)$": "<rootDir>/src/models/$1",
    "^subscriber/(.*)$": "<rootDir>/src/subscriber/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^src/(.*)$": "<rootDir>/src/$1"
  }
};
