export interface EmailValidationResult {
    valid: boolean;
    error: string | null;
}

export function validateEmail(email: string) : EmailValidationResult;

