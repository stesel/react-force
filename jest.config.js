module.exports = {
    "setupFiles": [
        "<rootDir>/test-shim.js",
        "<rootDir>/test-setup.js"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testMatch": [
        "**/__tests__/**/*.(ts|tsx)"
    ],
    "coveragePathIgnorePatterns": [
        "test-setup.js",
        "test-shim.js"
    ]
};
