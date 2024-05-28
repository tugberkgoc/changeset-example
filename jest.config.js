/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/**/*.ts",
        "!**/lib/**" // Exclude files in the lib directory
    ],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 10,
            functions: 15,
            lines: 40
        }
    },
    // detectOpenHandles: true,
    testMatch: [
        "**/src/**/__tests__/**/*.ts?(x)",
        "**/src/**/?(*.)+(spec|test).ts?(x)",
        "!**/lib/**/?(*.)+(spec|test).ts?(x)", // Exclude test files in the lib directory
        "**/test/**/?(*.)+(spec|test).ts?(x)"
    ]
};