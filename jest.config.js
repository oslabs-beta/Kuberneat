/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: ['node', 'jsdom']
    // moduleFileExtensions: [
    //     'js',
    //     'jsx',
    //     'json',
    //     'node',
    //     'ts'
    // ],
    // transform: {
    //     '^.+\\.js$': 'babel-jest',
    //     '^.+\\.(ts|tsx)$': 'ts-jest'
    // }
};
