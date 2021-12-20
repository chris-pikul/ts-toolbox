/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */
/* eslint-disable id-length */

import { degToRad, radToDeg, randomRange } from '..';
import { equals, clampFloat } from '../math';

/**
 * 2-dimensional vector
 */
export interface IVector2 {

  /**
   * The "X" component as a floating-point number.
   */
  x:number;
  
  /**
   * The "Y" component as a floating-point number.
   */
  y:number;
};

/**
 * Tuple for describing a Vector2. Tuple being a fixed-length array.
 */
export type Vector2Tuple = [number, number];

/**
 * Aliases for any objects that can construct a Vector2 object.
 */
export type Vector2Constructable = (
  number
  | string
  | Vector2Tuple
  | Array<number>
  | IVector2
);

/**
 * Regular Expression matching a valid Vector2 string representation
 */
const regexpVectorString = /^[{[]\s*(\d+\.?\d*)\s*,\s*(\d+\.?\d*)\s*[}\]]$/gi;

export type NumericalMapFunc = (num:number, componentIndex:number, arr:number[]) => number;
export type NumericalReduceFunc = (acc:number, val:number, componentIndex:number, arr:number[]) => number;

/**
 * 2-dimensional vector
 */
export default class Vector2 implements IVector2 {
  /**
   * Generates a random unit Vector2. The length of which is 1.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public static random():Vector2 {
    return (new Vector2(Math.random(), Math.random())).normalize();
  }

  /**
   * Generates a random Vector2 within the range given. This Vector2 is not
   * normalized. The same range is used for both components but not the same
   * values.
   * 
   * @param {number} min Minimum value
   * @param {number} max Maximum value
   * @returns {Vector2} New Vector2 object
   */
  public static randomRange(min:number, max:number):Vector2 {
    const x = randomRange(min, max);
    const y = randomRange(min, max);
    return new Vector2(x, y);
  }

  /**
   * The "X" component as a floating-point number.
   */
  public x = 0.0;
  
  /**
   * The "Y" component as a floating-point number.
   */
  public y = 0.0;

  /**
   * Constructs a new Vector2 object. Variable arguments are supported. In the
   * case of no arguments, each component defaults to 0.
   * 
   * --------------------------------------------------------------------------
   * + `Vector2()` - 0 is used for both axis
   * + `Vector2(arg:Vector2)` - The values are directly copied
   * + `Vector2(arg:object)` - {x, y} is expected and copied
   * + `Vector2(arg:number[])` - Must be length >=2 and contain [x, y]
   * + `Vector2(arg:string)` - Attempts to parse a string "{x, y}"
   * + `Vector2(arg:number)` - Applies the same number to both values
   * + `Vector2(x:number, y:number)` - Interpreted as (x, y) and copied
   * 
   * @throws {TypeError} If the arguments are invalid or cannot be parsed
   */
  constructor(_arg1?:Vector2Constructable, _arg2?:number) {
    // Bind our methods here
    this.toString = this.toString.bind(this);
    this.toArray = this.toArray.bind(this);
    this.toTuple = this.toTuple.bind(this);

    this.set = this.set.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setFromString = this.setFromString.bind(this);
    this.setFromArray = this.setFromArray.bind(this);
    this.setFromObject = this.setFromObject.bind(this);

    this.equals = this.equals.bind(this);
    this.lessThan = this.lessThan.bind(this);
    this.greaterThan = this.greaterThan.bind(this);

    this.lengthSqr = this.lengthSqr.bind(this);
    this.length = this.length.bind(this);
    this.distanceSqr = this.distanceSqr.bind(this);
    this.distance = this.distance.bind(this);
    this.dotProduct = this.dotProduct.bind(this);

    this.round = this.round.bind(this);
    this.floor = this.floor.bind(this);
    this.ceil = this.ceil.bind(this);
    this.clamp = this.clamp.bind(this);
    this.abs = this.abs.bind(this);
    this.scale = this.scale.bind(this);
    this.negate = this.negate.bind(this);
    this.pow = this.pow.bind(this);
    this.sqrt = this.sqrt.bind(this);
    this.normalize = this.normalize.bind(this);
    this.rotate = this.rotate.bind(this);
    this.rotateDeg = this.rotateDeg.bind(this);
    this.withLength = this.withLength.bind(this);

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.divideSafe = this.divideSafe.bind(this);
    this.project = this.project.bind(this);
    this.rotateAround = this.rotateAround.bind(this);
    this.angleBetween = this.angleBetween.bind(this);

    this.map = this.map.bind(this);
    this.reduce = this.reduce.bind(this);
    
    // Check if we want the 2 argument (number, number) version.
    if(arguments.length >= 2) {
      const [ x, y ] = arguments;

      if(typeof x !== 'number')
        throw new TypeError(`Vector2 was constructed with 2 arguments, both need to be numbers. Instead found "${typeof x}" for first argument.`);
      if(typeof y !== 'number')
        throw new TypeError(`Vector2 was constructed with 2 arguments, both need to be numbers. Instead found "${typeof y}" for second argument.`);

      this.set(x, y);
    } else if(arguments.length === 1) {
      // For the single argument, we pass it onto the method so it can handle it
      this.setFrom(_arg1);
    }
  }

  /**
   * Converts this Vector2 into a string representation. Uses the template
   * format `{x, y}`.
   * 
   * @returns {string} String representation
   */
  public toString():string {
    return `{${this.x}, ${this.y}}`;
  }

  /**
   * Converts this Vector2 into an array representation.
   * 
   * @returns {Array} Array of [x, y]
   */
  public toArray():Array<number> {
    return [ this.x, this.y ];
  }

  /**
   * Converts this Vector2 into an array representation.
   * 
   * note: An alias for TypeScript to use the tuple notation.
   * 
   * @returns {Array[2]} Tuple of [x, y]
   */
  public toTuple():Vector2Tuple {
    return [ this.x, this.y ];
  }

  /**
   * Set's both axii of this vector using one function call.
   * 
   * @param {number} [x=0] X-axis value
   * @param {number} [y=0] Y-axis value
   * @returns {Vector2} `this` for method-chaining
   * @throws {TypeError} If a pramater is not a number
   * @throws {TypeError} If a value is NaN
   */
  public set(x = 0.0, y = 0.0):Vector2 {
    // Type checking
    if(!x || typeof x !== 'number')
      throw new TypeError(`Vector2.set() received an invalid "x" (first) parameter, expected a number.`);
    if(Number.isNaN(x))
      throw new TypeError(`Vector2.set() received a NaN for "x" (first) parameter.`);
    if(!y || typeof y !== 'number')
      throw new TypeError(`Vector2.set() received an invalid "y" (second) parameter, expected a number.`);
    if(Number.isNaN(y))
      throw new TypeError(`Vector2.set() received a NaN for "y" (second) parameter.`);

    // Apply the values
    this.x = x;
    this.y = y;

    // Return this for method-chaining
    return this;
  }

  /**
   * Performs type negotiation on the supplied argument `arg` and depending on
   * the type uses the appropriate method to set this Vector2's values.
   * 
   * @param {number|string|Array|Object} arg Argument to use as source 
   * @returns {Vector2} `this` for method-chaining
   * @throws {TypeError} If the argument is of a type that cannot be parsed
   * @throws {...} The subsequent methods may also throw parsing errors
   */
  public setFrom(arg:Vector2Constructable):Vector2 {
    if(typeof arg === 'number') {
      return this.set(arg, arg);
    } else if(typeof arg === 'string') {
      return this.setFromString(arg as string);
    } else if(typeof arg === 'object') {
      if(Array.isArray(arg))
        return this.setFromArray(arg);
      return this.setFromObject(arg);
    }
    throw new TypeError(`Vector2.setFrom() parameter does not satisfy being either a number, string, array, or object.`);
  }

  /**
   * Attempts to parse an incoming string and set the values of this Vector2
   * object with the results.
   * 
   * Accepts: `{x, y}` and `[x, y]`
   * 
   * @param {string} str String to parse 
   * @returns {Vector2} `this` for method-chaining
   * @throws {TypeError} If the parameter is not a string (or is empty)
   * @throws {Error} If parsing fails
   */
  public setFromString(str:string):Vector2 {
    if(str && typeof str === 'string') {
      const matches = [ ...str.trim().matchAll(regexpVectorString) ];
      if(matches && matches.length === 1) {
        const [ match ] = matches;
        if(match.length === 3) {
          this.x = parseFloat(match[1]);
          this.y = parseFloat(match[2]);
          return this;
        }
      }

      throw new Error(`Vector2.setFromString() failed to parse the incoming string "${str}" as a valid Vector2.`);
    }

    throw new TypeError(`Vector2.setFromString() requires a string parameter.`);
  }

  /**
   * Attempts to set the values of this Vector2 using an array. The indices
   * match as `[x, y]`. An array with length over 2 may be used, in which only
   * the first two entries will be type-checked and applied.
   * 
   * @param {Array} arr Array of numbers with length at least 2.
   * @returns {Vector2} `this` for method-chaining
   * @throws {TypeError} If the provided parameter is not an array
   * @throws {TypeError} If the length of the array is not at least 2
   * @throws {TypeError} If either entry of the array is not a valid number
   */
  public setFromArray(arr:Array<number>):Vector2 {
    if(Array.isArray(arr)) {
      if(arr.length >= 2) {
        const [ x, y ] = arr;

        if(typeof x !== 'number' || Number.isNaN(x))
          throw new TypeError(`Vector2.setFromArray() requires the array parameters values to be number, either the wrong type or a NaN was provided for index 0.`);
        if(typeof y !== 'number' || Number.isNaN(y))
          throw new TypeError(`Vector2.setFromArray() requires the array parameters values to be number, either the wrong type or a NaN was provided for index 1.`);
        
        this.x = x;
        this.y = y;

        return this;
      }
      
      throw new TypeError(`Vector2.setFromArray() requires the parameter to have a length of at least 2.`);
    }
   
    throw new TypeError(`Vector2.setFromArray() requires an array parameter.`);
  }

  /**
   * Attempts to set the values of this Vector2 object using a provided object.
   * The provided object must have an `x` and `y` properties which are both
   * numbers.
   * 
   * @param {Object} obj Object to use
   * @returns {Vector2} `this` for method-chaining 
   * @throws {TypeError} If the `obj` parameter is not an object
   * @throws {TypeError} If the `x`, or `y` properties are not valid numbers
   */
  public setFromObject(obj:IVector2):Vector2 {
    if(typeof obj === 'object' && Array.isArray(obj) === false) {
      const { x, y } = obj;

      if(!x || typeof x !== 'number' || Number.isNaN(x))
        throw new TypeError(`Vector2.setFromObject() requires an "x" property that is a valid number.`);
      
      if(!y || typeof y !== 'number' || Number.isNaN(y))
        throw new TypeError(`Vector2.setFromObject() requires an "y" property that is a valid number.`);
      
      this.x = x as number;
      this.y = y as number;
    }

    throw new TypeError(`Vector2.setFromObject() requires an object parameter.`);
  }

  /**
   * The length (or magnitude) of this Vector2 as a squared number.
   * 
   * @see {@link Vector2.length} For the actual length (square-rooted)
   * @returns {number} The square length of this Vector2
   */
  public lengthSqr():number {
    return (this.x * this.x) + (this.y * this.y);
  }
  
  /**
   * The length (or magnitude) of this Vector2.
   * 
   * @see {@link Vector2.lengthSqr} For the square length (this uses it)
   * @returns {number} The length (magnitude) of this Vector2
   */
  public length():number {
    return Math.sqrt(this.lengthSqr());
  }

  /**
   * Checks if this Vector2 is equal (within the given tolerance) to another
   * Vector2.
   * 
   * @param {Vector2} other Other Vector2 object
   * @param {number} [tolerance=Number.EPSILON] The tolerance to use
   * @returns {boolean} True if equal (within tolerance)
   */
  public equals(other:Vector2, tolerance:number = Number.EPSILON):boolean {
    const x = equals(this.x, other.x, tolerance);
    const y = equals(this.y, other.y, tolerance);
    return x && y;
  }

  /**
   * Checks if both axis of this vector are less than the other's.
   * 
   * @param other Other Vector2 object
   * @returns {boolean} True if both axis are less than the `other`
   */
  public lessThan(other:Vector2):boolean {
    return (this.x < other.x) && (this.y < other.y);
  }

  /**
   * Checks if both axis of this vector are greater than the other's.
   * 
   * @param other Other Vector2 object
   * @returns {boolean} True if both axis are greater than the `other`
   */
  public greaterThan(other:Vector2):boolean {
    return (this.x > other.x) && (this.y > other.y);
  }

  /**
   * Calculates the square distance between this Vector2 and the other.
   * 
   * @see {@link Vector2.distance} For the actual distance (square-rooted).
   * @param {Vector2} other Other vector
   * @returns {number} Distance squared
   */
  public distanceSqr(other:Vector2):number {
    return (this.x * other.x) + (this.y * other.y);
  }

  /**
   * Calculates the distance between this Vector2 and the other.
   * 
   * @see {@link Vector2.distanceSqr} For the square distance (cheaper)
   * @param {Vector2} other Other vector
   * @returns {number} Distance
   */
  public distance(other:Vector2):number {
    return Math.sqrt(this.distanceSqr(other));
  }

  /**
   * Returns the numerical dot-product between this Vector2 and another.
   * 
   * @param {Vector2} other Other vector
   * @returns {number} Computed Dot-Product
   */
  public dotProduct(other:Vector2):number {
    return (this.x * other.x) + (this.y * other.y);
  }

  /**
   * Calculates the angle (either radians or degrees) between this Vector2 and
   * the other.
   * 
   * @param {Vector2} other Other vector
   * @param {boolean} [useDeg=false] If true, returns degrees, otherwise rads 
   * @returns {number} Computed angle
   */
  public angleBetween(other:Vector2, useDeg = false):number {
    const rads = Math.acos(this.dotProduct(other) / (this.length() * other.length()));
    return useDeg ? radToDeg(rads) : rads;
  }

  /**
   * Immutably rounds each component of this vector.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public round():Vector2 {
    return new Vector2(Math.round(this.x), Math.round(this.y));
  }

  /**
   * Immutably floors each component of this vector.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public floor():Vector2 {
    return new Vector2(Math.floor(this.x), Math.floor(this.y));
  }

  /**
   * Immutably ceils each component of this vector.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public ceil():Vector2 {
    return new Vector2(Math.ceil(this.x), Math.ceil(this.y));
  }

  /**
   * Immutably clamps each component of this vector to be within the `min` and
   * `max` range supplied.
   * 
   * @param {number} min Minimum value 
   * @param {number} max Maximum value
   * @returns {Vector2} New Vector2 object
   */
  public clamp(min:number, max:number):Vector2 {
    const x = clampFloat(this.x, min, max);
    const y = clampFloat(this.y, min, max);

    return new Vector2(x, y);
  }

  /**
   * Immutably absolutes each component of this vector.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public abs():Vector2 {
    return new Vector2(Math.abs(this.x), Math.abs(this.y));
  }

  /**
   * Immutably scales (multiplies) each component of this vector.
   * 
   * @param fact Factor (multiplier) to apply
   * @returns {Vector2} New Vector2 object
   */
  public scale(fact:number):Vector2 {
    return new Vector2(this.x * fact, this.y * fact);
  }

  /**
   * Immutably negates this Vector2 by scaling (multiplying) it by -1.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public negate():Vector2 {
    return this.scale(-1);
  }

  /**
   * Immutably raises this Vector2's axis by the given exponent.
   * 
   * @param {number} exp Number to raise by
   * @returns {Vector2} New Vector2 object
   */
  public pow(exp = 2.0):Vector2 {
    if(exp === 0)
      return new Vector2(this);
    return new Vector2(Math.pow(this.x, exp), Math.pow(this.y, exp));
  }

  /**
   * Immutably calculates the square-root of each axis of this Vector2.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public sqrt():Vector2 {
    return new Vector2(Math.sqrt(this.x), Math.sqrt(this.y));
  }

  /**
   * Immutably normalizes this Vector2 so that the length equals 1.
   * 
   * @returns {Vector2} New Vector2 object
   */
  public normalize():Vector2 {
    if(this.x === 0 && this.y === 0)
      return new Vector2();
    const len = this.length();
    return new Vector2(this.x / len, this.y / len);
  }

  /**
   * Immutably rotates this Vector2 by the radians provided.
   * 
   * @param {number} rad Radians to rotate by
   * @returns {Vector2} New Vector2 object
   */
  public rotate(rad:number):Vector2 {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const x = (this.x * cos) - (this.y * sin);
    const y = (this.x * sin) - (this.y * cos);
    return new Vector2(x, y);
  }

  /**
   * Immutably rotates this Vector2 by the degrees provided.
   * 
   * @see {@link Vector2.rotate} for radian implementation
   * @param {number} deg Degrees to rotate by
   * @returns {Vector2} New Vector2 object
   */
  public rotateDeg(deg:number):Vector2 {
    return this.rotate(degToRad(deg));
  }

  /**
   * Immutably normalizes and re-scales this Vector2 to have a new length.
   * 
   * @param len New length
   * @returns {Vector2} New Vector2 object
   */
  public withLength(len:number):Vector2 {
    return this.normalize().scale(len);
  }

  /**
   * Immutably adds to this Vector2's axis.
   * 
   * The type of the parameter dictates the function performed.
   * - `number` value is used for each axis
   * - `Vector2` will have X applied to X and Y applied to Y
   * - any other will attempt to construct a new Vector2 and be used as stated
   * 
   * @param {any} val Number, or any value that can construct a Vector2 object
   * @returns {Vector2} New Vector2 object
   * @throws Any errors that may occur attempting to construct a Vector2
   */
  public add(val:Vector2Constructable):Vector2 {
    if(typeof val === 'number')
      return new Vector2(this.x + val, this.y + val);
    else if(val instanceof Vector2)
      return new Vector2(this.x + val.x, this.y + val.y);
    
    const other = new Vector2(val);
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Immutably subtracts from this Vector2's axis.
   * 
   * The type of the parameter dictates the function performed.
   * - `number` value is used for each axis
   * - `Vector2` will have X applied to X and Y applied to Y
   * - any other will attempt to construct a new Vector2 and be used as stated
   * 
   * @param {any} val Number, or any value that can construct a Vector2 object
   * @returns {Vector2} New Vector2 object
   * @throws Any errors that may occur attempting to construct a Vector2
   */
  public subtract(val:Vector2Constructable):Vector2 {
    if(typeof val === 'number')
      return new Vector2(this.x - val, this.y - val);
    else if(val instanceof Vector2)
      return new Vector2(this.x - val.x, this.y - val.y);
    
    const other = new Vector2(val);
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  /**
   * Immutably multiplies this Vector2's axis.
   * 
   * The type of the parameter dictates the function performed.
   * - `number` value is used for each axis
   * - `Vector2` will have X applied to X and Y applied to Y
   * - any other will attempt to construct a new Vector2 and be used as stated
   * 
   * @param {any} val Number, or any value that can construct a Vector2 object
   * @returns {Vector2} New Vector2 object
   * @throws Any errors that may occur attempting to construct a Vector2
   */
  public multiply(val:Vector2Constructable):Vector2 {
    if(typeof val === 'number')
      return new Vector2(this.x * val, this.y * val);
    else if(val instanceof Vector2)
      return new Vector2(this.x * val.x, this.y * val.y);
    
    const other = new Vector2(val);
    return new Vector2(this.x * other.x, this.y * other.y);
  }

  /**
   * Immutably divides this Vector2's axis.
   * 
   * The type of the parameter dictates the function performed.
   * - `number` value is used for each axis
   * - `Vector2` will have X applied to X and Y applied to Y
   * - any other will attempt to construct a new Vector2 and be used as stated
   * 
   * @param {any} val Number, or any value that can construct a Vector2 object
   * @returns {Vector2} New Vector2 object
   * @throws Any errors that may occur attempting to construct a Vector2
   */
  public divide(val:Vector2Constructable):Vector2 {
    if(typeof val === 'number')
      return new Vector2(this.x / val, this.y / val);
    else if(val instanceof Vector2)
      return new Vector2(this.x / val.x, this.y / val.y);
    
    const other = new Vector2(val);
    return new Vector2(this.x / other.x, this.y / other.y);
  }

  /**
   * Immutably divides this Vector2's axis. This is a "safer" option since it
   * protects against division by 0 or any NaN. In the case that a bad value is
   * found then either 0 is used as the value, or an error is thrown depending
   * on the `useZero` parameter (default is false, meaning an error is thrown).
   * 
   * The type of the parameter dictates the function performed.
   * - `number` value is used for each axis
   * - `Vector2` will have X applied to X and Y applied to Y
   * - any other will attempt to construct a new Vector2 and be used as stated
   * 
   * @param {any} val Number, or any value that can construct a Vector2 object
   * @param {boolean} useZero If true, 0 will be used on invalid values, 
   * otherwise an Error is thrown.
   * @returns {Vector2} New Vector2 object
   * @throws Any errors that may occur attempting to construct a Vector2
   */
  public divideSafe(val:Vector2Constructable, useZero = false):Vector2 {
    const err = new Error(`Vector2.divideSafe() was provided an invalid value (either 0 or NaN).`);

    if(typeof val === 'number') {
      if(val === 0 || Number.isNaN(val)) {
        if(useZero)
          return new Vector2(0);
        throw err;
      }

      return new Vector2(this.x / val, this.y / val);
    } else if(val instanceof Vector2) {
      let x = 0;
      let y = 0;

      if(val.x === 0 || Number.isNaN(val.x)) {
        if(!useZero)
          throw err;
      } else {
        // eslint-disable-next-line prefer-destructuring
        x = val.x;
      }

      if(val.y === 0 || Number.isNaN(val.y)) {
        if(!useZero)
          throw err;
      } else {
        // eslint-disable-next-line prefer-destructuring
        y = val.y;
      }

      return new Vector2(x === 0 ? 0 : (this.x / x), y === 0 ? 0 : (this.y / y));
    }

    /**
     * Attempt to convert to a Vector2 and circle back to this function so that
     * the `if(val instaceof Vector2)` branch will pick it up.
     */
    const other = new Vector2(val);
    return this.divideSafe(other, useZero);
  }

  /**
   * Immutably projects this Vector2 onto the other Vector2.
   * 
   * @param {Vector2} other Other vector
   * @returns {Vector2} New Vector2 object
   */
  public project(other:Vector2):Vector2 {
    const norm = other.normalize();
    return norm.scale(this.dotProduct(norm));
  }

  /**
   * Immutably rotates this Vector2 around a circle centered at `other` by the
   * angle provided.
   * 
   * @param {Vector2} other Other Vector2 
   * @param {number} ang Angle to rotate by 
   * @param {boolean} [useDeg=false] If true, `ang` will be in degrees,
   * otherwise radians are used (default).
   * @returns {Vector2} New Vector2 object 
   */
  public rotateAround(other:Vector2, ang:number, useDeg = false):Vector2 {
    const rads = useDeg ? degToRad(ang) : ang;
    const cos = Math.cos(rads);
    const sin = Math.sin(rads);
    const x = (cos * (this.x - other.x)) - (sin * (this.y - other.y)) + other.x;
    const y = (sin * (this.x - other.x)) + (cos * (this.y - other.y)) + other.y;
    return new Vector2(x, y);
  }

  /**
   * Immutably performs an Array.map() on this Vector2 as if it was an Array. 
   * The callback is called on each component and the results are applied to a
   * new Vector2 object.
   * 
   * The callback resembles that of Array.map in having the signature:
   * ```javascript
   * const func = (val, index, arr) => (val * 2);
   * ```
   * 
   * ```typescript
   * const func = (val:number, index:number, arr:number[]):number => (val * 2);
   * ```
   * 
   * @param {function} func Callback function
   * @returns {Vector2} New Vector2 object
   */
  public map(func:NumericalMapFunc):Vector2 {
    const arr = this.toArray();
    const comps = arr.map(func);
    return new Vector2(comps);
  }

  /**
   * Performs an Array.reduce() on this Vector2 as if it was an Array.
   * The callback is called on each component with the accumulator as the first
   * parameter, and the current component as the second. The function must
   * return a number which becomes the new accumulator applied for the next
   * component. The results after each component is modified is returned. The
   * initial accumulator is 0.
   * 
   * The callback resembles that of Array.reduce in having the signature:
   * ```javascript
   * const func = (acc, cur, index, arr) => (acc + cur);
   * ```
   * 
   * ```typescript
   * const func = (
   *  acc:number, 
   *  cur:number, 
   *  index:number, 
   *  arr:number[]
   * ):number => (acc + cur);
   * ```
   * 
   * @param func 
   * @returns 
   */
  public reduce(func:NumericalReduceFunc):number {
    const arr = this.toArray();
    return arr.reduce(func, 0);
  }
};
