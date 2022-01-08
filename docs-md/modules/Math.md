[big-toolbox](../README.md) / [Exports](../modules.md) / Math

# Module: Math

Copyright © 2021 Chris Pikul, All Rights Reserved.

This code base (ts-toolbox or big-toolbox) is under the MIT license. See the
file at the project root "LICENSE" for more information.
-----------------------------------------------------------------------------

Provides utilities for working with numbers and math. Most methods provided
here do type-checking regardless of TypeScript support.

## Table of contents

### Functions

- [clampByte](Math.md#clampbyte)
- [clampDegree](Math.md#clampdegree)
- [clampFloat](Math.md#clampfloat)
- [clampInteger](Math.md#clampinteger)
- [clampUnit](Math.md#clampunit)
- [degToRad](Math.md#degtorad)
- [equals](Math.md#equals)
- [inverseLinearInterp](Math.md#inverselinearinterp)
- [isEven](Math.md#iseven)
- [isFloat](Math.md#isfloat)
- [isInteger](Math.md#isinteger)
- [isMultiple](Math.md#ismultiple)
- [isNegative](Math.md#isnegative)
- [isOdd](Math.md#isodd)
- [isPositive](Math.md#ispositive)
- [linearInterp](Math.md#linearinterp)
- [positive](Math.md#positive)
- [precisionCeil](Math.md#precisionceil)
- [precisionFloor](Math.md#precisionfloor)
- [precisionModulo](Math.md#precisionmodulo)
- [precisionRound](Math.md#precisionround)
- [radToDeg](Math.md#radtodeg)
- [rescale](Math.md#rescale)
- [wrapToPositive](Math.md#wraptopositive)

## Functions

### clampByte

▸ `Const` **clampByte**(`input`): `number`

Clamps an incoming number into a byte integer (0..255)

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to clamp |

#### Returns

`number`

Number as integer 0..255

#### Defined in

[math.ts:242](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L242)

___

### clampDegree

▸ `Const` **clampDegree**(`input`): `number`

Clamps a value into a floating-point number for degrees (0..360).
Returns 0 on invalid input.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to clamp |

#### Returns

`number`

Value between 0..360

#### Defined in

[math.ts:210](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L210)

___

### clampFloat

▸ `Const` **clampFloat**(`input`, `min?`, `max?`): `number`

Clamps the given value to be within the given range.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Number to clamp |
| `min` | `number` | `0` | Minimum value, defaults to 0 |
| `max` | `number` | `Number.MAX_VALUE` | Maximum value, defaults to Number.MAX_VALUE |

#### Returns

`number`

The number, clamped between min, and max.
 Or `Number.MAX_VALUE` if the input was invalid.

#### Defined in

[math.ts:181](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L181)

___

### clampInteger

▸ `Const` **clampInteger**(`input`, `min?`, `max?`): `number`

Clamps the given value to be within the given range.
Will truncate the value to the integral value (removing any fractionals)

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Number to clamp |
| `min` | `number` | `0` | Minimum value, defaults to 0 |
| `max` | `number` | `Number.MAX_VALUE` | Maximum value, defaults to Number.MAX_VALUE |

#### Returns

`number`

The number, clamped between min, and max.
 Or "Number.MAX_VALUE" if the input was invalid.

#### Defined in

[math.ts:228](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L228)

___

### clampUnit

▸ `Const` **clampUnit**(`input`): `number`

Clamps a value into a unit float (0..1)

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to clamp |

#### Returns

`number`

Value between 0..1, or 0 if invalid input

#### Defined in

[math.ts:195](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L195)

___

### degToRad

▸ `Const` **degToRad**(`deg`): `number`

Converts degrees to radians

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deg` | `number` | Degrees |

#### Returns

`number`

Radians

#### Defined in

[math.ts:336](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L336)

___

### equals

▸ `Const` **equals**(`first`, `second`, `tolerance?`): `boolean`

Checks if two numbers are equal within a set tolerance. This is useful for
floating-point arithmatic.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `first` | `number` | `undefined` | First number |
| `second` | `number` | `undefined` | Second number |
| `tolerance` | `number` | `Number.EPSILON` | - |

#### Returns

`boolean`

True if equals within tolerance

#### Defined in

[math.ts:326](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L326)

___

### inverseLinearInterp

▸ `Const` **inverseLinearInterp**(`start`, `end`, `delta`): `number`

Inversly performs the linear interpolation. The `delta` is expected to be a
whole value between the `start` and `end` values. The result of which is the
alpha factor of where the `delta` value lies on the unit (0..1) scale.

Essentially if you want to find how far between two-values a given number is,
this is that function.

ex: `inverseLinearInterp(50, 100, 75) == 0.5`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | Starting number |
| `end` | `number` | End number |
| `delta` | `number` | Value that lies between start and end |

#### Returns

`number`

Alpha factor 0..1

#### Defined in

[math.ts:373](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L373)

___

### isEven

▸ `Const` **isEven**(`input`, `decimals?`): `boolean`

Tests if the given number is even. For integer numbers this is straight
forward and only requires the input number. For floating-point numbers the
additional `decimals` option will truncate the float to that many decimal
positions, and then check the whole number for eveness. The default number
of decimal places is 2. Negative numbers are absoluted, so they are treated
equally.

Examples:
```
isEven(24) === true
isEven(3.1415) === true
isEven(3.1415, 3) === false
```

__Type-checks regardless of TypeScript__

**`see`** [isOdd](Math.md#isodd)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Number to test |
| `decimals` | `number` | `2` | - |

#### Returns

`boolean`

True if number is even

#### Defined in

[math.ts:125](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L125)

___

### isFloat

▸ `Const` **isFloat**(`input`): `boolean`

Tests if the input is a floating-point number.

__Type-checks regardless of TypeScript__

**`see`** [isInteger](Math.md#isinteger)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to test |

#### Returns

`boolean`

True if number is floating point

#### Defined in

[math.ts:37](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L37)

___

### isInteger

▸ `Const` **isInteger**(`input`): `boolean`

Tests if the input is a whole-integer number.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to test |

#### Returns

`boolean`

True if number is whole integer

#### Defined in

[math.ts:22](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L22)

___

### isMultiple

▸ `Const` **isMultiple**(`input`, `multiple`): `boolean`

Tests if the given `input` number is a multiple of `multiple`. It will treat
negatives the same. Ex. `isMultiple(-6, 2) === true`.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to test |
| `multiple` | `number` | Multiplier to compare against |

#### Returns

`boolean`

True if number is multiple

#### Defined in

[math.ts:146](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L146)

___

### isNegative

▸ `Const` **isNegative**(`input`): `boolean`

Tests if a number is negative, this does not include 0.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to test |

#### Returns

`boolean`

True if number is negative

#### Defined in

[math.ts:65](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L65)

___

### isOdd

▸ `Const` **isOdd**(`input`, `decimals?`): `boolean`

Tests if the given number is odd. For integer numbers this is straight
forward and only requires the input number. For floating-point numbers the
additional `decimals` option will truncate the float to that many decimal
positions, and then check the whole number for oddness. The default number
of decimal places is 2. Negative numbers are absoluted, so they are treated
equally.

Examples:
```
isOdd(23) === true
isOdd(3.1415) === false
isOdd(3.1415, 3) === true
```

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Number to test |
| `decimals` | `number` | `2` | - |

#### Returns

`boolean`

True if number is odd

#### Defined in

[math.ts:92](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L92)

___

### isPositive

▸ `Const` **isPositive**(`input`): `boolean`

Tests if a number is positive, this is 0 inclusive.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to test |

#### Returns

`boolean`

True if number is positive

#### Defined in

[math.ts:51](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L51)

___

### linearInterp

▸ `Const` **linearInterp**(`start`, `end`, `alpha`): `number`

Linearly interpolates between the start and end values given an alpha factor.
An `alpha` of 0 returns the `start`, 1 returns the `end` value, and 0.5 is
halfway between.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | Starting number |
| `end` | `number` | End number |
| `alpha` | `number` | Factor between start and end to return |

#### Returns

`number`

Resulting value between start and end

#### Defined in

[math.ts:356](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L356)

___

### positive

▸ `Const` **positive**(`input`): `number`

Ensures a number is positive by maxing it against 0. This is not the same as
absoluting (`Math.abs()`). Any negatives will return as 0.

__Type-checks regardless of TypeScript__

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Number to clamp |

#### Returns

`number`

Positive number, or "-1" if the input was invalid

#### Defined in

[math.ts:164](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L164)

___

### precisionCeil

▸ `Const` **precisionCeil**(`input`, `decimals?`): `number`

Ceils a number from a given number of decimal places. Example:
`precisionCeil(3.1415, 2) == 3.15`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Input number |
| `decimals` | `number` | `0` | Which decimal place to round from |

#### Returns

`number`

Calculated number

#### Defined in

[math.ts:278](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L278)

___

### precisionFloor

▸ `Const` **precisionFloor**(`input`, `decimals?`): `number`

Floors a number from a given number of decimal places. Example:
`precisionFloor(3.1415, 2) == 3.14`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Input number |
| `decimals` | `number` | `0` | Which decimal place to round from |

#### Returns

`number`

Calculated number

#### Defined in

[math.ts:265](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L265)

___

### precisionModulo

▸ `Const` **precisionModulo**(`input`, `mod`, `decimals?`): `number`

Wraps a value around and returns the remainder (modulo) while also performing
a precision-flooring by truncating by the number of decimal places provided.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Input number |
| `mod` | `number` | `undefined` | Modulo number |
| `decimals` | `number` | `0` | How many decimal places to keep |

#### Returns

`number`

Calculated number

#### Defined in

[math.ts:292](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L292)

___

### precisionRound

▸ `Const` **precisionRound**(`input`, `decimals?`): `number`

Rounds a number from a given number of decimal places. Example:
`precisionRound(3.14159, 2) == 3.14`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `number` | `undefined` | Input number |
| `decimals` | `number` | `0` | Which decimal place to round from |

#### Returns

`number`

Calculated number

#### Defined in

[math.ts:252](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L252)

___

### radToDeg

▸ `Const` **radToDeg**(`rad`): `number`

Converts radians to degrees

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | Radians |

#### Returns

`number`

Degrees

#### Defined in

[math.ts:344](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L344)

___

### rescale

▸ `Const` **rescale**(`value`, `fromStart`, `fromEnd`, `toStart`, `toEnd`): `number`

Re-scales the delta of value within the first range, onto the second range.
Essentially finds the alpha in which `value` lies within the first range,
and scales that onto the target range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value within first range |
| `fromStart` | `number` | Current range's start value |
| `fromEnd` | `number` | Current range's end value |
| `toStart` | `number` | Target range's end value |
| `toEnd` | `number` | Target range's end value |

#### Returns

`number`

Delta result of value re-scaled onto the target range

#### Defined in

[math.ts:390](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L390)

___

### wrapToPositive

▸ `Const` **wrapToPositive**(`input`, `range`): `number`

Ensures that the input value lies within a range of 0 to `range`.
If the input is negative it is wrapped around circularly until it lies within
the given range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number` | Input number |
| `range` | `number` | Maximum positive range |

#### Returns

`number`

Within 0 and `range`

#### Defined in

[math.ts:306](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/math.ts#L306)
