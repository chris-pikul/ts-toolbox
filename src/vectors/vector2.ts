/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */
/* eslint-disable id-length */

import {
  clampFloat,
  degToRad,
  radToDeg,
} from '../math';

import Vector, {
  VectorMapCallback,
  VectorMapWithCallback,
  regexpNumbers,
  vecToArray,
} from './vector';

/**
 * Interface for an object resembling a Vector2
 */
export interface IVector2 {

  /**
   * X component (index 0)
   */
  x:number;

  /**
   * Y component (index 1)
   */
  y:number;
}

/**
 * Any type that can be supplied to a Vector2 constructor
 */
export type Vector2Constructable = (
  number |
  string |
  Array<number> |
  Vector |
  // eslint-disable-next-line no-use-before-define
  Vector2 |
  IVector2
);

/**
 * Any type that can be supplied to a Vector2 method for transformation with
 * a Vector2.
 */
// eslint-disable-next-line no-use-before-define
export type Vector2Equiv = (Vector2|Vector|Array<number>|number);

export default class Vector2 extends Vector implements IVector2 {
  /**
   * Vector2 with both components being 0 (origin)
   */
  public static readonly IDENTITY = new Vector2(0);

  /**
   * Faster Vector to Vector2 conversion. Skips the type-checking and component
   * length negotiation. Any missing components (if Vector1) default to 0.
   * 
   * @param {Vector} vec Vector object
   * @returns {Vector2} New Vector2
   */
  public static fromVector(vec:Vector):Vector2 {
    const xVal = vec.get(0);
    const yVal = vec.count >= 2 ? vec.get(1) : 0;
    return new Vector2(xVal, yVal);
  }

  /**
   * Creates a Vector2 with both components being random units (0..1)
   * 
   * @returns {Vector2} New Vector
   */
  public static random():Vector2 {
    return new Vector2(Math.random(), Math.random());
  }

  /**
   * Creates a Vector2 with each component being random. The magnitude of the
   * Vector is 1 (normalized).
   * 
   * This is performed by generating a random radian angle and then calculating
   * the sin/cos values.
   * 
   * @returns {Vector2} New Vector
   */
  public static randomUnit():Vector2 {
    const rads = Math.random() * 2 * Math.PI;
    return new Vector2(Math.sin(rads), Math.cos(rads));
  }

  /**
   * Creates a Vector2 with each component being a random number within the
   * range specified.
   * 
   * The parameters will be sorted for actual min/max values.
   * 
   * @param min Minimum value
   * @param max Maximum value
   * @returns {Vector2} New Vector
   */
  public static randomRange(min = 0, max = 1):Vector2 {
    // Find the actual min and max
    const actMin = Math.min(min, max);
    const actMax = Math.max(min, max);

    // Generator for making random numbers within range
    const gen = () => {
      const range = actMax - actMin;
      return (Math.random() * range) + actMin;
    };

    return new Vector2(gen(), gen());
  }

  /**
   * Constructs a new Vector2 object, being a Vector, with 2 components.
   * 
   * If no arguments are provided, then each component defaults to 0.
   * 
   * If 1 or more numbers are provided, then each component is set to it's
   * respective argument index.
   * 
   * If an Array is supplied, then each index is taken in order to set the new
   * Vector's components. Any additional indices are ignored, and any missing
   * indices (array with length 1) default to 0.
   * 
   * If a Vector2 object is supplied, it is cloned.
   * 
   * If a Vector object is supplied, it is resized to 2-components by either
   * truncating, or defaulting to 0s.
   * 
   * If a generic Object is supplied, it is searched for either "x" or "y"
   * members that are valid numbers. If neither is found then an error is
   * thrown. It does not require both but requires at least 1.
   */
  constructor(arg?:Vector2Constructable, arg2?:number) {
    // Vector2 is always 2 components, so use the backing Vector as such
    super(2);

    // Rebind the methods so they return correctly
    this.fill = this.fill.bind(this);
    this.reset = this.reset.bind(this);
    this.set = this.set.bind(this);

    this.abs = this.abs.bind(this);
    this.add = this.add.bind(this);
    this.ceil = this.ceil.bind(this);
    this.clamp = this.clamp.bind(this);
    this.divide = this.divide.bind(this);
    this.floor = this.floor.bind(this);
    this.map = this.map.bind(this);
    this.mapWith = this.mapWith.bind(this);
    this.multiply = this.multiply.bind(this);
    this.normalize = this.normalize.bind(this);
    this.pow = this.pow.bind(this);
    this.round = this.round.bind(this);
    this.scale = this.scale.bind(this);
    this.subtract = this.subtract.bind(this);
    this.sqrt = this.sqrt.bind(this);
    this.trunc = this.trunc.bind(this);

    this.angleBetween = this.angleBetween.bind(this);
    this.distance = this.distance.bind(this);
    this.dotProduct = this.dotProduct.bind(this);
    this.rotate = this.rotate.bind(this);
    this.rotateAround = this.rotateAround.bind(this);
    this.rotateDeg = this.rotateDeg.bind(this);

    // Negotiate the type of the first argument to declare the constructor type
    if(typeof arg === 'number') {
      // Check if we are using more than 1 argument
      if(arg2) {
        // Ensure all the arguments are numbers
        if(typeof arg2 !== 'number')
          throw new TypeError(`Vector2 was constructed with multiple arguments, all arguments must be numbers.`);
        
        this.set(arg, arg2);
      } else {
        // Single argument sets all values
        this.fill(arg);
      }
    } else if(typeof arg === 'string') {
      // Parse string using a regular expression
      const values = [ ...arg.matchAll(regexpNumbers) ]
        .map(match => parseFloat(match[0]));

      if(!values || values.length === 0)
        throw new TypeError(`Vector2 was constructed with a string that could not be parsed.`);

      if(values.length !== 2)
        throw new TypeError(`Vector2 was constructed with a string that parses to an incorrect number of values. Expected 2, found ${values.length}`);

      this.set(...values);
    } else if(typeof arg === 'object') {
      // The argument is an object
      if(Array.isArray(arg)) {
        // For Arrays, they must be exact size
        if(arg.length === 2)
          throw new TypeError(`Vector2 was constructed with an  empty Array.`);
        
        if(arg.some(val => (typeof val !== 'number')))
          throw new TypeError(`Vector2 was constructed with an Array, each entry must be a number.`);

        this.set(...arg);
      } else if(arg instanceof Vector2) {
        // For Vector2's we just copy the values
        this.set(...arg.toArray());
      } else if(arg instanceof Vector) {
        // For Vectors we copy what we can and fill 0s if they are shorter
        this.set(...arg.toArray());
      } else {
        let valid = false;

        // Grab the keys for easier searching
        const keys = Object.keys(arg);

        // Check if there is a "x" member
        if(keys.includes('x') && typeof arg.x === 'number' && !Number.isNaN(arg.x)) {
          this.setComponent(0, arg.x as number);
          valid = true;
        }

        // Check if there is a "y" member
        if(keys.includes('y') && typeof arg.y === 'number' && !Number.isNaN(arg.y)) {
          this.setComponent(1, arg.y as number);
          valid = true;
        }

        if(!valid)
          throw new TypeError(`Vector2 was constructed with an Object that could not be converted.`);
      }
    }
  }

  /**
   * X component (index 0)
   */
  get x():number {
    return super.get(0);
  }

  /**
   * X component (index 0)
   */
  set x(value:number) {
    super.set(0, value);
  }

  /**
   * Y component (index 1)
   */
  get y():number {
    return super.get(1);
  }

  /**
   * Y component (index 1)
   */
  set y(value:number) {
    super.set(1, value);
  }

  /**
   * Converts this Vector2 to a Vector object explicitely.
   * 
   * @returns {Vector} New Vector
   */
  public toVector():Vector {
    return new Vector(this.x, this.y);
  }

  public override fill(val:number):Vector2 {
    this.x = val;
    this.y = val;
    return this;
  }

  public override reset():Vector2 {
    return this.fill(0.0);
  }

  public override set(...values:number[]):Vector2 {
    if(values.some(val => (typeof val !== 'number')))
      throw new TypeError(`Vector2.set() must be provided only number values.`);

    if(values.length !== 0) {
      this.x = values[0];

      if(values.length >= 2)
        this.y = values[1];
    }
    
    return this;
  }

  public override abs():Vector2 {
    return this.map(Math.abs);
  }

  public override add(other:Vector2Equiv):Vector2 {
    try {
      const [ otherX, otherY ] = vecToArray(other, 2);
      return new Vector2(this.x + otherX, this.y + otherY);
    } catch (err) {
      throw new TypeError(`Vector2.add() called without a number, Array of numbers, or other Vector object.`);
    }
  }

  public override ceil():Vector2 {
    return this.map(Math.ceil);
  }

  public override clamp(min = 0.0, max = 1.0):Vector2 {
    return this.map(val => clampFloat(val, min, max));
  }

  public override divide(other:Vector2Equiv):Vector2 {
    try {
      const [ otherX, otherY ] = vecToArray(other, 2);
      return new Vector2(this.x / otherX, this.y / otherY);
    } catch (err) {
      throw new TypeError(`Vector2.divide() called without a number, Array of numbers, or other Vector object.`);
    }
  }

  public override floor():Vector2 {
    return this.map(Math.floor);
  }

  public override map(func:VectorMapCallback):Vector2 {
    const newArr = [ this.x, this.y ].map(func);
    return new Vector2(...newArr);
  }

  public override mapWith(other:Vector2Equiv, func:VectorMapWithCallback):Vector2 {
    const otherArr = vecToArray(other, 2);
    
    // Map this vector as array with the other vector to get the new vector
    const newArr = this.toArray().map((val:number, ind:number):number => func(val, otherArr[ind], ind, false));

    return new Vector2(newArr);
  }

  public override multiply(other:Vector2Equiv):Vector2 {
    try {
      const [ otherX, otherY ] = vecToArray(other, 2);
      return new Vector2(this.x * otherX, this.y * otherY);
    } catch (err) {
      throw new TypeError(`Vector2.multiply() called without a number, Array of numbers, or other Vector object.`);
    }
  }

  public override normalize():Vector2 {
    return Vector2.fromVector(super.normalize());
  }

  public override pow(exp:number):Vector2 {
    return this.map(val => Math.pow(val, exp));
  }

  public override round():Vector2 {
    return this.map(Math.round);
  }

  public override scale(mult:number):Vector2 {
    return this.multiply(mult);
  }

  public override subtract(other:Vector2Equiv):Vector2 {
    try {
      const [ otherX, otherY ] = vecToArray(other, 2);
      return new Vector2(this.x - otherX, this.y - otherY);
    } catch (err) {
      throw new TypeError(`Vector2.subtract() called without a number, Array of numbers, or other Vector object.`);
    }
  }

  public override sqrt():Vector2 {
    return this.map(Math.sqrt);
  }

  public override trunc():Vector2 {
    return this.map(Math.trunc);
  }

  /**
   * Calculates the angle (either radians or degrees) between this Vector2 and
   * another Vector2 object.
   * 
   * @param {Vector2} other Other Vector2 object
   * @param {boolean} [useDegrees = false] Make the results in degrees 
   * @returns {number} Angle between the two vectors
   */
  public angleBetween(other:Vector2, useDegrees = false):number {
    const rads = Math.acos(this.dotProduct(other) / (this.magnitude() * other.magnitude()));
    return useDegrees ? radToDeg(rads) : rads;
  }

  /**
   * Calculates the Euclidean distance between two points.
   * 
   * @see {@link Vector2.dotProduct} for a squared version
   * @param other Other Vector2 object
   * @returns {number} Euclidean distance between the two-points.
   */
  public distance(other:Vector2):number {
    return Math.sqrt(this.dotProduct(other));
  }

  /**
   * Calculates the dot-product between this and another Vector2.
   * 
   * @param {Vector2} other Other Vector2 object
   * @returns {number} Dot-product of the two Vector2s
   */
  public dotProduct(other:Vector2):number {
    return (this.x * other.x) + (this.y * other.y);
  }

  /**
   * Projects this Vector2 onto another Vector2 and returns a new Vector2 object
   * of the results.
   * 
   * @param {Vector2} other Other Vector2 object
   * @returns {Vector2} New Vector2 object
   */
  public project(other:Vector2):Vector2 {
    const otherNorm = other.normalize();
    return otherNorm.scale(this.dotProduct(otherNorm));
  }

  /**
   * Rotates this Vector2 by the given radians.
   * 
   * @see {@link Vector2.rotateDeg} for the degree version
   * @param {number} rad Radians
   * @returns {Vector2} New Vector2 object
   */
  public rotate(rad:number):Vector2 {
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    const newX = (this.x * cos) - (this.y * sin);
    const newY = (this.x * sin) - (this.y * cos);

    return new Vector2(newX, newY);
  }

  /**
   * Rotates this Vector2 around a circle centered at the point defined by
   * `other` with a radius being the distance between this Vector2 and the
   * other Vector2, using the angle provided. The results are a new Vector2
   * object that is a point on that circle.
   * 
   * @param {Vector2} other Other Vector2 object as centering point
   * @param {number} ang Angle in radians (or degrees if `useDeg` is true)
   * @param {boolean} [useDeg = false] If true, `ang` is degrees
   * @returns {Vector2} New Vector2 object
   */
  public rotateAround(other:Vector2, ang:number, useDeg = false):Vector2 {
    const rads = useDeg ? degToRad(ang) : ang;
    const cos = Math.cos(rads);
    const sin = Math.sin(rads);

    const newX = (cos * (this.x - other.x)) - (sin * (this.y - other.y)) + other.x;
    const newY = (sin * (this.x - other.x)) + (cos * (this.y - other.y)) + other.y;

    return new Vector2(newX, newY);
  }

  /**
   * Rotates this Vector2 by the given degrees.
   * 
   * @see {@link Vector2.rotate} for the radian version
   * @param {number} deg Degrees
   * @returns {Vector2} New Vector2 object
   */
  public rotateDeg(deg:number):Vector2 {
    return this.rotate(degToRad(deg));
  }
};
