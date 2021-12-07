/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */
/**
 * Tests if the input is a whole-integer number.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {boolean} True if number is whole integer
 */
export declare const isInteger: (input: number) => boolean;
/**
 * Tests if the input is a floating-point number.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @see {@link isInteger}
 * @param {number} input Number to test
 * @returns {boolean} True if number is floating point
 */
export declare const isFloat: (input: number) => boolean;
/**
 * Tests if a number is positive, this is 0 inclusive.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {boolean} True if number is positive
 */
export declare const isPositive: (input: number) => boolean;
/**
 * Tests if a number is negative, this does not include 0.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {boolean} True if number is negative
 */
export declare const isNegative: (input: number) => boolean;
/**
 * Tests if the given number is odd. Will ignore floating-point decimals.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to test
 * @returns {number} True if number is odd
 */
export declare const isOdd: (input: number) => boolean;
/**
 * Tests if the given number is even. Will ignore floating-point decimals.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @see {@link isOdd}
 * @param {number} input Number to test
 * @returns {boolean} True if number is even
 */
export declare const isEven: (input: number) => boolean;
/**
 * Tests if the given `input` number is a multiple of `multiple`.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number}input Number to test
 * @param {number} multiple Multiplier to compare against
 * @returns {number} True if number is multiple
 */
export declare const isMultipleOf: (input: number, multiple: number) => boolean;
/**
 * Ensures a number is positive by maxing it against 0.
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Positive number, or "-1" if the input was invalid
 */
export declare const positive: (input: number) => number;
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
export declare const clampFloat: (input: number, min?: number, max?: number) => number;
/**
 * Clamps a value into a unit float (0..1)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Value between 0..1, or 0 if invalid input
 */
export declare const clampUnit: (input: number) => number;
/**
 * Clamps a value into a floating-point number for degrees (0..360)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Value between 0..360
 */
export declare const clampDegree: (input: number) => number;
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
export declare const clampInteger: (input: number, min?: number, max?: number) => number;
/**
 * Clamps an incoming number into a byte integer (0..255)
 *
 * __Type-checks regardless of TypeScript__
 *
 * @param {number} input Number to clamp
 * @returns {number} Number as integer 0..255
 */
export declare const clampByte: (input: number) => number;
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
export declare const clampBits: (input: number, bits: number) => number;
/**
 * Rounds a number from a given number of decimal places. Example:
 * `precisionRound(3.14159, 2) == 3.14`
 *
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
export declare const precisionRound: (input: number, decimals?: number) => number;
/**
 * Floors a number from a given number of decimal places. Example:
 * `precisionFloor(3.1415, 2) == 3.10`
 *
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
export declare const precisionFloor: (input: number, decimals?: number) => number;
/**
 * Ceils a number from a given number of decimal places. Example:
 * `precisionCeil(3.1415, 2) == 3.19`
 *
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
export declare const precisionCeil: (input: number, decimals?: number) => number;
/**
 * Wraps a value around and returns the remainder (modulo) while also performing
 * a precision-flooring by truncating by the number of decimal places provided.
 *
 * @param {number} input Input number
 * @param {number} mod Modulo number
 * @param {number} decimals How many decimal places to keep
 * @returns {number} Calculated number
 */
export declare const precisionModulo: (input: number, mod: number, decimals?: number) => number;
/**
 * Ensures that the input value lies within a range of 0 to `range`.
 * If the input is negative it is wrapped around circularly until it lies within
 * the given range.
 *
 * @param {number} input Input number
 * @param {number} range Maximum positive range
 * @returns {number} Within 0 and `range`
 */
export declare const wrapToPositive: (input: number, range: number) => number;
/**
 * Checks if two numbers are equal within a set tolerance. This is useful for
 * floating-point arithmatic.
 *
 * @param {number} first First number
 * @param {number} second Second number
 * @param {number} [tolerance=Number.EPSILON] Tolerance
 * @returns {boolean} True if equals within tolerance
 */
export declare const equals: (first: number, second: number, tolerance?: number) => boolean;
/**
 * Converts degrees to radians
 *
 * @param {number} deg Degrees
 * @returns {number} Radians
 */
export declare const degToRad: (deg: number) => number;
/**
 * Converts radians to degrees
 *
 * @param {number} rad Radians
 * @returns {number} Degrees
 */
export declare const radToDeg: (rad: number) => number;
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
export declare const linearInterp: (start: number, end: number, alpha: number) => number;
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
export declare const inverseLinearInterp: (start: number, end: number, delta: number) => number;
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
export declare const rescale: (value: number, fromStart: number, fromEnd: number, toStart: number, toEnd: number) => number;
