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
   * - `Vector`: Directly clones another Vector object.
   * 
   * ---------------------------------------------------------------------------
   * ```javascript
   * const vec3 = Vector(3); // Vector with 3 components (X,Y,Z) all being 0.
   * const vec2 = Vector(5, 10); // Vector with 2 components, [5,10].
   * const str = Vector("{3, 6, 9}"); // Parsed string, [3, 6, 9].
   * const vecA = Vector([3, 6, 9]); // Vector with 3 components, [3, 6, 9].
   * const vec3b = Vector(vec3); // Copy of the "vec3" object.
   * ```
   * 
   * @param numComponents How many components (axis) [must be greater than 0]
   * @param {Array} _args Variable number of additional arguments
   */
  constructor(arg:(number|string|Array<number>|Vector), ..._args:number[]) {
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
        for(let ind=0; ind < this.#count; ind++)
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
      } else {
        throw new TypeError(`Vector was constructed with an Object, this must be either an Array or another Vector.`);
      }
    }
  }
};
