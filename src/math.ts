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
export const isInteger = (input:number):boolean => {
  if(!input || typeof input !== 'number')
    return false;
  return Number.isInteger(input);
};

/**
 * Tests if the input is a floating-point number.
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @see {@link isInteger}
 * @param {number} input Number to test
 * @returns {boolean} True if number is floating point
 */
export const isFloat = (input:number):boolean => {
  if(!input || typeof input !== 'number')
    return false;
  return !Number.isInteger(input);
};

/**
 * Tests if a number is positive, this is 0 inclusive.
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to test
 * @returns {boolean} True if number is positive
 */
export const isPositive = (input:number):boolean => {
  if(!input || typeof input !== 'number')
    return false;
  return input >= 0;
};

/**
 * Tests if a number is negative, this does not include 0.
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to test
 * @returns {boolean} True if number is negative
 */
export const isNegative = (input:number):boolean => {
  if(!input || typeof input !== 'number')
    return false;
  return input < 0;
};

/**
 * Tests if the given number is odd. For integer numbers this is straight
 * forward and only requires the input number. For floating-point numbers the
 * additional `decimals` option will truncate the float to that many decimal
 * positions, and then check the whole number for oddness. The default number
 * of decimal places is 2. Negative numbers are absoluted, so they are treated
 * equally.
 * 
 * Examples:
 * ```
 * isOdd(23) === true
 * isOdd(3.1415) === false
 * isOdd(3.1415, 3) === true
 * ```
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to test
 * @param {number} [decimals=2] Number of decimal places to truncate to
 * @returns {number} True if number is odd
 */
export const isOdd = (input:number, decimals = 2):boolean => {
  if(!input || typeof input !== 'number')
    return false;
  
  if(Number.isInteger(input))
    return Math.abs(input % 2) === 1;

  const exp = decimals > 0 ? Math.pow(10, decimals) : 1;
  return Math.abs(Math.trunc(input * exp) % 2) === 1;
};

/**
 * Tests if the given number is even. For integer numbers this is straight
 * forward and only requires the input number. For floating-point numbers the
 * additional `decimals` option will truncate the float to that many decimal
 * positions, and then check the whole number for eveness. The default number
 * of decimal places is 2. Negative numbers are absoluted, so they are treated
 * equally.
 * 
 * Examples:
 * ```
 * isEven(24) === true
 * isEven(3.1415) === true
 * isEven(3.1415, 3) === false
 * ```
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @see {@link isOdd}
 * @param {number} input Number to test
 * @param {number} [decimals=2] Number of decimal points to truncate
 * @returns {boolean} True if number is even
 */
export const isEven = (input:number, decimals = 2):boolean => {
  if(!input || typeof input !== 'number')
    return false;

  if(Number.isInteger(input))
    return Math.abs(input % 2) === 0;

  const exp = decimals > 0 ? Math.pow(10, decimals) : 1;
  return Math.abs(Math.trunc(input * exp) % 2) === 0;
};

/**
 * Tests if the given `input` number is a multiple of `multiple`. It will treat
 * negatives the same. Ex. `isMultiple(-6, 2) === true`.
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number}input Number to test
 * @param {number} multiple Multiplier to compare against
 * @returns {number} True if number is multiple
 */
export const isMultiple = (input:number, multiple:number):boolean => {
  if(!input || typeof input !== 'number')
    return false;
  if(!multiple || typeof multiple !== 'number')
    return false;

  return Math.abs(input % multiple) === 0;
};

/**
 * Ensures a number is positive by maxing it against 0. This is not the same as
 * absoluting (`Math.abs()`). Any negatives will return as 0.
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to clamp
 * @returns {number} Positive number, or "-1" if the input was invalid
 */
export const positive = (input:number):number => {
  if(!input || typeof input !== 'number')
    return -1;
  return Math.max(input, 0);
};

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
export const clampFloat = (input:number, min = 0, max:number = Number.MAX_VALUE):number => {
  if(!input || typeof input !== 'number')
    return Number.MAX_VALUE;
  return Math.min(Math.max(input, min), max);
};

/**
 * Clamps a value into a unit float (0..1)
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to clamp
 * @returns {number} Value between 0..1, or 0 if invalid input
 */
export const clampUnit = (input:number):number => {
  if(!input || typeof input !== 'number')
    return 0;
  return Math.min(Math.max(input, 0.0), 1.0);
};

/**
 * Clamps a value into a floating-point number for degrees (0..360).
 * Returns 0 on invalid input.
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to clamp
 * @returns {number} Value between 0..360
 */
export const clampDegree = (input:number):number => {
  if(!input || typeof input !== 'number')
    return 0;
  return Math.min(Math.max(input, 0.0), 360.0);
};

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
export const clampInteger = (input:number, min = 0, max:number = Number.MAX_VALUE):number => {
  if(!input || typeof input !== 'number')
    return Number.MAX_VALUE;
  return Math.trunc(clampFloat(input, min, max));
};

/**
 * Clamps an incoming number into a byte integer (0..255)
 * 
 * __Type-checks regardless of TypeScript__
 * 
 * @param {number} input Number to clamp
 * @returns {number} Number as integer 0..255
 */
export const clampByte = (input:number):number => clampInteger(input, 0, 255);

/**
 * Rounds a number from a given number of decimal places. Example:
 * `precisionRound(3.14159, 2) == 3.14`
 * 
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
export const precisionRound = (input:number, decimals = 0):number => {
  const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
  return Math.round(input * mult) / mult;
};

/**
 * Floors a number from a given number of decimal places. Example:
 * `precisionFloor(3.1415, 2) == 3.14`
 * 
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
export const precisionFloor = (input:number, decimals = 0):number => {
  const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
  return Math.floor(input * mult) / mult;
};

/**
 * Ceils a number from a given number of decimal places. Example:
 * `precisionCeil(3.1415, 2) == 3.15`
 * 
 * @param {number} input Input number
 * @param {number} decimals Which decimal place to round from
 * @returns {number} Calculated number
 */
export const precisionCeil = (input:number, decimals = 0):number => {
  const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
  return Math.ceil(input * mult) / mult;
};

/**
 * Wraps a value around and returns the remainder (modulo) while also performing
 * a precision-flooring by truncating by the number of decimal places provided.
 * 
 * @param {number} input Input number
 * @param {number} mod Modulo number
 * @param {number} decimals How many decimal places to keep
 * @returns {number} Calculated number
 */
export const precisionModulo = (input:number, mod:number, decimals = 0):number => {
  const mult = decimals > 0 ? Math.pow(10, decimals) : 1;
  return Math.floor((input * mult) % (mod * mult)) / mult;
};

/**
 * Ensures that the input value lies within a range of 0 to `range`.
 * If the input is negative it is wrapped around circularly until it lies within
 * the given range.
 * 
 * @param {number} input Input number
 * @param {number} range Maximum positive range
 * @returns {number} Within 0 and `range`
 */
export const wrapToPositive = (input:number, range:number):number => {
  if(input >= 0)
    return input % range;
  
  let remainder = Math.abs(input);
  while(remainder > range)
    remainder -= range;
  
  return range - remainder;
};

/**
 * Checks if two numbers are equal within a set tolerance. This is useful for
 * floating-point arithmatic.
 * 
 * @param {number} first First number
 * @param {number} second Second number
 * @param {number} [tolerance=Number.EPSILON] Tolerance
 * @returns {boolean} True if equals within tolerance
 */
export const equals = (first:number, second:number, tolerance:number = Number.EPSILON):boolean => (
  Math.abs(first - second) < tolerance
);

/**
 * Converts degrees to radians
 * 
 * @param {number} deg Degrees
 * @returns {number} Radians
 */
export const degToRad = (deg:number):number => ((deg * Math.PI) / 180.0);

/**
 * Converts radians to degrees
 * 
 * @param {number} rad Radians
 * @returns {number} Degrees
 */
export const radToDeg = (rad:number):number => ((rad * 180.0) / Math.PI);

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
export const linearInterp = (start:number, end:number, alpha:number):number => ((start * (1 - alpha)) + (end * alpha));

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
export const inverseLinearInterp = (start:number, end:number, delta:number):number => {
  const pos = (delta - start) / (end - start);
  return clampFloat(pos, 0.0, 1.0);
};

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
export const rescale = (value:number, fromStart:number, fromEnd:number, toStart:number, toEnd:number):number => (
  linearInterp(toStart, toEnd, inverseLinearInterp(fromStart, fromEnd, value))
);
