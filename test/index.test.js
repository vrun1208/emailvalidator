const { validateEmail } = require('../index');

describe('Email Validation Tests', () => {
    test('returns true for a valid email', () => {
        const result = validateEmail('test@example.com');
        expect(result.valid).toBe(true);
        expect(result.error).toBeNull();
    });

    test('returns false for an invalid email', () => {
        const result = validateEmail('invalid-email');
        expect(result.valid).toBe(false);
        expect(result.error).toBe(`${result.error}`);
    });

    test('throws an error for non-string input', () => {
        expect(() => validateEmail(123)).toThrow('Email must be a String');
    });
});
