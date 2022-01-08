[big-toolbox](../README.md) / [Exports](../modules.md) / [vectors/vector](../modules/vectors_vector.md) / Vector

# Class: Vector

[vectors/vector](../modules/vectors_vector.md).Vector

Generic Vector class that supports any number of components, operations
between different Vectors, and general math.

## Hierarchy

- **`Vector`**

  ↳ [`Vector2`](vectors_vector2.Vector2.md)

## Table of contents

### Constructors

- [constructor](vectors_vector.Vector.md#constructor)

### Properties

- [#components](vectors_vector.Vector.md##components)
- [#count](vectors_vector.Vector.md##count)

### Accessors

- [count](vectors_vector.Vector.md#count)

### Methods

- [abs](vectors_vector.Vector.md#abs)
- [add](vectors_vector.Vector.md#add)
- [append](vectors_vector.Vector.md#append)
- [ceil](vectors_vector.Vector.md#ceil)
- [clamp](vectors_vector.Vector.md#clamp)
- [concat](vectors_vector.Vector.md#concat)
- [difference](vectors_vector.Vector.md#difference)
- [divide](vectors_vector.Vector.md#divide)
- [equals](vectors_vector.Vector.md#equals)
- [fill](vectors_vector.Vector.md#fill)
- [floor](vectors_vector.Vector.md#floor)
- [get](vectors_vector.Vector.md#get)
- [getSafe](vectors_vector.Vector.md#getsafe)
- [magnitude](vectors_vector.Vector.md#magnitude)
- [magnitudeSqr](vectors_vector.Vector.md#magnitudesqr)
- [map](vectors_vector.Vector.md#map)
- [mapWith](vectors_vector.Vector.md#mapwith)
- [maxComponent](vectors_vector.Vector.md#maxcomponent)
- [minComponent](vectors_vector.Vector.md#mincomponent)
- [multiply](vectors_vector.Vector.md#multiply)
- [normalize](vectors_vector.Vector.md#normalize)
- [pow](vectors_vector.Vector.md#pow)
- [reduce](vectors_vector.Vector.md#reduce)
- [reset](vectors_vector.Vector.md#reset)
- [resize](vectors_vector.Vector.md#resize)
- [round](vectors_vector.Vector.md#round)
- [scale](vectors_vector.Vector.md#scale)
- [set](vectors_vector.Vector.md#set)
- [setComponent](vectors_vector.Vector.md#setcomponent)
- [sqrt](vectors_vector.Vector.md#sqrt)
- [subtract](vectors_vector.Vector.md#subtract)
- [toArray](vectors_vector.Vector.md#toarray)
- [toString](vectors_vector.Vector.md#tostring)
- [trunc](vectors_vector.Vector.md#trunc)
- [random](vectors_vector.Vector.md#random)
- [randomRange](vectors_vector.Vector.md#randomrange)
- [randomUnit](vectors_vector.Vector.md#randomunit)

## Constructors

### constructor

• **new Vector**(`arg`, ...`_args`)

Creates a new Vector object.

The first parameter is required and denotes how the object will be
constructed. Accepts the following types and their functionality:
- `number`: Either the number of components if it's the only argument, or
   the start of value initializers if more than 1 argument is provided.
- `string`: Will attempt to parse the incoming string to find a valid
   array of numbers to denote each component. This will grab any numbers it
   can find using regexp and will not inforce formatting or delimiters.
- `Array`: An array will be interpreted as a list of components and must
   contain at least 1 entry and all indices being numbers.
- `Vector`: Directly clones another Vector object. Any additional
   arguments are considered additional components and will resize the
   Vector accordingly.

---------------------------------------------------------------------------
```javascript
Vector(3); // Vector with 3 components (X,Y,Z) all being 0.
Vector(5, 10); // Vector with 2 components, [5,10].
Vector("{3, 6, 9}"); // Parsed string, [3, 6, 9].
Vector([3, 6, 9]); // Vector with 3 components, [3, 6, 9].
Vector(other); // Copy of the other Vector object.
Vector(other, 12, 15); // Copy of other Vector, with additional components
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `string` \| `number` \| [`Vector`](vectors_vector.Vector.md) \| `number`[] | - |
| `..._args` | `number`[] | Variable number of additional arguments |

#### Defined in

[vectors/vector.ts:148](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L148)

## Properties

### #components

• `Private` **#components**: `number`[] = `[]`

Components array, holds each component or axis for the vector

#### Defined in

[vectors/vector.ts:110](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L110)

___

### #count

• `Private` `Readonly` **#count**: `number`

The number of components expected

READONLY: Set from constructor

#### Defined in

[vectors/vector.ts:117](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L117)

## Accessors

### count

• `get` **count**(): `number`

Number of components in this Vector

#### Returns

`number`

#### Defined in

[vectors/vector.ts:262](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L262)

## Methods

### abs

▸ **abs**(): [`Vector`](vectors_vector.Vector.md)

Immutably absolutes each component of this Vector.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:433](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L433)

___

### add

▸ **add**(`other`): [`Vector`](vectors_vector.Vector.md)

Immutably adds the components of two Vectors or a number together.

Any missing components (two different sized Vectors) are replaced with
0 values for the calculation.

If only a single number is used, then it is treated as the value for each
component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `number` \| [`Vector`](vectors_vector.Vector.md) \| `number`[] | Other Vector |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:449](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L449)

___

### append

▸ **append**(...`values`): [`Vector`](vectors_vector.Vector.md)

Immutably appends new components onto this Vector and returns the new
Vector object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `number`[] |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:464](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L464)

___

### ceil

▸ **ceil**(): [`Vector`](vectors_vector.Vector.md)

Immutably ceilings all components of this Vector and returns a new Vector
object.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:474](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L474)

___

### clamp

▸ **clamp**(`min?`, `max?`): [`Vector`](vectors_vector.Vector.md)

Immutably clamps all components of this vector to be within the given
range.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `0.0` |
| `max` | `number` | `1.0` |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:486](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L486)

___

### concat

▸ **concat**(...`vecs`): [`Vector`](vectors_vector.Vector.md)

Immutably concats vectors together to form a new one. This is performed by
"pasting" vectors on the end of this one. For instance, concatenating 2
Vectors with 2 components each will result in a Vector of 4 components.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...vecs` | ([`Vector`](vectors_vector.Vector.md) \| `number`[])[] |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:501](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L501)

___

### difference

▸ **difference**(`other`): `number`

Calculates the difference between each component of this Vector, compared
with another. The total of each difference is summed and returned.

If the Vectors are different sizes, then any missing components are treated
as 0's.

**`see`** [Vector.subtract](vectors_vector.Vector.md#subtract) as an alternative returning Vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](vectors_vector.Vector.md) | Other Vector |

#### Returns

`number`

Absolute difference between all components

#### Defined in

[vectors/vector.ts:786](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L786)

___

### divide

▸ **divide**(`other`): [`Vector`](vectors_vector.Vector.md)

Immutably divides the components of this Vector with the components of
another vector. Any missing components that do not line up are returned as
0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `number` \| [`Vector`](vectors_vector.Vector.md) \| `number`[] | Other Vector |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:521](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L521)

___

### equals

▸ **equals**(`other`, `tolerance?`): `boolean`

Checks if this Vector and another are equal to each other within a given
tolerance (default is Number.EPSILON).

If the Vectors are of different sizes, then any missing components are
treated as 0.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector`](vectors_vector.Vector.md) | `undefined` | Other Vector |
| `tolerance` | `number` | `Number.EPSILON` | - |

#### Returns

`boolean`

True if difference is within tolerance

#### Defined in

[vectors/vector.ts:814](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L814)

___

### fill

▸ **fill**(`val`): [`Vector`](vectors_vector.Vector.md)

Sets all components within this Vector to the value provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | Value to use for all components |

#### Returns

[`Vector`](vectors_vector.Vector.md)

`this` for method-chaining

#### Defined in

[vectors/vector.ts:377](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L377)

___

### floor

▸ **floor**(): [`Vector`](vectors_vector.Vector.md)

Immutably floors all components of this Vector and returns a new Vector
object.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:554](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L554)

___

### get

▸ **get**(`ind`): `number`

Returns an individual component at the given index.

**`throws`** {Error} if index is out of bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ind` | `number` | Component index |

#### Returns

`number`

Value at component index

#### Defined in

[vectors/vector.ts:294](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L294)

___

### getSafe

▸ **getSafe**(`ind`, `alt?`): `number`

Returns an individual component at the given index.

Does NOT throw an error for out-of-bounds indices, instead will return the
`alt` value (default is 0.0).

**`see`** [Vector.get](vectors_vector.Vector.md#get) for the version that throws errors

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ind` | `number` | `undefined` | Component index |
| `alt` | `number` | `0.0` | Alternative value if out-of-bounds index |

#### Returns

`number`

Value at component index (or alt value)

#### Defined in

[vectors/vector.ts:311](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L311)

___

### magnitude

▸ **magnitude**(): `number`

Calculates the magnitude (length) of this vector.

#### Returns

`number`

Magnitude (length)

#### Defined in

[vectors/vector.ts:322](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L322)

___

### magnitudeSqr

▸ **magnitudeSqr**(): `number`

Calculates the magnitude (length) of this vector. Returned as the squared
value for performance.

**`see`** {@link Vector.mangitude} for the square-rooted value

#### Returns

`number`

Squared magnitude

#### Defined in

[vectors/vector.ts:333](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L333)

___

### map

▸ **map**(`func`): [`Vector`](vectors_vector.Vector.md)

Runs a mapping function on each component of this Vector and then returns
a new Vector with the components set.

**`see`** {@link Array.prototype.map}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | [`VectorMapCallback`](../modules/vectors_vector.md#vectormapcallback) | Callback function to run on each component, which should return a new number value. |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:567](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L567)

___

### mapWith

▸ **mapWith**(`other`, `func`): [`Vector`](vectors_vector.Vector.md)

Immutably maps the components of two Vectors into a new Vector object.

Accepts a callback with the signature:
```typescript
(valA:number, valB:number, ind?:number, outBounds?:boolean) => number;
```
With the following parameters:
- `valA`: A component value
- `valB`: A component value
- `ind`: The index of the component within the Vectors
- `outBounds`: True if this index is out-of-boundas to one of the Vectors

The returned value is then mapped into a new Vector and returned. If the
two vectors are not of the same shape (different component counts), then
any missing components are replaced with 0 values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](vectors_vector.Vector.md) \| `number`[] | Other Vector |
| `func` | [`VectorMapWithCallback`](../modules/vectors_vector.md#vectormapwithcallback) | Callback function to be called on each component of the larger Vector (as number of components) accepting two values, and returning a new value. |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:595](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L595)

___

### maxComponent

▸ **maxComponent**(): `number`

Returns the largest component within this Vector

#### Returns

`number`

Largest component

#### Defined in

[vectors/vector.ts:342](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L342)

___

### minComponent

▸ **minComponent**(): `number`

Returns the smallest component within this Vector

#### Returns

`number`

Minimum component

#### Defined in

[vectors/vector.ts:351](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L351)

___

### multiply

▸ **multiply**(`other`): [`Vector`](vectors_vector.Vector.md)

Immutably multiplies the components of two Vectors or a number together.

Any missing components (two different sized Vectors) are replaced with
0 values for the calculation.

If only a single number is used, then it is treated as the value for each
component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `number` \| [`Vector`](vectors_vector.Vector.md) \| `number`[] | Other Vector |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:637](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L637)

___

### normalize

▸ **normalize**(): [`Vector`](vectors_vector.Vector.md)

Immutably normalizes this vector so that the new magnitude is 1.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:650](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L650)

___

### pow

▸ **pow**(`exp`): [`Vector`](vectors_vector.Vector.md)

Immutably raises each component by the given exponent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exp` | `number` | Exponent (raise to the power of) |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:665](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L665)

___

### reduce

▸ **reduce**(`func`, `init?`): `number`

Reduces this Vector's components down to a singular value using the
provided reducing callback. The starting value can be provided, but the
default is 0.0.

**`see`** {@link Array.prototype.reduce}

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | (`acc`: `number`, `cur`: `number`, `ind`: `number`, `arr`: `number`[]) => `number` | `undefined` | Callback function to run on each component, takes an incoming accumulator value and expects the return to be the next accumulator. |
| `init` | `number` | `0.0` | - |

#### Returns

`number`

#### Defined in

[vectors/vector.ts:367](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L367)

___

### reset

▸ **reset**(): [`Vector`](vectors_vector.Vector.md)

Resets the vector by setting all values to 0.

#### Returns

[`Vector`](vectors_vector.Vector.md)

`this` for method-chaining

#### Defined in

[vectors/vector.ts:387](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L387)

___

### resize

▸ **resize**(`numComponents`, `value?`): [`Vector`](vectors_vector.Vector.md)

Immutably resizes this Vector to have a new length of components.
Additional components are filled with the given `value` if there are more
components then previous. Otherwise the operation is a truncation.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `numComponents` | `number` | `undefined` | Number of components |
| `value` | `number` | `0.0` | - |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:678](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L678)

___

### round

▸ **round**(): [`Vector`](vectors_vector.Vector.md)

Immutably rounds all components of this Vector and returns a new Vector
object.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:702](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L702)

___

### scale

▸ **scale**(`mult`): [`Vector`](vectors_vector.Vector.md)

Immutably scales this Vector by multiplying all of the components by the
given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mult` | `number` | Multiplier |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:713](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L713)

___

### set

▸ **set**(...`values`): [`Vector`](vectors_vector.Vector.md)

Sets the components of this Vector using the variable arguments provided.
If either more or less values are provided than the number of components,
they are ignored.

**`throws`** {TypeError} if an argument is not a number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `number`[] |

#### Returns

[`Vector`](vectors_vector.Vector.md)

`this` for method-chaining

#### Defined in

[vectors/vector.ts:401](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L401)

___

### setComponent

▸ **setComponent**(`ind`, `val`): [`Vector`](vectors_vector.Vector.md)

Sets the value of a given component directly.

**`throws`** {Error} if index is out of bounds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ind` | `number` | Component index |
| `val` | `number` | Component value |

#### Returns

[`Vector`](vectors_vector.Vector.md)

`this` for method-chaining

#### Defined in

[vectors/vector.ts:419](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L419)

___

### sqrt

▸ **sqrt**(): [`Vector`](vectors_vector.Vector.md)

Immutably performs a square-rooting on each component of this Vector.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:761](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L761)

___

### subtract

▸ **subtract**(`other`): [`Vector`](vectors_vector.Vector.md)

Immutably subtracts the components of two Vectors or a number together.

Any missing components (two different sized Vectors) are replaced with
0 values for the calculation.

If only a single number is used, then it is treated as the value for each
component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `number` \| [`Vector`](vectors_vector.Vector.md) \| `number`[] | Other Vector |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:729](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L729)

___

### toArray

▸ **toArray**(): `number`[]

Converts this Vector into an Array of numbers.

#### Returns

`number`[]

Array of numbers

#### Defined in

[vectors/vector.ts:283](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L283)

___

### toString

▸ **toString**(): `string`

Converts this Vector into a string representation. Each component will be
comma deliminated with the whole string wrapped in square brackets.

Ex. `"[1, 2.5, 3.14]"`

#### Returns

`string`

String representation

#### Defined in

[vectors/vector.ts:274](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L274)

___

### trunc

▸ **trunc**(): [`Vector`](vectors_vector.Vector.md)

Immutably truncates all components of this Vector into integers and
returns a new Vector object.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector object

#### Defined in

[vectors/vector.ts:771](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L771)

___

### random

▸ `Static` **random**(`count`): [`Vector`](vectors_vector.Vector.md)

Creates a new Vector of given number of components, and fills each
component with a random unit-float (0..1). The resulting Vector is not
normalized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Number of components, 1 or greater |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector

#### Defined in

[vectors/vector.ts:52](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L52)

___

### randomRange

▸ `Static` **randomRange**(`count`, `min?`, `max?`): [`Vector`](vectors_vector.Vector.md)

Creates a new Vector of given number of components, and fills each
component with a random number within the range specified.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `count` | `number` | `undefined` | Number of components, 1 or greater |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `1` | Maximum value |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector

#### Defined in

[vectors/vector.ts:88](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L88)

___

### randomUnit

▸ `Static` **randomUnit**(`count`): [`Vector`](vectors_vector.Vector.md)

Creates a new Vector of given number of components, and fills each
component with a random unit-float (0..1). The resulting Vector is then
normalized and returned.

**`see`** [Vector.random](vectors_vector.Vector.md#random)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | Number of components, 1 or greater |

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector

#### Defined in

[vectors/vector.ts:72](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L72)
