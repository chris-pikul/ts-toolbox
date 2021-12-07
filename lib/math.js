"use strict";
/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rescale = exports.inverseLinearInterp = exports.linearInterp = exports.radToDeg = exports.degToRad = exports.equals = exports.wrapToPositive = exports.precisionModulo = exports.precisionCeil = exports.precisionFloor = exports.precisionRound = exports.clampBits = exports.clampByte = exports.clampInteger = exports.clampDegree = exports.clampUnit = exports.clampFloat = exports.positive = exports.isMultipleOf = exports.isEven = exports.isOdd = exports.isNegative = exports.isPositive = exports.isFloat = exports.isInteger = void 0;
/**
 * Tests if the input is a whole-integer number.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {boolean} True if number is whole integer
 */
const isInteger = (input) => {
    if (!input || typeof input !== 'number')
        return false;
    return Number.isInteger(input);
};
exports.isInteger = isInteger;
/**
 * Tests if the input is a floating-point number.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @see {@link isInteger}
 * @param {number} input Number to test
 * @returns {boolean} True if number is floating point
 */
const isFloat = (input) => (!(0, exports.isInteger)(input));
exports.isFloat = isFloat;
/**
 * Tests if a number is positive, this is 0 inclusive.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {boolean} True if number is positive
 */
const isPositive = (input) => {
    if (!input || typeof input !== 'number')
        return false;
    return input >= 0;
};
exports.isPositive = isPositive;
/**
 * Tests if a number is negative, this does not include 0.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {boolean} True if number is negative
 */
const isNegative = (input) => {
    if (!input || typeof input !== 'number')
        return false;
    return input < 0;
};
exports.isNegative = isNegative;
/**
 * Tests if the given number is odd. Will ignore floating-point decimals.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {number} True if number is odd
 */
const isOdd = (input) => {
    if (!input || typeof input !== 'number')
        return false;
    return ((input % 2) === 1);
};
exports.isOdd = isOdd;
/**
 * Tests if the given number is even. Will ignore floating-point decimals.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @see {@link isOdd}
 * @param {number} input Number to test
 * @returns {boolean} True if number is even
 */
const isEven = (input) => (!(0, exports.isOdd)(input));
exports.isEven = isEven;
/**
 * Tests if the given `input` number is a multiple of `multiple`.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number}input Number to test
 * @param {number} multiple Multiplier to compare against
 * @returns {number} True if number is multiple
 */
const isMultipleOf = (input, multiple) => {
    if (!input || typeof input !== 'number')
        return false;
    if (!multiple || typeof multiple !== 'number')
        return false;
    return ((input % multiple) === 0);
};
exports.isMultipleOf = isMultipleOf;
/**
 * Ensures a number is positive by maxing it against 0.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Positive number, or "-1" if the input was invalid
 */
const positive = (input) => {
    if (!input || typeof input !== 'number')
        return -1;
    return Math.max(input, 0);
};
exports.positive = positive;
/**
 * Clamps the given value to be within the given range.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @param {number} min Minimum value, defaults to 0
 * @param {number} max Maximum value, defaults to Number.MAX_VALUE
 * @returns {number} The number, clamped between min, and max.
 *  Or `Number.MAX_VALUE` if the input was invalid.
 */
const clampFloat = (input, min = 0, max = Number.MAX_VALUE) => {
    if (!input || typeof input !== 'number')
        return Number.MAX_VALUE;
    return Math.min(Math.max(input, min), max);
};
exports.clampFloat = clampFloat;
/**
 * Clamps a value into a unit float (0..1)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Value between 0..1, or 0 if invalid input
 */
const clampUnit = (input) => {
    if (!input || typeof input !== 'number')
        return 0;
    (0, exports.clampFloat)(input, 0.0, 1.0);
};
exports.clampUnit = clampUnit;
/**
 * Clamps a value into a floating-point number for degrees (0..360)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Value between 0..360
 */
const clampDegree = (input) => (0, exports.clampFloat)(input, 0.0, 360.0);
exports.clampDegree = clampDegree;
/**
 * Clamps the given value to be within the given range.
 * Will truncate the value to the integral value (removing any fractionals)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @param {number} min Minimum value, defaults to 0
 * @param {number} max Maximum value, defaults to Number.MAX_VALUE
 * @returns {number} The number, clamped between min, and max.
 *  Or "Number.MAX_VALUE" if the input was invalid.
 */
const clampInteger = (input, min = 0, max = Number.MAX_VALUE) => {
    if (!input || typeof input !== 'number')
        return Number.MAX_VALUE;
    return Math.trunc((0, exports.clampFloat)(input, min, max));
};
exports.clampInteger = clampInteger;
/**
 * Clamps an incoming number into a byte integer (0..255)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Number as integer 0..255
 */
const clampByte = (input) => (0, exports.clampInteger)(input, 0, 255);
exports.clampByte = clampByte;
/**
 * Clamps an incoming number between 0 and the maximum value provided by a
 * number generated from the number of bits.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @param {number} bits Number of bits to clamp to
 * @returns {number} Number as integer
 */
const clampBits = (input, bits) => {
    const cBits = bits < 1 ? 1 : bits;
    const max = 2 << (cBits - 1);
    return (0, exports.clampInteger)(input, 0, max);
};
exports.clampBits = clampBits;
/**
 * Rounds a number from a given number of decimal places. Example:
 * `precisionRound(3.14159, 2) == 3.14`
 *
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
const precisionRound = (input, decimals = 0) => {
    const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
    return Math.round(input * mult) / mult;
};
exports.precisionRound = precisionRound;
/**
 * Floors a number from a given number of decimal places. Example:
 * `precisionFloor(3.1415, 2) == 3.10`
 *
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
const precisionFloor = (input, decimals = 0) => {
    const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
    return Math.floor(input * mult) / mult;
};
exports.precisionFloor = precisionFloor;
/**
 * Ceils a number from a given number of decimal places. Example:
 * `precisionCeil(3.1415, 2) == 3.19`
 *
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
const precisionCeil = (input, decimals = 0) => {
    const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
    return Math.ceil(input * mult) / mult;
};
exports.precisionCeil = precisionCeil;
/**
 * Wraps a value around and returns the remainder (modulo) while also performing
 * a precision-flooring by truncating by the number of decimal places provided.
 *
 * @param {number} input Input number
 * @param {number} mod Modulo number
 * @param {number} decimals How many decimal places to keep
 * @returns {number} Calculated number
 */
const precisionModulo = (input, mod, decimals = 0) => {
    const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
    return Math.floor((input * mult) % (mod * mult)) / mult;
};
exports.precisionModulo = precisionModulo;
/**
 * Ensures that the input value lies within a range of 0 to `range`.
 * If the input is negative it is wrapped around circularly until it lies within
 * the given range.
 *
 * @param {number} input Input number
 * @param {number} range Maximum positive range
 * @returns {number} Within 0 and `range`
 */
const wrapToPositive = (input, range) => {
    if (input >= 0)
        return input % range;
    let remainder = Math.abs(input);
    while (remainder > range)
        remainder -= range;
    return range - remainder;
};
exports.wrapToPositive = wrapToPositive;
/**
 * Checks if two numbers are equal within a set tolerance. This is useful for
 * floating-point arithmatic.
 *
 * @param {number} first First number
 * @param {number} second Second number
 * @param {number} [tolerance=Number.EPSILON] Tolerance
 * @returns {boolean} True if equals within tolerance
 */
const equals = (first, second, tolerance = Number.EPSILON) => (Math.abs(first - second) < tolerance);
exports.equals = equals;
/**
 * Converts degrees to radians
 *
 * @param {number} deg Degrees
 * @returns {number} Radians
 */
const degToRad = (deg) => ((deg * Math.PI) / 180.0);
exports.degToRad = degToRad;
/**
 * Converts radians to degrees
 *
 * @param {number} rad Radians
 * @returns {number} Degrees
 */
const radToDeg = (rad) => ((rad * 180.0) / Math.PI);
exports.radToDeg = radToDeg;
/**
 * Linearly interpolates between the start and end values given an alpha factor.
 * An `alpha` of 0 returns the `start`, 1 returns the `end` value, and 0.5 is
 * halfway between.
 *
 * @param {number} start Starting number
 * @param {number} end End number
 * @param {number} alpha Factor between start and end to return
 * @returns {number} Resulting value between start and end
 */
const linearInterp = (start, end, alpha) => ((start * (1 - alpha)) + (end * alpha));
exports.linearInterp = linearInterp;
/**
 * Inversly performs the linear interpolation. The `delta` is expected to be a
 * whole value between the `start` and `end` values. The result of which is the
 * alpha factor of where the `delta` value lies on the unit (0..1) scale.
 *
 * Essentially if you want to find how far between two-values a given number is,
 * this is that function.
 *
 * ex: `inverseLinearInterp(50, 100, 75) == 0.5`
 *
 * @param {number} start Starting number
 * @param {number} end End number
 * @param {number} delta Value that lies between start and end
 * @returns {number} Alpha factor 0..1
 */
const inverseLinearInterp = (start, end, delta) => {
    const pos = (delta - start) / (end - start);
    return (0, exports.clampFloat)(pos, 0.0, 1.0);
};
exports.inverseLinearInterp = inverseLinearInterp;
/**
 * Re-scales the delta of value within the first range, onto the second range.
 * Essentially finds the alpha in which `value` lies within the first range,
 * and scales that onto the target range.
 *
 * @param {number} value Value within first range
 * @param {number} fromStart Current range's start value
 * @param {number} fromEnd Current range's end value
 * @param {number} toStart Target range's end value
 * @param {number} toEnd Target range's end value
 * @returns {number} Delta result of value re-scaled onto the target range
 */
const rescale = (value, fromStart, fromEnd, toStart, toEnd) => ((0, exports.linearInterp)(toStart, toEnd, (0, exports.inverseLinearInterp)(fromStart, fromEnd, value)));
exports.rescale = rescale;
//# sourceMappingURL=math.js.map