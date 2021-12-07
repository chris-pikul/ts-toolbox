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
 * @param {Object} target Target object to apply to
 * @param {...Object} sources Source objects to apply
 * @returns {Object} New object
 */
// eslint-disable-next-line max-len
export const objectNestedAssign = (target:Record<string, unknown>, ...sources:Record<string, unknown>[]):Record<string, unknown> => {
  sources.forEach((src:Record<string, unknown>) => {
    Object.keys(src).forEach((key:string) => {
      const srcVal = src[key];
      const tgtVal = target[key];

      if(tgtVal && typeof tgtVal === 'object' && !Array.isArray(tgtVal) && srcVal && typeof srcVal === 'object' && !Array.isArray(srcVal))
        target[key] = objectNestedAssign(tgtVal as Record<string, unknown>, srcVal as Record<string, unknown>);
      else
        target[key] = srcVal;
    });
  });

  return target;
};

/**
 * Attempts to check if the two provided parameters are the same _type_.
 * For primitives this is a simple `typeof` check. Objects are a bit trickier.
 * 
 * For arrays, each entry will be checked against the corrisponding index on the
 * other object. Indices will loop to prevent overflows.
 * 
 * For objects, the prototypes constructor will be equated to cheat this.
 * 
 * @param {any} first Any object
 * @param {any} second Any object
 * @returns {boolean} True if they are the same types
 */
export const objectsAreSameType = (first:any, second:any):boolean => {
  if(typeof first !== typeof second) {
    // Not even the same type string
    return false;
  } else if(first === second) {
    // They're actually equal, so same type
    return true;
  } else if(typeof first === 'object') {
    if(Array.isArray(first)) {
      /**
       * Check arrays by figuring out which one is smaller in size, and which
       * is larger. Then make sure all the values of the greater array are
       * equal in type to the same indices of the smaller array. Any overlap
       * in indices will be looped around using a modulus.
       */
      const lesser = (first.length < second.length ? first : second);
      const greater = (first.length > second.length ? first : second);
      return greater.every((val:any, ind:number) => objectsAreSameType(val, lesser[ind % lesser.length]));
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

/**
 * Checks if the given object matches the supplied test layout in both keys,
 * key types, and value types.
 * 
 * @param {Object} input Object to test
 * @param {Object} layout Layout to test against
 * @returns {boolean} True if same keys and value types
 */
export const objectMatchesLayout = (input:Record<any, any>, layout:Record<any, any>):boolean => {
  const layoutKeys = Object.keys(layout);
  return Object.keys(input).every((key:any) => layoutKeys.includes(key) && objectsAreSameType(input[key], layout[key]));
};

/**
 * Typed map acts as a `Map` type but with trivial type-checking on values.
 * Each key entered **must** be a string, and the value types must match for all
 * existing values. Until the first value is applied, any type is accepted. 
 * After an entry is saved, all future additions will be type-checked against
 * the existing entries. If the map is cleared, then any typings are reset.
 */
export class TypedMap<T> implements Iterable<[string, T]> {
  readonly #dict:{ [key:string]: T };

  #hasEntries = false;

  constructor() {
    this.#dict = {};
    this.#hasEntries = false;
  }

  public [Symbol.iterator]():Iterator<[string, T]> {
    const entries = Object.entries(this.#dict);
    let index = -1;
    
    return {
      next: ():IteratorResult<[string, T]> => {
        index++;
        return {
          value: entries[index],
          done: index >= entries.length,
        };
      },
    };
  }

  /**
   * Converts this SimpleMap into a string representation. Follows the format:
   * `{ key1: value1, key2:value2 }`
   * 
   * @returns {string} String representation of the SimpleMap
   */
  public toString = ():string => {
    if(!this.#hasEntries)
      return '{ }';

    // eslint-disable-next-line arrow-body-style
    return this.entries().reduce<string>((acc:string, cur:[string, T], ind:number, arr:[string, T][]) => {
      return `${acc}${cur[0]}: ${cur[1].toString()}${ind === arr.length ? ' }' : ', '}`;
    }, '{ ');
  };

  public has = (key:string):boolean => (Object.prototype.hasOwnProperty.call(this.#dict, key));

  public get = (key:string):(undefined|T) => (this.#dict[key]);

  public keys = ():Array<string> => (Object.keys(this.#dict));

  public values = ():Array<T> => (Object.values(this.#dict));

  public entries = ():Array<[string, T]> => (Object.entries(this.#dict));
  
  /**
   * Sets a value within this SimpleMap. The value must be of the same type as
   * any previous values. If it is the first value, this will set the precedent
   * for future types.
   * 
   * @param {string} key Entry key
   * @param {any} value Entry value
   * @throws {TypeError} If the key is not provided or not a string
   * @throws {TypeError} If the value is not provided or not the same type
   */
  public set = (key:string, value:T):void => {
    if(!key || typeof key !== 'string')
      throw new TypeError(`SimpleMap.set() requires a string key, instead "${typeof key}" was found.`);
    if(typeof value === 'undefined' || value === null)
      throw new TypeError(`SimpleMap.set() requires a valid value (not undefined or null).`);
    if(!this.checkType(value))
      throw new TypeError(`SimpleMap.set() must be called with an object of the same type as what exists already.`);

    this.#dict[key] = value;
  };

  /**
   * Deletes (removes) a key and it's value from this SimpleMap.
   * 
   * @param {String} key Entry key
   * @returns {boolean} True if found and deleted
   */
  public delete = (key:string):boolean => {
    if(this.has(key)) {
      delete this.#dict[key];
      return true;
    }
    return false;
  };

  /**
   * Removes all keys and values from this SimpleMap.
   */
  public clear = ():void => {
    this.forEachKey((key:string) => (delete this.#dict[key]));
  };

  /**
   * Iterate over each entry in this SimpleMap.
   * 
   * @param {function} cb Callback receiving current value, index, and array
   */
  // eslint-disable-next-line max-len
  public readonly forEach = (cb:(cur:[string, T], ind:number, arr:[string, T][])=>void):void => (this.entries().forEach(cb));

  /**
   * Iterate over each string key in this SimpleMap.
   * 
   * @param {function} cb Callback receiving current value, index, and array
   */
  public readonly forEachKey = (cb:(cur:string, ind:number, arr:string[])=>void):void => (this.keys().forEach(cb));

  /**
   * Iterate over each value in this SimpleMap.
   * 
   * @param {function} cb Callback receiving current value, index, and array
   */
  public readonly forEachvalue = (cb:(cur:T, ind:number, arr:T[])=>void):void => (this.values().forEach(cb));

  /**
   * Checks that the provided object is the same type as what exists in this
   * SimpleMap. If nothing exists, then true is returned anyways.
   * 
   * @see {@link objectsAreSameType}
   * @param {any} value Object to test
   * @returns {boolean} True if they are the same type
   */
  protected readonly checkType = (value:any):boolean => {
    if(this.#hasEntries) {
      const [ test ] = this.values();
      return objectsAreSameType(value, test);
    }
    return true;
  };
};
