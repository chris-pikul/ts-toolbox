/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */
/**
 * Performs an in-place concatenation using `Array.prototype.push()`.
 * This is useful for constant array variables.
 * Accepts multiple parameters, each array will be added individually.
 *
 * @param {Array} target The "this" or target array
 * @returns {number} New length of the target array
 */
export declare function inPlaceConcat<Type>(target: Array<Type>, ...argArr: Array<Array<Type>>): number;
/**
 * Attempts to flatten an array of sub-arrays into a single flat array.
 * This is mostly a polyfill for the `Array.flat()` function.
 *
 * @param {Array} arr Parent array
 * @param {number} [depth=1] How far in depth should we flatten
 * @returns {Array} New array
 */
export declare function flattenArray<Type>(arr: Array<any>, depth?: number): Array<Type>;
