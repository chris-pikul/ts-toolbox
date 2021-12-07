/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for random operations.
 */
/**
 * Generates a random float within the boundaries specified.
 *
 * @param min [number] Minimum value
 * @param max [number] Maximum value
 * @returns [number] Random float within range
 */
export declare const randomRange: (min: number, max: number) => number;
/**
 * Generates a random integer that is positive.
 *
 * @returns [number] Random positive integer
 */
export declare const randomPositiveInteger: () => number;
/**
 * Generates a random integer that is negative.
 *
 * @returns [number] Random negative integer
 */
export declare const randomNegativeInteger: () => number;
/**
 * Generates a random integer that may be positive or negative.
 *
 * @returns [number] Random integer
 */
export declare const randomInteger: () => number;
/**
 * Generates a random integer within the boundaries supplied.
 *
 * If floating-point numbers are provided they will be **rounded** to form an
 * integer.
 *
 * @param min [number] Minimum value
 * @param max [number] Maximum value
 * @returns [number] Random integer
 */
export declare const randomIntegerRange: (min: number, max: number) => number;
/**
 * Generates a random boolean.
 *
 * @returns [boolean] Random boolean
 */
export declare const randomBoolean: () => boolean;
/**
 * Generates a random alpha-numeric character. These are in range of
 * 0-9, A-Z, a-z.
 *
 * @returns [string] Random character
 */
export declare const randomAlphaNumericCharacter: () => string;
/**
 * Generates a random character. These are in the range of the UTF-16 table
 * for 32..126 which includes the space character. This range maps to common
 * ASCII characters.
 *
 * @param includeSpace [boolean] If true, the space character will be included
 * @returns [string] Random character
 */
export declare const randomCharacter: (includeSpace?: boolean) => string;
/**
 * Generates a string of random length.
 *
 * If the `alphaNumeric` option is true, then only the alpha-numeric characters
 * (0-9, A-Z, a-z) will be used. If false, then any ASCII character can be used.
 * Note, that if not alphaNumeric, spaces will not be included in the character
 * set.
 *
 * @param length [number] Length of the string
 * @param alphaNumeric [boolean] If true, will only be alpha-numeric
 * @returns [string] Random string
 */
export declare const randomString: (length: number, alphaNumeric?: boolean) => string;
/**
 * Generates a random Base-36 string.
 *
 * @returns [string] random identifier
 */
export declare const createUID: () => string;
