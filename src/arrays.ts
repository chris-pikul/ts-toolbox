/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox or big-toolbox) is under the MIT license. See the 
 * file at the project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 * 
 * Provides utilities for manipulating Arrays.
 * 
 * @module Arrays
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

/**
 * Ensures that the input array is a given fixed-length size. The results are a
 * new array regardless of if sizing was needed.
 * 
 * If the input array is smaller than the desired size then new values are added
 * to the end of the given `fillValue` value.
 * 
 * If the input array is larger than the desired size, it is "cropped" to the
 * desired size and returned.
 * 
 * If the input array is the desired size, then it is cloned and returned. 
 * 
 * @param {Array} arr Input array
 * @param {number} size Desired length
 * @param {any} [fillValue=null] New value to fill empty indices with 
 * @returns {Array} New array
 * @throws {Error} If the size argument is negative
 */
export function arrayEnsureSize(arr:Array<any>, size:number, fillValue:any = null):Array<any> {
  if(size < 0)
    throw new Error(`arrayEnsureSize() was supplied a negative size, must be a positive value.`);
  
  if(arr.length < size) {
    const fill:Array<any> = (new Array(size - arr.length)).fill(fillValue);
    return arr.concat(fill);
  } else if(arr.length > size) {
    return arr.slice(0, size);
  }

  return [ ...arr ];
}
