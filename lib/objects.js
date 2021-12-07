"use strict";
/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for objects, their types, and object operations.
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SimpleMap_dict, _SimpleMap_hasEntries;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMap = exports.objectMatchesLayout = exports.objectsAreSameType = exports.objectNestedAssign = void 0;
/**
 * Takes a target object and recursively assigns source objects by traversing
 * their children and appling them.
 *
 * @param target [object] Target object to apply to
 * @param sources [...object] Source objects to apply
 * @returns [object] New object
 */
// eslint-disable-next-line max-len
const objectNestedAssign = (target, ...sources) => {
    sources.forEach((src) => {
        Object.keys(src).forEach((key) => {
            const srcVal = src[key];
            const tgtVal = target[key];
            if (tgtVal && typeof tgtVal === 'object' && !Array.isArray(tgtVal) && srcVal && typeof srcVal === 'object' && !Array.isArray(srcVal))
                target[key] = (0, exports.objectNestedAssign)(tgtVal, srcVal);
            else
                target[key] = srcVal;
        });
    });
    return target;
};
exports.objectNestedAssign = objectNestedAssign;
/**
 * Attempts to check if the two provided parameters are the same _type_.
 * For primitives this is a simple `typeof` check. Objects are a bit trickier.
 *
 * For arrays, each entry will be checked against the corrisponding index on the
 * other object. Indices will loop to prevent overflows.
 *
 * For objects, the prototypes constructor will be equated to cheat this.
 *
 * @param first [any] Any object
 * @param second [any] Any object
 * @returns [boolean] True if they are the same types
 */
const objectsAreSameType = (first, second) => {
    if (typeof first !== typeof second) {
        // Not even the same type string
        return false;
    }
    else if (first === second) {
        // They're actually equal, so same type
        return true;
    }
    else if (typeof first === 'object') {
        if (Array.isArray(first)) {
            /**
             * Check arrays by figuring out which one is smaller in size, and which
             * is larger. Then make sure all the values of the greater array are
             * equal in type to the same indices of the smaller array. Any overlap
             * in indices will be looped around using a modulus.
             */
            const lesser = (first.length < second.length ? first : second);
            const greater = (first.length > second.length ? first : second);
            return greater.every((val, ind) => (0, exports.objectsAreSameType)(val, lesser[ind % lesser.length]));
        }
        /**
         * For objects that aren't arrays, we'll use the constructor and attempt
         * to equate between them.
         */
        const constr1 = Object.getPrototypeOf(first).constructor;
        const constr2 = Object.getPrototypeOf(second).constructor;
        return constr1 === constr2;
    }
    // Anything non-object is primitive so they are the same
    return true;
};
exports.objectsAreSameType = objectsAreSameType;
/**
 * Checks if the given object matches the supplied test layout in both keys,
 * key types, and value types.
 *
 * @param input [object] Object to test
 * @param layout [object] Layout to test against
 * @returns [boolean] True if same keys and value types
 */
const objectMatchesLayout = (input, layout) => {
    const layoutKeys = Object.keys(layout);
    return Object.keys(input).every((key) => layoutKeys.includes(key) && (0, exports.objectsAreSameType)(input[key], layout[key]));
};
exports.objectMatchesLayout = objectMatchesLayout;
class SimpleMap {
    constructor() {
        _SimpleMap_dict.set(this, void 0);
        _SimpleMap_hasEntries.set(this, false);
        /**
         * Converts this SimpleMap into a string representation. Follows the format:
         * `{ key1: value1, key2:value2 }`
         *
         * @returns [string] String representation of the SimpleMap
         */
        this.toString = () => {
            if (!__classPrivateFieldGet(this, _SimpleMap_hasEntries, "f"))
                return '{ }';
            // eslint-disable-next-line arrow-body-style
            return this.entries().reduce((acc, cur, ind, arr) => {
                return `${acc}${cur[0]}: ${cur[1].toString()}${ind === arr.length ? ' }' : ', '}`;
            }, '{ ');
        };
        this.has = (key) => (Object.prototype.hasOwnProperty.call(__classPrivateFieldGet(this, _SimpleMap_dict, "f"), key));
        this.get = (key) => (__classPrivateFieldGet(this, _SimpleMap_dict, "f")[key]);
        this.keys = () => (Object.keys(__classPrivateFieldGet(this, _SimpleMap_dict, "f")));
        this.values = () => (Object.values(__classPrivateFieldGet(this, _SimpleMap_dict, "f")));
        this.entries = () => (Object.entries(__classPrivateFieldGet(this, _SimpleMap_dict, "f")));
        /**
         * Sets a value within this SimpleMap. The value must be of the same type as
         * any previous values. If it is the first value, this will set the precedent
         * for future types.
         *
         * @param key [string] Entry key
         * @param value [any] Entry value
         * @throws TypeError If the key is not provided or not a string
         * @throws TypeError If the value is not provided or not the same type
         */
        this.set = (key, value) => {
            if (!key || typeof key !== 'string')
                throw new TypeError(`SimpleMap.set() requires a string key, instead "${typeof key}" was found.`);
            if (typeof value === 'undefined' || value === null)
                throw new TypeError(`SimpleMap.set() requires a valid value (not undefined or null).`);
            if (!this.checkType(value))
                throw new TypeError(`SimpleMap.set() must be called with an object of the same type as what exists already.`);
            __classPrivateFieldGet(this, _SimpleMap_dict, "f")[key] = value;
        };
        /**
         * Deletes (removes) a key and it's value from this SimpleMap.
         *
         * @param key [string] Entry key
         * @returns [boolean] True if found and deleted
         */
        this.delete = (key) => {
            if (this.has(key)) {
                delete __classPrivateFieldGet(this, _SimpleMap_dict, "f")[key];
                return true;
            }
            return false;
        };
        /**
         * Removes all keys and values from this SimpleMap.
         */
        this.clear = () => {
            this.forEachKey((key) => (delete __classPrivateFieldGet(this, _SimpleMap_dict, "f")[key]));
        };
        /**
         * Iterate over each entry in this SimpleMap.
         *
         * @param cb [function] Callback receiving current value, index, and array
         */
        // eslint-disable-next-line max-len
        this.forEach = (cb) => (this.entries().forEach(cb));
        /**
         * Iterate over each string key in this SimpleMap.
         *
         * @param cb [function] Callback receiving current value, index, and array
         */
        this.forEachKey = (cb) => (this.keys().forEach(cb));
        /**
         * Iterate over each value in this SimpleMap.
         *
         * @param cb [function] Callback receiving current value, index, and array
         */
        this.forEachvalue = (cb) => (this.values().forEach(cb));
        /**
         * Checks that the provided object is the same type as what exists in this
         * SimpleMap. If nothing exists, then true is returned anyways.
         *
         * @see `objectsAreSameType()`
         * @param value [any] Object to test
         * @returns [boolean] True if they are the same type
         */
        this.checkType = (value) => {
            if (__classPrivateFieldGet(this, _SimpleMap_hasEntries, "f")) {
                const [test] = this.values();
                return (0, exports.objectsAreSameType)(value, test);
            }
            return true;
        };
        __classPrivateFieldSet(this, _SimpleMap_dict, {}, "f");
        __classPrivateFieldSet(this, _SimpleMap_hasEntries, false, "f");
    }
    [(_SimpleMap_dict = new WeakMap(), _SimpleMap_hasEntries = new WeakMap(), Symbol.iterator)]() {
        const entries = Object.entries(__classPrivateFieldGet(this, _SimpleMap_dict, "f"));
        let index = -1;
        return {
            next: () => {
                index++;
                return {
                    value: entries[index],
                    done: index >= entries.length,
                };
            },
        };
    }
}
exports.SimpleMap = SimpleMap;
;
//# sourceMappingURL=objects.js.map