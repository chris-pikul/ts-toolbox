# big-toolbox

Library of common TypeScript utilities as a package. It's really a grab-bag of different functions and types that I've written over time. I wouldn't use this
as a browser library, but instead is intended for use with a bundler of some sorts so that tree-shaking can be performed.

## Install

```bash
npm install --save big-toolbox
yarn add big-toolbox
```

## Included functionality

### Arrays

* `inPlaceConcat` - Concatenates arrays "in-place"
* `flattenArray` - Poly-fill for `Array.flat()`.

### Functions

* `throttle` - Wraps a callback and enables time-based throttling
* `debounce` - Wraps a callback and enables time-based debouncing

### Math

* `isInteger` - Type-checks and tests if number is an integer
* `isFloat` - Type-checks and tests if a number is a float (not-integer)
* `isPositive` - Type-checks and tests if a number is positive
* `isNegative` - Type-checks and tests if a number is negative
* `isOdd` - Type-checks and tests if a number is odd
* `isEven` - Type-checks and tests if a number is even
* `isMultiple` - Type-checks and tests if a number is a multiple of another
* `positive` - Type-checks and ensures a number is positive (0 inclusive)
* `negative` - Type-checks and ensures a number is negative (0 exclusive)
* `clampFloat` - Type-checks and clamps the range of a number
* `clampUnit` - Type-checks and clamps a number between 0..1
* `clampDegree` - Type-checks and clamps a number between 0..360
* `clampInteger` - Type-checks and clamps the range of a number, truncating decimals.
* `clampByte` - Type-checks and clamps a number between 0..255, truncating decimals.
* `precisionRound` - Rounds a number to a given level of decimal precision.
* `precisionFloor` - Floors a number to a given level of decimal precision.
* `precisionCeil` - Ceils a number to a given level of decimal precision.
* `precisionModulo` - Modulos a number by a nother, with a given level of decimal precision.
* `wrapToPositive` - Wraps positive and negative numbers to the remainder within a positive range.
* `equals` - Performs floating point equivelence test within a given tolerance (precision).
* `degToRad` - Converts degrees to radians
* `radToDeg` - Converts radians to degrees
* `linearInterp` - Linearly interpolates between 2 values given an alpha fraction (0..1)
* `inverseLinearInterp` - Inteversly interpolates a value by a range, returning the alpha fraction (0..1).
* `rescale` - Takes an incoming range and value, and an output range and calculates a new value at the same delta as the incoming.

### Objects

* `objectNestedAssign` - Recursively assigns objects to a target object.
* `objectsAreSameType` - Attempts to type-check two incoming values for equivelence.
* `objectMatchesLayout` - Ensures that an incoming object has the same keys as another.
* `TypedMap` - A simple string-key Map type that performs type-checking on adding keys.

### Random

* `randomRange` - Generate a random value in a range
* `randomPositiveInteger` - Generates a random positive integer within integer-bounds.
* `randomNegativeInteger` - Generates a random negative integer within integer-bounds.
* `randomInteger` - Generates a random integer within signed-integer bounds.
* `randomBoolean` - Generates a random true/false.
* `randomAlphaNumericCharacter` - Generates a single character string within [0-9 A-Z a-z].
* `randomCharacter` - Generates a random ASCII character.
* `randomString` - Generates a random string of given length.
* `createUID` - Generates a random Base-36 string.

### Vector __Class__

Class for Vector math. Provided as a generic container that can hold variable number of components.

#### Vector: Properties

* `Vector.cound` - The number of components present in the Vector.

#### Vector: Methods

* `Vector.toString()` - Convert a Vector to string representation
* `Vector.toArray()` - Convert a Vector to an Array of components
* `Vector.get()` - Retrieve a component at an index
* `Vector.getSafe()` - Retrieve a component at an index with out-of-bounds fallback protection
* `Vector.magnitudeSqr()` - Get the magnitude (or length) of a Vector as a squared value (faster)
* `Vector.magnitude()` - Get the magnitude (or length) of a Vector
* `Vector.maxComponent()` - Get the largest component of the Vector
* `Vector.minComponent()` - Get the smallest component of the Vector
* `Vector.reduce()` - Perform a reduction callback on the components of the Vector, in order to return a singular value
* `Vector.fill()` - Fill all components of the Vector with a given value
* `Vector.reset()` - Reset all components of the Vector to 0.
* `Vector.set()` - Set all the components of the Vector with variable arguments
* `Vector.setComponent()` - Set the component of a given index with a given value.
* `Vector.abs()` - Immutably perform a Math.abs on all components and return a new Vector.
* `Vector.append()` - Immutably append new components onto the vector (resizing it)
* `Vector.ceil()` - Immutably perform a Math.ceil on all components and return a new Vector.
* `Vector.clamp()` - Immutably clamp all components and return a new Vector.
* `Vector.concat()` - Immutably concatenate vectors together and return a newly resized Vector.
* `Vector.divide()` - Immutably divide a Vector with another and return a new Vector of the results.
* `Vector.floor()` - Immutably perform a Math.floor on all components and return a new Vector.
* `Vector.map()` - Immutably run a mapping function on all components, building a new Vector and returning the results.
* `Vector.mapWith()` - Immutably run a mapping function on all components, with another Vector "looking" object, and return a new Vector with the results.
* `Vector.multiply()` - Immutably multiply a Vector with another and return a new Vector of the results.
* `Vector.normalize()` - Immutably normalize all the components of the Vector so that the resulting length is 1 (unit) and return the new Vector.
* `Vector.pow()` - Immutably perform an exponential powering of each component, and return a new Vector of the results.
* `Vector.resize()` - Immutably resize a Vector to have a given number of components.
* `Vector.round()` - Immutably perform a Math.round and return a new Vector of the results.
* `Vector.scale()` - Immutably multiply all components by a given scalar and return the results.
* `Vector.subtract()` - Immutably subtract a Vector from another, and return a new Vector of the results.
* `Vector.sqrt()` - Immutably perform a square-rooting of each component of a Vector and return the results.
* `Vector.trunc()` - Immutably perform a Math.trunc on each component and return a new Vector of the results.
* `Vector.difference()` - Calculate the scalar difference between two vectors
* `Vector.equals()` - Check the floating-point equivelency between two vectors with a given tolerance.

### Vector2 (extends Vector) __Class__

Extends of of Vector to provide a fixed-length Vector of 2 components. Includes getter/setters for virtual properties X, and Y. Most methods are overriden to change the parameter types and return types for Vector2 usage.

#### Vector2: Properties

* `Vector2.count` - The number of components
* `Vector2.x` - The X component (first index)
* `Vector2.y` - The Y component (second index)

#### Vector2: Additional Methods

* `Vector2.angleBetween()` - Calculate the angle produced between to Vector2 points, returns as either radians (default) or degrees with switch.
* `Vector2.distance()` - Calculate the euclidean distance between two Vector2 points.
* `Vector2.dotProduct()` - Calculate the dot-product between two Vector2 objects.
* `Vector2.rotate()` - Rotate the Vector2 by a given radian angle.
* `Vector2.rotateAround()` - Rotate a Vector2 around a circle difined by the position given by another Vector2.
* `Vector2.rotateDeg()` - Rotate the Vector2 by a given degree angle.
* `Vector2.toRadians()` - Interpret the Vector2 as a unit-vector and calculate the radian angle described.
* `Vector2.toDegrees()` - Interpret the Vector2 as a unit-vector and calculate the degree angle described.

## Constribution

Feel free to contribute new functionality to this library by issuing a PR.

## License

Licensed under MIT, see `LICENSE` file for more information.

## Author

Chris Pikul
