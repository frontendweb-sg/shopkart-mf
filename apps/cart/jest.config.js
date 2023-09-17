/**@type {import("jest").Config} */
const config = {
    roots: [
        '<rootDir>/src'
    ],
    verbose: true,
    collectCoverage: true,
    testEnvironment: 'jsdom',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
}

module.exports = config;