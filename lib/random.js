"use strict";
/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for random operations.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUID = exports.randomString = exports.randomCharacter = exports.randomAlphaNumericCharacter = exports.randomBoolean = exports.randomIntegerRange = exports.randomInteger = exports.randomNegativeInteger = exports.randomPositiveInteger = exports.randomRange = void 0;
/**
 * Generates a random float within the boundaries specified.
 *
 * @param min [number] Minimum value
 * @param max [number] Maximum value
 * @returns [number] Random float within range
 */
const randomRange = (min, max) => {
    const range = max - min;
    return (Math.random() * range) + min;
};
exports.randomRange = randomRange;
/**
 * Generates a random integer that is positive.
 *
 * @returns [number] Random positive integer
 */
const randomPositiveInteger = () => (Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER));
exports.randomPositiveInteger = randomPositiveInteger;
/**
 * Generates a random integer that is negative.
 *
 * @returns [number] Random negative integer
 */
const randomNegativeInteger = () => (-(0, exports.randomPositiveInteger)());
exports.randomNegativeInteger = randomNegativeInteger;
/**
 * Generates a random integer that may be positive or negative.
 *
 * @returns [number] Random integer
 */
const randomInteger = () => {
    const randFloat = (Math.random() * 2) - 1;
    return Math.trunc(randFloat * Number.MAX_SAFE_INTEGER);
};
exports.randomInteger = randomInteger;
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
const randomIntegerRange = (min, max) => {
    const minInt = Math.round(min);
    const maxInt = Math.round(max);
    const range = maxInt - minInt;
    return Math.trunc((Math.random() * range) + min);
};
exports.randomIntegerRange = randomIntegerRange;
/**
 * Generates a random boolean.
 *
 * @returns [boolean] Random boolean
 */
const randomBoolean = () => (Math.random() >= 0.5);
exports.randomBoolean = randomBoolean;
/**
 * Generates a random alpha-numeric character. These are in range of
 * 0-9, A-Z, a-z.
 *
 * @returns [string] Random character
 */
const randomAlphaNumericCharacter = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return chars.charAt((0, exports.randomIntegerRange)(0, chars.length));
};
exports.randomAlphaNumericCharacter = randomAlphaNumericCharacter;
/**
 * Generates a random character. These are in the range of the UTF-16 table
 * for 32..126 which includes the space character. This range maps to common
 * ASCII characters.
 *
 * @param includeSpace [boolean] If true, the space character will be included
 * @returns [string] Random character
 */
const randomCharacter = (includeSpace = false) => {
    const start = includeSpace ? 32 : 33;
    const randInt = (0, exports.randomIntegerRange)(start, 126);
    return String.fromCharCode(randInt);
};
exports.randomCharacter = randomCharacter;
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
const randomString = (length, alphaNumeric = true) => {
    const str = new Array(length);
    for (let ind = 0; ind < length; ind++)
        str[ind] = alphaNumeric ? (0, exports.randomAlphaNumericCharacter)() : (0, exports.randomCharacter)();
    return str.join('');
};
exports.randomString = randomString;
/**
 * Generates a random Base-36 string.
 *
 * @returns [string] random identifier
 */
const createUID = () => ((0, exports.randomPositiveInteger)().toString(36));
exports.createUID = createUID;
//# sourceMappingURL=random.js.map