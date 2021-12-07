"use strict";
/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenArray = exports.inPlaceConcat = void 0;
/**
 * Performs an in-place concatenation using `Array.prototype.push()`.
 * This is useful for constant array variables.
 * Accepts multiple parameters, each array will be added individually.
 *
 * @param {Array} target The "this" or target array
 * @returns {number} New length of the target array
 */
function inPlaceConcat(target, ...argArr) {
    return Math.max.apply(null, argArr.map((arr) => (Array.prototype.push.apply(target, arr))));
}
exports.inPlaceConcat = inPlaceConcat;
;
/**
 * Attempts to flatten an array of sub-arrays into a single flat array.
 * This is mostly a polyfill for the `Array.flat()` function.
 *
 * @param {Array} arr Parent array
 * @param {number} [depth=1] How far in depth should we flatten
 * @returns {Array} New array
 */
function flattenArray(arr, depth = 1) {
    if (Array.isArray(arr) === false)
        return [];
    if (depth > 0) {
        return arr.reduce((acc, val) => {
            if (Array.isArray(val))
                return acc.concat(flattenArray(val, depth - 1));
            return val;
        }, []);
    }
    return arr.slice();
}
exports.flattenArray = flattenArray;
;
//# sourceMappingURL=arrays.js.map