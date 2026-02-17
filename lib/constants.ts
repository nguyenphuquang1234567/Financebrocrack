/**
 * App-wide constants and configuration values
 */

export const APP_NAME = 'Financebrocrack' as const;
export const APP_DESCRIPTION = 'Master Your Finance Interviews' as const;

/**
 * Category slugs for routing
 */
export const CATEGORY_SLUGS = {
    CORPORATE_FINANCE: 'corporate-finance',
    INVESTMENT_BANKING: 'ib',
    ACCOUNTING: 'accounting',
} as const;

/**
 * Test type slugs
 */
export const TEST_TYPE_SLUGS = {
    TECHNICAL: 'technical',
    BEHAVIORAL: 'behavioral',
} as const;

/**
 * Difficulty levels
 */
export const DIFFICULTY_LEVELS = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
} as const;



/**
 * Type exports for better TypeScript inference
 */
export type CategorySlug = typeof CATEGORY_SLUGS[keyof typeof CATEGORY_SLUGS];
export type TestTypeSlug = typeof TEST_TYPE_SLUGS[keyof typeof TEST_TYPE_SLUGS];
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[keyof typeof DIFFICULTY_LEVELS];
