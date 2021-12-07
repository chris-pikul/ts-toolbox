/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for objects, their types, and object operations.
 */
/**
 * Takes a target object and recursively assigns source objects by traversing
 * their children and appling them.
 *
 * @param target [object] Target object to apply to
 * @param sources [...object] Source objects to apply
 * @returns [object] New object
 */
export declare const objectNestedAssign: (target: Record<string, unknown>, ...sources: Record<string, unknown>[]) => Record<string, unknown>;
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
export declare const objectsAreSameType: (first: any, second: any) => boolean;
/**
 * Checks if the given object matches the supplied test layout in both keys,
 * key types, and value types.
 *
 * @param input [object] Object to test
 * @param layout [object] Layout to test against
 * @returns [boolean] True if same keys and value types
 */
export declare const objectMatchesLayout: (input: Record<any, any>, layout: Record<any, any>) => boolean;
export declare class SimpleMap<T> implements Iterable<[string, T]> {
    #private;
    constructor();
    [Symbol.iterator](): Iterator<[string, T]>;
    /**
     * Converts this SimpleMap into a string representation. Follows the format:
     * `{ key1: value1, key2:value2 }`
     *
     * @returns [string] String representation of the SimpleMap
     */
    toString: () => string;
    has: (key: string) => boolean;
    get: (key: string) => (undefined | T);
    keys: () => Array<string>;
    values: () => Array<T>;
    entries: () => Array<[string, T]>;
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
    set: (key: string, value: T) => void;
    /**
     * Deletes (removes) a key and it's value from this SimpleMap.
     *
     * @param key [string] Entry key
     * @returns [boolean] True if found and deleted
     */
    delete: (key: string) => boolean;
    /**
     * Removes all keys and values from this SimpleMap.
     */
    clear: () => void;
    /**
     * Iterate over each entry in this SimpleMap.
     *
     * @param cb [function] Callback receiving current value, index, and array
     */
    readonly forEach: (cb: (cur: [string, T], ind: number, arr: [string, T][]) => void) => void;
    /**
     * Iterate over each string key in this SimpleMap.
     *
     * @param cb [function] Callback receiving current value, index, and array
     */
    readonly forEachKey: (cb: (cur: string, ind: number, arr: string[]) => void) => void;
    /**
     * Iterate over each value in this SimpleMap.
     *
     * @param cb [function] Callback receiving current value, index, and array
     */
    readonly forEachvalue: (cb: (cur: T, ind: number, arr: T[]) => void) => void;
    /**
     * Checks that the provided object is the same type as what exists in this
     * SimpleMap. If nothing exists, then true is returned anyways.
     *
     * @see `objectsAreSameType()`
     * @param value [any] Object to test
     * @returns [boolean] True if they are the same type
     */
    protected readonly checkType: (value: any) => boolean;
}
