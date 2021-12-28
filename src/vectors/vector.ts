/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */

export type VectorMapCallback = (val:number, ind:number, arr:number[]) => number;

/**
 * Callback for usage with {@link Vector.mapWith}.
 * 
 * @callback VectorMapWithCallback
 * @param {number} valA First value
 * @param {number} valB Second value
 * @param {number} ind Index of the component
 * @param {boolean} outBounds True if the component index is out-of-bounds
 * with one of the Vectors.
 * @returns {number} New value
 */
export type VectorMapWithCallback = (valA:number, valB:number, ind?:number, outBounds?:boolean) => number;

// Regular Expression for matching any viable number
const regexpNumbers = /(-?[\d.]+[\d.e]*-?\d*)/g;

/**
 * Generic Vector class that supports any number of components, operations
 * between different Vectors, and general math.
 */
export default class Vector {
  /**
   * Creates a new Vector of given number of components, and fills each
   * component with a random unit-float (0..1). The resulting Vector is not
   * normalized.
   * 
   * @param {number} count Number of components, 1 or greater
   * @returns {Vector} New Vector
   */
  public static random(count:number):Vector {
    if(count < 1)
      throw new TypeError(`Vector.random() must be provided a number of components 1 or greater.`);
    
    const arr = new Array(count);
    for(let ind = 0; ind < count; ind++)
      arr[ind] = Math.random();

    return new Vector(arr);
  }

  /**
   * Creates a new Vector of given number of components, and fills each
   * component with a random unit-float (0..1). The resulting Vector is then
   * normalized and returned.
   * 
   * @see {@link Vector.random}
   * @param {number} count Number of components, 1 or greater
   * @returns {Vector} New Vector
   */
  public static randomUnit(count:number):Vector {
    if(count < 1)
      throw new TypeError(`Vector.randomUnit() must be provided a number of components 1 or greater.`);

    return Vector.random(count).normalize();
  }

  /**
   * Creates a new Vector of given number of components, and fills each
   * component with a random number within the range specified.
   * 
   * @param count Number of components, 1 or greater
   * @param min Minimum value
   * @param max Maximum value
   * @returns {Vector} New Vector
   */
  public static randomRange(count:number, min = 0, max = 1):Vector {
    // Find the actual min and max
    const actMin = Math.min(min, max);
    const actMax = Math.max(min, max);

    // Generator for making random numbers within range
    const gen = () => {
      const range = actMax - actMin;
      return (Math.random() * range) + actMin;
    };

    // Create a new array of components and fill it
    const arr = new Array(count);
    for(let ind = 0; ind < count; ind++)
      arr[ind] = gen();

    return new Vector(arr);
  }

  /**
   * Components array, holds each component or axis for the vector
   */
  #components:Array<number> = [];

  /**
   * The number of components expected
   * 
   * READONLY: Set from constructor
   */
  readonly #count:number;

  /**
   * Creates a new Vector object.
   * 
   * The first parameter is required and denotes how the object will be
   * constructed. Accepts the following types and their functionality:
   * - `number`: Either the number of components if it's the only argument, or
   *    the start of value initializers if more than 1 argument is provided.
   * - `string`: Will attempt to parse the incoming string to find a valid
   *    array of numbers to denote each component. This will grab any numbers it
   *    can find using regexp and will not inforce formatting or delimiters.
   * - `Array`: An array will be interpreted as a list of components and must
   *    contain at least 1 entry and all indices being numbers.
   * - `Vector`: Directly clones another Vector object. Any additional
   *    arguments are considered additional components and will resize the
   *    Vector accordingly.
   * 
   * ---------------------------------------------------------------------------
   * ```javascript
   * Vector(3); // Vector with 3 components (X,Y,Z) all being 0.
   * Vector(5, 10); // Vector with 2 components, [5,10].
   * Vector("{3, 6, 9}"); // Parsed string, [3, 6, 9].
   * Vector([3, 6, 9]); // Vector with 3 components, [3, 6, 9].
   * Vector(other); // Copy of the other Vector object.
   * Vector(other, 12, 15); // Copy of other Vector, with additional components
   * ```
   * 
   * @param numComponents How many components (axis) [must be greater than 0]
   * @param {Array} _args Variable number of additional arguments
   */
  constructor(arg:(number|string|Array<number>|Vector), ..._args:number[]) {
    // Bind all the methods
    this.toString = this.toString.bind(this);
    this.toArray = this.toArray.bind(this);

    // Getters
    this.get = this.get.bind(this);
    this.magnitudeSqr = this.magnitudeSqr.bind(this);
    this.magnitude = this.magnitude.bind(this);
    this.maxComponent = this.maxComponent.bind(this);
    this.minComponent = this.minComponent.bind(this);
    this.reduce = this.reduce.bind(this);

    // Manipulators
    this.fill = this.fill.bind(this);
    this.reset = this.reset.bind(this);
    this.set = this.set.bind(this);
    this.setComponent = this.setComponent.bind(this);

    // Immutable functions
    this.abs = this.abs.bind(this);
    this.append = this.append.bind(this);
    this.ceil = this.ceil.bind(this);
    this.clamp = this.clamp.bind(this);
    this.concat = this.concat.bind(this);
    this.divide = this.divide.bind(this);
    this.floor = this.floor.bind(this);
    this.map = this.map.bind(this);
    this.mapWith = this.mapWith.bind(this);
    this.multiply = this.multiply.bind(this);
    this.normalize = this.normalize.bind(this);
    this.pow = this.pow.bind(this);
    this.resize = this.resize.bind(this);
    this.round = this.round.bind(this);
    this.scale = this.scale.bind(this);
    this.subtract = this.subtract.bind(this);
    this.sqrt = this.sqrt.bind(this);
    this.trunc = this.trunc.bind(this);

    // Working with other Vectors
    this.difference = this.difference.bind(this);
    this.equals = this.equals.bind(this);

    // Negotiate the type of the first argument to declare the constructor type
    if(typeof arg === 'number') {
      // Check if we will initialize values directly
      if(_args && _args.length) {
        // Ensure types on the remaining arguments
        if(_args.some(val => (typeof val !== 'number')))
          throw new TypeError(`Vector was constructed with multiple arguments, all arguments must be numbers.`);

        // Set the number of components to be length+1
        this.#count = _args.length + 1;

        // Initialize the components using the arguments
        this.#components[0] = arg;
        for(let ind = 0; ind < _args.length; ind++)
          this.#components[ind + 1] = _args[ind];
      } else {
        // Only 1 argument (number) provided, this is number of components
        if(arg < 1)
          throw new TypeError(`Vector was constructed with single number argument, this must be a positive number of components.`);

        this.#count = Math.trunc(arg);
        for(let ind = 0; ind < this.#count; ind++)
          this.#components[ind] = 0.0;
      }
    } else if(typeof arg === 'string') {
      // Parse string using a regular expression
      const values = [ ...arg.matchAll(regexpNumbers) ]
        .map(match => parseFloat(match[0]));

      if(!values || values.length === 0)
        throw new TypeError(`Vector was constructed with a string that could not be parsed.`);

      this.#count = values.length;
      this.#components = [ ...values ];
    } else if(typeof arg === 'object') {
      if(Array.isArray(arg)) {
        // For an array, we copy the values directly
        if(arg.length === 0)
          throw new TypeError(`Vector was constructed with an empty Array, must provide values.`);

        // Provide type safety
        if(arg.some(val => (typeof val !== 'number')))
          throw new TypeError(`Vector was constructed with an Array, each entry must be a number.`);
        
        this.#count = arg.length;
        this.#components = [ ...arg ];
      } else if(arg instanceof Vector) {
        // For another Vector we directly copy the values
        this.#count = arg.#count;
        this.#components = [ ...arg.#components ];

        // We allow for resizing to enlarged Vectors by allowing for _args
        if(_args && _args.length) {
          for(let ind = 0; ind < _args.length; ind++) {
            if(typeof _args[ind] !== 'number')
              throw new TypeError(`Vector was constructed with another Vector, any additional arguments are treated as additional components and must be numbers.`);

            this.#count++;
            this.#components.push(_args[ind]);
          }
        }
      } else {
        throw new TypeError(`Vector was constructed with an Object, this must be either an Array or another Vector.`);
      }
    }
  }

  /**
   * Number of components in this Vector
   */
  get count():number {
    return this.#count;
  }

  /**
   * Converts this Vector into a string representation. Each component will be
   * comma deliminated with the whole string wrapped in square brackets.
   * 
   * Ex. `"[1, 2.5, 3.14]"`
   * 
   * @returns {string} String representation
   */
  public toString():string {
    return `[${this.#components.map(val => val.toString()).join(', ')}]`;
  }

  /**
   * Converts this Vector into an Array of numbers.
   * 
   * @returns {Array} Array of numbers
   */
  public toArray():Array<number> {
    return [ ...this.#components ];
  }

  /**
   * Returns an individual component at the given index.
   * 
   * @param {number} ind Component index
   * @returns {number} Value at component index
   * @throws {Error} if index is out of bounds
   */
  public get(ind:number):number {
    if(ind < 0 || ind >= this.#count)
      throw new Error(`Vector.get() was provided a component index out of bounds "${ind}".`);
    return this.#components[ind];
  }

  /**
   * Calculates the magnitude (length) of this vector.
   * 
   * @returns {number} Magnitude (length) 
   */
  public magnitude():number {
    return Math.sqrt(this.magnitudeSqr());
  }

  /**
   * Calculates the magnitude (length) of this vector. Returned as the squared
   * value for performance.
   * 
   * @see {@link Vector.mangitude} for the square-rooted value
   * @returns {number} Squared magnitude 
   */
  public magnitudeSqr():number {
    return this.#components.reduce((acc, cur) => (acc + (cur * cur)), 0);
  }

  /**
   * Returns the largest component within this Vector
   * 
   * @returns {number} Largest component
   */
  public maxComponent():number {
    return Math.max(...this.#components);
  }

  /**
   * Returns the smallest component within this Vector
   * 
   * @returns {number} Minimum component
   */
  public minComponent():number {
    return Math.min(...this.#components);
  }

  /**
   * Reduces this Vector's components down to a singular value using the
   * provided reducing callback. The starting value can be provided, but the
   * default is 0.0.
   * 
   * @see {@link Array.prototype.reduce} 
   * @param {Function} func Callback function to run on each component, takes an
   * incoming accumulator value and expects the return to be the next
   * accumulator.
   * @param {number} [init=0] Initial value to start with as the accumulator
   * @returns 
   */
  public reduce(func:(acc:number, cur:number, ind:number, arr:number[])=>number, init = 0.0):number {
    return this.#components.reduce(func, init);
  }

  /**
   * Sets all components within this Vector to the value provided.
   * 
   * @param val Value to use for all components
   * @returns {Vector} `this` for method-chaining
   */
  public fill(val:number):Vector {
    this.#components.fill(val);
    return this;
  }

  /**
   * Resets the vector by setting all values to 0.
   * 
   * @returns {Vector} `this` for method-chaining
   */
  public reset():Vector {
    this.#components.fill(0.0);
    return this;
  }

  /**
   * Sets the components of this Vector using the variable arguments provided.
   * If either more or less values are provided than the number of components,
   * they are ignored.
   * 
   * @param values... Numerical values to set 
   * @returns {Vector} `this` for method-chaining
   * @throws {TypeError} if an argument is not a number.
   */
  public set(...values:number[]):Vector {
    if(values.some(val => (typeof val !== 'number')))
      throw new TypeError(`Vector.set() must be provided only number values.`);

    for(let ind = 0; ind < Math.min(this.#count, values.length); ind++)
      this.#components[ind] = values[ind];

    return this;
  }

  /**
   * Sets the value of a given component directly.
   * 
   * @param {number} ind Component index
   * @param {number} val Component value
   * @returns {Vector} `this` for method-chaining
   * @throws {Error} if index is out of bounds
   */
  public setComponent(ind:number, val:number):Vector {
    if(ind < 0 || ind >= this.#count)
      throw new Error(`Vector.get() was provided a component index out of bounds "${ind}".`);
    
    this.#components[ind] = val;

    return this;
  }

  /**
   * Immutably absolutes each component of this Vector.
   * 
   * @returns {Vector} New Vector object
   */
  public abs():Vector {
    return this.map(val => Math.abs(val));
  }

  /**
   * Immutably adds the components of two Vectors or a number together.
   * 
   * Any missing components (two different sized Vectors) are replaced with
   * 0 values for the calculation.
   * 
   * If only a single number is used, then it is treated as the value for each
   * component.
   * 
   * @param {number|Vector|Array} other Other Vector
   * @returns {Vector} New Vector object
   */
  public add(other:(Vector|Array<number>|number)):Vector {
    if(other instanceof Vector || Array.isArray(other))
      return this.mapWith(other, (valA, valB) => (valA + valB));
    else if(typeof other === 'number')
      return this.map(val => (val + other));
    throw new TypeError(`Vector.add() called without a number, or other Vector object.`);
  }

  /**
   * Immutably appends new components onto this Vector and returns the new
   * Vector object.
   * 
   * @param values... New components 
   * @returns {Vector} New Vector object
   */
  public append(...values:number[]):Vector {
    return new Vector(this, ...values);
  }

  /**
   * Immutably ceilings all components of this Vector and returns a new Vector
   * object.
   * 
   * @returns {Vector} New Vector object
   */
  public ceil():Vector {
    return this.map((val:number) => Math.ceil(val));
  }

  /**
   * Immutably clamps all components of this vector to be within the given
   * range.
   * 
   * @param {number} [min=0] Minimum value
   * @param {number} [max=1] Maximum value
   * @returns {Vector} New Vector object
   */
  public clamp(min = 0.0, max = 1.0):Vector {
    const actMin = Math.min(min, max);
    const actMax = Math.max(min, max);

    return this.map(val => Math.max(Math.min(val, actMax), actMin));
  }

  /**
   * Immutably concats vectors together to form a new one. This is performed by 
   * "pasting" vectors on the end of this one. For instance, concatenating 2 
   * Vectors with 2 components each will result in a Vector of 4 components.
   * 
   * @param vecs... Vectors to concat
   * @returns {Vector} New Vector object
   */
  public concat(...vecs:Array<number[]|Vector>):Vector {
    const arrs = vecs.map((vec:(Array<number>|Vector)):Array<number> => {
      if(vec instanceof Vector)
        return vec.toArray();
      else if(Array.isArray(vec))
        return vec;
      throw new TypeError(`Vector.concat() requires either arrays of numbers, or Vector objects.`);
    });

    return new Vector(this.#components.concat(...arrs));
  }

  /**
   * Immutably divides the components of this Vector with the components of
   * another vector. Any missing components that do not line up are returned as
   * 0.
   * 
   * @param other Other Vector
   * @returns {Vector} New Vector object
   */
  public divide(other:(Vector|Array<number>|number)):Vector {
    let arr:Array<number>;

    if(other instanceof Vector) {
      arr = this.#components.map((val:number, ind:number) => {
        if(ind < other.count)
          return val / other.get(ind);
        return 0;
      });
    } else if(Array.isArray(other)) {
      if(other.some((val:unknown) => (typeof val !== 'number')))
        throw new TypeError(`Vector.divide() was called with an Array that was not entirely numbers.`);

      arr = this.#components.map((val:number, ind:number) => {
        if(ind < other.length)
          return val / other[ind];
        return 0;
      });
    } else if(typeof other === 'number') {
      arr = this.#components.map((val:number) => (val / other));
    } else {
      throw new TypeError(`Vector.divide() requires either a Vector, an Array of numbers, or a number.`);
    }

    return new Vector(arr);
  }

  /**
   * Immutably floors all components of this Vector and returns a new Vector
   * object.
   * 
   * @returns {Vector} New Vector object
   */
  public floor():Vector {
    return this.map((val:number) => Math.floor(val));
  }

  /**
   * Runs a mapping function on each component of this Vector and then returns
   * a new Vector with the components set.
   * 
   * @see {@link Array.prototype.map}
   * @param {Function} func Callback function to run on each component, which
   * should return a new number value.
   * @returns {Vector} New Vector object
   */
  public map(func:VectorMapCallback):Vector {
    const newArr = [ ...this.#components ].map(func);
    return new Vector(newArr);
  }

  /**
   * Immutably maps the components of two Vectors into a new Vector object.
   * 
   * Accepts a callback with the signature:
   * ```typescript
   * (valA:number, valB:number, ind?:number, outBounds?:boolean) => number;
   * ```
   * With the following parameters:
   * - `valA`: A component value
   * - `valB`: A component value
   * - `ind`: The index of the component within the Vectors
   * - `outBounds`: True if this index is out-of-boundas to one of the Vectors
   * 
   * The returned value is then mapped into a new Vector and returned. If the
   * two vectors are not of the same shape (different component counts), then
   * any missing components are replaced with 0 values.
   * 
   * @param {Vector} other Other Vector
   * @param {VectorMapWithCallback} func Callback function to be called on each
   * component of the larger Vector (as number of components) accepting two
   * values, and returning a new value.
   * @returns {Vector} New Vector object 
   */
  public mapWith(other:(Vector|Array<number>), func:VectorMapWithCallback):Vector {
    const thisArr = this.#components;

    let otherArr:Array<number>;
    if(other instanceof Vector) {
      otherArr = other.toArray();
    } else if(Array.isArray(other)) {
      if(other.some((val:unknown) => (typeof val !== 'number')))
        throw new TypeError(`Vector.mapWith() received an array that is not entirely numbers.`);
      otherArr = other;
    }

    // Use the smaller (or equal) vector
    const vecA = thisArr.length <= otherArr.length ? thisArr : otherArr;

    // Use the larger vector
    const vecB = thisArr.length > otherArr.length ? thisArr : otherArr;

    // Start the mapping using the larger array
    const arr = vecB.map((val:number, ind:number):number => {
      // Protect against out-of-bounds indices
      const comp = ind >= vecA.length ? 0 : vecA[ind];

      // Run the function to get the value
      return func(val, comp, ind, (ind >= vecA.length));
    });

    return new Vector(arr);
  }

  /**
   * Immutably multiplies the components of two Vectors or a number together.
   * 
   * Any missing components (two different sized Vectors) are replaced with
   * 0 values for the calculation.
   * 
   * If only a single number is used, then it is treated as the value for each
   * component.
   * 
   * @param {number|Vector|Array} other Other Vector
   * @returns {Vector} New Vector object
   */
  public multiply(other:(Vector|Array<number>|number)):Vector {
    if(other instanceof Vector || Array.isArray(other))
      return this.mapWith(other, (valA, valB) => (valA * valB));
    else if(typeof other === 'number')
      return this.map(val => (val * other));
    throw new TypeError(`Vector.multiply() called without a number, or other Vector object.`);
  }

  /**
   * Immutably normalizes this vector so that the new magnitude is 1.
   * 
   * @returns {Vector} New Vector object
   */
  public normalize():Vector {
    // Protect against 0 length
    if(this.#components.every((val:number) => val === 0))
      return new Vector(this);
    
    const len = this.magnitude();
    return this.map(val => (val / len));
  }

  /**
   * Immutably raises each component by the given exponent.
   * 
   * @param {number} exp Exponent (raise to the power of)
   * @returns {Vector} New Vector object
   */
  public pow(exp:number):Vector {
    return this.map(val => Math.pow(val, exp));
  }

  /**
   * Immutably resizes this Vector to have a new length of components.
   * Additional components are filled with the given `value` if there are more
   * components then previous. Otherwise the operation is a truncation.
   * 
   * @param numComponents Number of components
   * @param {number} [value=0] New value for components if enlarged
   * @returns {Vector} New Vector object
   */
  public resize(numComponents:number, value = 0.0):Vector {
    if(numComponents < 1)
      throw new TypeError(`Vector.resize() must be provided a new component length of 1 or greater.`);

    if(numComponents === this.#count) {
      return new Vector(this);
    } else if(numComponents > this.#count) {
      const newArr = new Array(numComponents);
      for(let ind = 0; ind < this.#count; ind++)
        newArr[ind] = this.#components[ind];
      for(let ind = this.#count; ind < numComponents; ind++)
        newArr[ind] = value;
      return new Vector(newArr);
    } else if(numComponents < this.#count) {
      return new Vector(this.#components.slice(0, numComponents));
    }
  }

  /**
   * Immutably rounds all components of this Vector and returns a new Vector
   * object.
   * 
   * @returns {Vector} New Vector object
   */
  public round():Vector {
    return this.map((val:number) => Math.round(val));
  }

  /**
   * Immutably scales this Vector by multiplying all of the components by the
   * given value.
   * 
   * @param {number} mult Multiplier
   * @returns {Vector} New Vector object
   */
  public scale(mult:number):Vector {
    return this.map(val => (val * mult));
  }

  /**
   * Immutably subtracts the components of two Vectors or a number together.
   * 
   * Any missing components (two different sized Vectors) are replaced with
   * 0 values for the calculation.
   * 
   * If only a single number is used, then it is treated as the value for each
   * component.
   * 
   * @param {number|Vector|Array} other Other Vector
   * @returns {Vector} New Vector object
   */
  public subtract(other:(Vector|Array<number>|number)):Vector {
    let arr:Array<number>;

    if(other instanceof Vector) {
      arr = this.#components.map((val:number, ind:number) => {
        if(ind < other.count)
          return val - other.get(ind);
        return val;
      });
    } else if(Array.isArray(other)) {
      if(other.some((val:unknown) => (typeof val !== 'number')))
        throw new TypeError(`Vector.subtract() was called with an Array that was not entirely numbers.`);

      arr = this.#components.map((val:number, ind:number) => {
        if(ind < other.length)
          return val - other[ind];
        return val;
      });
    } else if(typeof other === 'number') {
      arr = this.#components.map((val:number) => (val - other));
    } else {
      throw new TypeError(`Vector.subtract() requires either a Vector, an Array of numbers, or a number.`);
    }

    return new Vector(arr);
  }

  /**
   * Immutably performs a square-rooting on each component of this Vector.
   * 
   * @returns {Vector} New Vector object
   */
  public sqrt():Vector {
    return this.map(val => Math.sqrt(val));
  }

  /**
   * Immutably truncates all components of this Vector into integers and 
   * returns a new Vector object.
   * 
   * @returns {Vector} New Vector object
   */
  public trunc():Vector {
    return this.map((val:number) => Math.trunc(val));
  }

  /**
   * Calculates the difference between each component of this Vector, compared
   * with another. The total of each difference is summed and returned.
   * 
   * If the Vectors are different sizes, then any missing components are treated
   * as 0's.
   * 
   * @see {@link Vector.subtract} as an alternative returning Vectors
   * @param {Vector} other Other Vector
   * @returns {number} Absolute difference between all components
   */
  public difference(other:Vector):number {
    // Use the smaller (or equal) vector
    const vecA = this.count <= other.count ? this : other;

    // Use the larger vector
    const vecB = this.count > other.count ? this : other;

    // Start with the larger Vector and reduce
    return vecB.reduce((acc, cur, ind) => {
      // The other might be smaller, so check if this index is out of range
      const comp = ind >= vecA.count ? 0 : vecA.get(ind);

      // Return the ABS difference and add it to the accumulator
      return acc + Math.abs(cur - comp);
    });
  }

  /**
   * Checks if this Vector and another are equal to each other within a given
   * tolerance (default is Number.EPSILON).
   * 
   * If the Vectors are of different sizes, then any missing components are
   * treated as 0.
   * 
   * @param {Vector} other Other Vector
   * @param {number} [tolerance=Number.EPSILON] Tolerance for equality 
   * @returns {boolean} True if difference is within tolerance
   */
  public equals(other:Vector, tolerance = Number.EPSILON):boolean {
    return this.difference(other) < tolerance;
  }
};
