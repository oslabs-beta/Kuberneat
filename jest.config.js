/** @type {import('ts-jest').JestConfigWithTsJest} */


module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
	  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	  '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js'
	},
	transform: {
	  '^.+\\.(ts|tsx)$': ['ts-jest', {
		tsconfig: 'tsconfig.json'
	  }]
	},
	moduleDirectories: ['node_modules', 'src'],
	testTimeout: 10000
  };