export default {
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Si necesitas soporte para Babel
    },
};
