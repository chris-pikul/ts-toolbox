/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 */

/**
 * Generic Vector class that supports any number of components, operations
 * between different Vectors, and general math.
 */
export default class Vector {
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
   *    array of numbers to denote each component.
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

    this.get = this.get.bind(this);
    this.magnitudeSqr = this.magnitudeSqr.bind(this);
    this.magnitude = this.magnitude.bind(this);
    this.maxComponent = this.maxComponent.bind(this);
    this.minComponent = this.minComponent.bind(this);
    this.reduce = this.reduce.bind(this);

    this.fill = this.fill.bind(this);
    this.map = this.map.bind(this);
    this.reset = this.reset.bind(this);
    this.resize = this.resize.bind(this);
    this.set = this.set.bind(this);
    this.setComponent = this.setComponent.bind(this);

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
      // Parse string
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
    if(ind < 0 || ind > this.#count)
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
    return [ ...this.#components ].reduce(func, init);
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
   * Runs a mapping function on each component of this Vector and then returns
   * a new Vector with the components set.
   * 
   * @see {@link Array.prototype.map}
   * @param {Function} func Callback function to run on each component, which
   * should return a new number value.
   * @returns {Vector} New Vector object
   */
  public map(func:(val:number, ind:number, arr:number[])=>number):Vector {
    const newArr = [ ...this.#components ].map(func);
    return new Vector(newArr);
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
   * Resizes this Vector to have a new component length. If the requested
   * number of components is larger then the new components are set to 0. If
   * the requested number is shorter, then the components are dropped in order.
   * 
   * @param numComponents Number of components
   * @returns {Vector} New Vector object
   */
  public resize(numComponents:number):Vector {
    if(numComponents < 1)
      throw new TypeError(`Vector.resize() must be provided a new component length of 1 or greater.`);

    if(numComponents === this.#count) {
      return new Vector(this);
    } else if(numComponents > this.#count) {
      const newArr = new Array(numComponents);
      for(let ind = 0; ind < this.#count; ind++)
        newArr[ind] = this.#components[ind];
      for(let ind = this.#count; ind < numComponents; ind++)
        newArr[ind] = 0.0;
      return new Vector(newArr);
    } else if(numComponents < this.#count) {
      return new Vector(this.#components.slice(0, numComponents));
    }
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
    if(ind < 0 || ind > this.#count)
      throw new Error(`Vector.get() was provided a component index out of bounds "${ind}".`);
    
    this.#components[ind] = val;

    return this;
  }
};
