"use strict";
/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.throttle = void 0;
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
function throttle(cb, delay) {
    let lastTime = 0;
    // Wrap the callback with a new function
    return function () {
        const now = Date.now();
        if (now - lastTime < delay)
            return;
        lastTime = now;
        return cb.apply(this, arguments);
    };
}
exports.throttle = throttle;
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
function debounce(cb, delay) {
    let timerID;
    return function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        const args = arguments;
        if (timerID)
            clearTimeout(timerID);
        timerID = setTimeout(() => {
            cb.apply(context, args);
            timerID = null;
        }, delay);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=functions.js.map