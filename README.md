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

## Constribution

Feel free to contribute new functionality to this library by issuing a PR.

## License

Licensed under MIT, see `LICENSE` file for more information.

## Author

Chris Pikul
