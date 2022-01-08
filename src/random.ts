/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox or big-toolbox) is under the MIT license. See the 
 * file at the project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 * 
 * Provides utilities for random operations.
 * 
 * @module Random
 */

/**
 * Generates a random float within the boundaries specified.
 * 
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number} Random float within range
 */
export const randomRange = (min:number, max:number):number => {
  const range = max - min;
  return (Math.random() * range) + min;
};

/**
 * Generates a random integer that is positive. Within the safe-integer
 * boundaries.
 * 
 * @returns {number} Random positive integer
 */
export const randomPositiveInteger = ():number => (Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER));

/**
 * Generates a random integer that is negative. Within the safe-integer
 * boundaries.
 * 
 * @returns {number} Random negative integer
 */
export const randomNegativeInteger = ():number => (-randomPositiveInteger());

/**
 * Generates a random integer that may be positive or negative. Within the
 * safe-integer boundaries.
 * 
 * @returns {number} Random integer
 */
export const randomInteger = ():number => {
  const randFloat = (Math.random() * 2) - 1;
  return Math.trunc(randFloat * Number.MAX_SAFE_INTEGER);
};

/**
 * Generates a random integer within the boundaries supplied.
 * 
 * If floating-point numbers are provided they will be **rounded** to form an
 * integer.
 * 
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number} Random integer
 */
export const randomIntegerRange = (min:number, max:number):number => {
  const minInt = Math.round(min);
  const maxInt = Math.round(max);
  const range = maxInt - minInt;
  return Math.trunc((Math.random() * range) + min);
};

/**
 * Generates a random boolean.
 * 
 * @returns {boolean} Random boolean
 */
export const randomBoolean = ():boolean => (Math.random() >= 0.5);

/**
 * Generates a random alpha-numeric character. These are in range of 
 * 0-9, A-Z, a-z.
 * 
 * @returns {string} Random character
 */
export const randomAlphaNumericCharacter = ():string => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return chars.charAt(randomIntegerRange(0, chars.length));
};

/**
 * Generates a random character. These are in the range of the UTF-16 table
 * for 32..126 which includes the space character. This range maps to common
 * ASCII characters. 
 * 
 * @param {boolean} includeSpace If true, the space character will be included
 * @returns {string} Random character
 */
export const randomCharacter = (includeSpace = false):string => {
  const start = includeSpace ? 32 : 33;
  const randInt = randomIntegerRange(start, 126);
  return String.fromCharCode(randInt);
};

/**
 * Generates a string of random length.
 * 
 * If the `alphaNumeric` option is true, then only the alpha-numeric characters
 * (0-9, A-Z, a-z) will be used. If false, then any ASCII character can be used.
 * Note, that if not alphaNumeric, spaces will not be included in the character
 * set.
 * 
 * @param {number} length Length of the string
 * @param {boolean} alphaNumeric If true, will only be alpha-numeric
 * @returns {string} Random string
 */
export const randomString = (length:number, alphaNumeric = true):string => {
  const str:string[] = new Array(length);
  for(let ind = 0; ind < length; ind++)
    str[ind] = alphaNumeric ? randomAlphaNumericCharacter() : randomCharacter();
  return str.join('');
};

/**
 * Generates a random Base-36 string.
 * 
 * @returns {string} Random identifier
 */
export const createUID = ():string => (randomPositiveInteger().toString(36));
