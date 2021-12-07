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
export function inPlaceConcat<Type>(target:Array<Type>, ...argArr:Array<Array<Type>>):number {
  return Math.max.apply(
    null,
    argArr.map((arr:Array<Type>) => (Array.prototype.push.apply(target, arr))),
  );
};

/**
 * Attempts to flatten an array of sub-arrays into a single flat array.
 * This is mostly a polyfill for the `Array.flat()` function.
 * 
 * @param {Array} arr Parent array
 * @param {number} [depth=1] How far in depth should we flatten
 * @returns {Array} New array
 */
export function flattenArray<Type>(arr:Array<any>, depth = 1):Array<Type> {
  if(Array.isArray(arr) === false)
    return [];

  if(depth > 0) {
    return arr.reduce((acc:Array<Type>, val:unknown) => {
      if(Array.isArray(val))
        return acc.concat(flattenArray<Type>(val, depth - 1));
      return [ ...acc, val ];
    }, [] as Array<Type>);
  }
  return arr.slice();
};
