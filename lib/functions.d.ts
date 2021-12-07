/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for functions.
 */
/**
 * Simple type for anonymous functions, intended for use with callbacks
 */
export declare type CallbackFunction = (...args: any) => any;
/**
 * Simple type for anonymous functions, where no return is expected
 */
export declare type CallbackFunctionVoid = (...args: any) => void;
/**
 * Describes a function that has been wrapped by another function
 */
export declare type WrappedFunction<T extends CallbackFunction> = (...args: Parameters<T>) => ReturnType<T>;
export declare type WrappedFunctionVoid<T extends CallbackFunctionVoid> = (...args: Parameters<T>) => void;
/**
 * Throttles a function by a given millisecond delay.
 *
 * This means that any subsequent calls during this delay are ignored until
 * enough time has elapsed. The first call will be executed as normal.
 *
 * @param {function} cb Callback to execute
 * @param {number} delay Milliseconds to delay
 * @returns {function} New function
 */
export declare function throttle<CB extends CallbackFunction>(cb: CB, delay: number): WrappedFunction<CB>;
/**
 * Debounces a function using the given millisecond delay.
 *
 * This means, that until the given delay has elapsed with no further calls
 * to this event, nothing will be performed. Once no more calls to this event
 * are performed for the delay duration, then the function will be called.
 *
 * @param {function} cb Callback to execute
 * @param {number} delay illiseconds to delay
 * @returns {function} New callback function
 */
export declare function debounce<CB extends CallbackFunctionVoid>(cb: CB, delay: number): WrappedFunctionVoid<CB>;
