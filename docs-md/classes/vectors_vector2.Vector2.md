[big-toolbox](../README.md) / [Exports](../modules.md) / [vectors/vector2](../modules/vectors_vector2.md) / Vector2

# Class: Vector2

[vectors/vector2](../modules/vectors_vector2.md).Vector2

## Hierarchy

- [`Vector`](vectors_vector.Vector.md)

  ↳ **`Vector2`**

## Implements

- [`IVector2`](../interfaces/vectors_vector2.IVector2.md)

## Table of contents

### Constructors

- [constructor](vectors_vector2.Vector2.md#constructor)

### Properties

- [#components](vectors_vector2.Vector2.md##components)
- [#count](vectors_vector2.Vector2.md##count)
- [IDENTITY](vectors_vector2.Vector2.md#identity)

### Accessors

- [count](vectors_vector2.Vector2.md#count)
- [x](vectors_vector2.Vector2.md#x)
- [y](vectors_vector2.Vector2.md#y)

### Methods

- [abs](vectors_vector2.Vector2.md#abs)
- [add](vectors_vector2.Vector2.md#add)
- [angleBetween](vectors_vector2.Vector2.md#anglebetween)
- [append](vectors_vector2.Vector2.md#append)
- [ceil](vectors_vector2.Vector2.md#ceil)
- [clamp](vectors_vector2.Vector2.md#clamp)
- [concat](vectors_vector2.Vector2.md#concat)
- [difference](vectors_vector2.Vector2.md#difference)
- [distance](vectors_vector2.Vector2.md#distance)
- [divide](vectors_vector2.Vector2.md#divide)
- [dotProduct](vectors_vector2.Vector2.md#dotproduct)
- [equals](vectors_vector2.Vector2.md#equals)
- [fill](vectors_vector2.Vector2.md#fill)
- [floor](vectors_vector2.Vector2.md#floor)
- [get](vectors_vector2.Vector2.md#get)
- [getSafe](vectors_vector2.Vector2.md#getsafe)
- [magnitude](vectors_vector2.Vector2.md#magnitude)
- [magnitudeSqr](vectors_vector2.Vector2.md#magnitudesqr)
- [map](vectors_vector2.Vector2.md#map)
- [mapWith](vectors_vector2.Vector2.md#mapwith)
- [maxComponent](vectors_vector2.Vector2.md#maxcomponent)
- [minComponent](vectors_vector2.Vector2.md#mincomponent)
- [multiply](vectors_vector2.Vector2.md#multiply)
- [normalize](vectors_vector2.Vector2.md#normalize)
- [pow](vectors_vector2.Vector2.md#pow)
- [project](vectors_vector2.Vector2.md#project)
- [reduce](vectors_vector2.Vector2.md#reduce)
- [reset](vectors_vector2.Vector2.md#reset)
- [resize](vectors_vector2.Vector2.md#resize)
- [rotate](vectors_vector2.Vector2.md#rotate)
- [rotateAround](vectors_vector2.Vector2.md#rotatearound)
- [rotateDeg](vectors_vector2.Vector2.md#rotatedeg)
- [round](vectors_vector2.Vector2.md#round)
- [scale](vectors_vector2.Vector2.md#scale)
- [set](vectors_vector2.Vector2.md#set)
- [setComponent](vectors_vector2.Vector2.md#setcomponent)
- [sqrt](vectors_vector2.Vector2.md#sqrt)
- [subtract](vectors_vector2.Vector2.md#subtract)
- [toArray](vectors_vector2.Vector2.md#toarray)
- [toDegrees](vectors_vector2.Vector2.md#todegrees)
- [toRadians](vectors_vector2.Vector2.md#toradians)
- [toString](vectors_vector2.Vector2.md#tostring)
- [toVector](vectors_vector2.Vector2.md#tovector)
- [trunc](vectors_vector2.Vector2.md#trunc)
- [fromVector](vectors_vector2.Vector2.md#fromvector)
- [random](vectors_vector2.Vector2.md#random)
- [randomRange](vectors_vector2.Vector2.md#randomrange)
- [randomUnit](vectors_vector2.Vector2.md#randomunit)

## Constructors

### constructor

• **new Vector2**(`arg?`, `arg2?`)

Constructs a new Vector2 object, being a Vector, with 2 components.

If no arguments are provided, then each component defaults to 0.

If 1 or more numbers are provided, then each component is set to it's
respective argument index.

If an Array is supplied, then each index is taken in order to set the new
Vector's components. Any additional indices are ignored, and any missing
indices (array with length 1) default to 0.

If a Vector2 object is supplied, it is cloned.

If a Vector object is supplied, it is resized to 2-components by either
truncating, or defaulting to 0s.

If a generic Object is supplied, it is searched for either "x" or "y"
members that are valid numbers. If neither is found then an error is
thrown. It does not require both but requires at least 1.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | [`Vector2Constructable`](../modules/vectors_vector2.md#vector2constructable) |
| `arg2?` | `number` |

#### Overrides

[Vector](vectors_vector.Vector.md).[constructor](vectors_vector.Vector.md#constructor)

#### Defined in

[vectors/vector2.ts:150](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L150)

## Properties

### #components

• `Private` **#components**: `number`[] = `[]`

Components array, holds each component or axis for the vector

#### Inherited from

[Vector](vectors_vector.Vector.md).[#components](vectors_vector.Vector.md##components)

#### Defined in

[vectors/vector.ts:110](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L110)

___

### #count

• `Private` `Readonly` **#count**: `number`

The number of components expected

READONLY: Set from constructor

#### Inherited from

[Vector](vectors_vector.Vector.md).[#count](vectors_vector.Vector.md##count)

#### Defined in

[vectors/vector.ts:117](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L117)

___

### IDENTITY

▪ `Static` `Readonly` **IDENTITY**: [`Vector2`](vectors_vector2.Vector2.md)

Vector2 with both components being 0 (origin)

#### Defined in

[vectors/vector2.ts:67](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L67)

## Accessors

### count

• `get` **count**(): `number`

Number of components in this Vector

#### Returns

`number`

#### Inherited from

Vector.count

#### Defined in

[vectors/vector.ts:262](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L262)

___

### x

• `get` **x**(): `number`

X component (index 0)

#### Returns

`number`

#### Implementation of

[IVector2](../interfaces/vectors_vector2.IVector2.md).[x](../interfaces/vectors_vector2.IVector2.md#x)

#### Defined in

[vectors/vector2.ts:254](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L254)

• `set` **x**(`value`): `void`

X component (index 0)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IVector2](../interfaces/vectors_vector2.IVector2.md).[x](../interfaces/vectors_vector2.IVector2.md#x)

#### Defined in

[vectors/vector2.ts:261](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L261)

___

### y

• `get` **y**(): `number`

Y component (index 1)

#### Returns

`number`

#### Implementation of

[IVector2](../interfaces/vectors_vector2.IVector2.md).[y](../interfaces/vectors_vector2.IVector2.md#y)

#### Defined in

[vectors/vector2.ts:268](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L268)

• `set` **y**(`value`): `void`

Y component (index 1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IVector2](../interfaces/vectors_vector2.IVector2.md).[y](../interfaces/vectors_vector2.IVector2.md#y)

#### Defined in

[vectors/vector2.ts:275](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L275)

## Methods

### abs

▸ **abs**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably absolutes each component of this Vector.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[abs](vectors_vector.Vector.md#abs)

#### Defined in

[vectors/vector2.ts:312](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L312)

___

### add

▸ **add**(`other`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably adds the components of two Vectors or a number together.

Any missing components (two different sized Vectors) are replaced with
0 values for the calculation.

If only a single number is used, then it is treated as the value for each
component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vector2Equiv`](../modules/vectors_vector2.md#vector2equiv) |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[add](vectors_vector.Vector.md#add)

#### Defined in

[vectors/vector2.ts:316](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L316)

___

### angleBetween

▸ **angleBetween**(`other`, `useDegrees?`): `number`

Calculates the angle (either radians or degrees) between this Vector2 and
another Vector2 object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector2`](vectors_vector2.Vector2.md) | `undefined` | Other Vector2 object |
| `useDegrees` | `boolean` | `false` | - |

#### Returns

`number`

Angle between the two vectors

#### Defined in

[vectors/vector2.ts:410](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L410)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[append](vectors_vector.Vector.md#append)

#### Defined in

[vectors/vector.ts:464](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L464)

___

### ceil

▸ **ceil**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably ceilings all components of this Vector and returns a new Vector
object.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[ceil](vectors_vector.Vector.md#ceil)

#### Defined in

[vectors/vector2.ts:325](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L325)

___

### clamp

▸ **clamp**(`min?`, `max?`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably clamps all components of this vector to be within the given
range.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `0.0` |
| `max` | `number` | `1.0` |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[clamp](vectors_vector.Vector.md#clamp)

#### Defined in

[vectors/vector2.ts:329](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L329)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[concat](vectors_vector.Vector.md#concat)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[difference](vectors_vector.Vector.md#difference)

#### Defined in

[vectors/vector.ts:786](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L786)

___

### distance

▸ **distance**(`other`): `number`

Calculates the Euclidean distance between two points.

**`see`** [Vector2.dotProduct](vectors_vector2.Vector2.md#dotproduct) for a squared version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector2`](vectors_vector2.Vector2.md) | Other Vector2 object |

#### Returns

`number`

Euclidean distance between the two-points.

#### Defined in

[vectors/vector2.ts:422](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L422)

___

### divide

▸ **divide**(`other`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably divides the components of this Vector with the components of
another vector. Any missing components that do not line up are returned as
0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vector2Equiv`](../modules/vectors_vector2.md#vector2equiv) |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[divide](vectors_vector.Vector.md#divide)

#### Defined in

[vectors/vector2.ts:333](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L333)

___

### dotProduct

▸ **dotProduct**(`other`): `number`

Calculates the dot-product between this and another Vector2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector2`](vectors_vector2.Vector2.md) | Other Vector2 object |

#### Returns

`number`

Dot-product of the two Vector2s

#### Defined in

[vectors/vector2.ts:432](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L432)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[equals](vectors_vector.Vector.md#equals)

#### Defined in

[vectors/vector.ts:814](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L814)

___

### fill

▸ **fill**(`val`): [`Vector2`](vectors_vector2.Vector2.md)

Sets all components within this Vector to the value provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

`this` for method-chaining

#### Overrides

[Vector](vectors_vector.Vector.md).[fill](vectors_vector.Vector.md#fill)

#### Defined in

[vectors/vector2.ts:288](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L288)

___

### floor

▸ **floor**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably floors all components of this Vector and returns a new Vector
object.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[floor](vectors_vector.Vector.md#floor)

#### Defined in

[vectors/vector2.ts:342](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L342)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[get](vectors_vector.Vector.md#get)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[getSafe](vectors_vector.Vector.md#getsafe)

#### Defined in

[vectors/vector.ts:311](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L311)

___

### magnitude

▸ **magnitude**(): `number`

Calculates the magnitude (length) of this vector.

#### Returns

`number`

Magnitude (length)

#### Inherited from

[Vector](vectors_vector.Vector.md).[magnitude](vectors_vector.Vector.md#magnitude)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[magnitudeSqr](vectors_vector.Vector.md#magnitudesqr)

#### Defined in

[vectors/vector.ts:333](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L333)

___

### map

▸ **map**(`func`): [`Vector2`](vectors_vector2.Vector2.md)

Runs a mapping function on each component of this Vector and then returns
a new Vector with the components set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`VectorMapCallback`](../modules/vectors_vector.md#vectormapcallback) |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[map](vectors_vector.Vector.md#map)

#### Defined in

[vectors/vector2.ts:346](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L346)

___

### mapWith

▸ **mapWith**(`other`, `func`): [`Vector2`](vectors_vector2.Vector2.md)

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

| Name | Type |
| :------ | :------ |
| `other` | [`Vector2Equiv`](../modules/vectors_vector2.md#vector2equiv) |
| `func` | [`VectorMapWithCallback`](../modules/vectors_vector.md#vectormapwithcallback) |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[mapWith](vectors_vector.Vector.md#mapwith)

#### Defined in

[vectors/vector2.ts:351](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L351)

___

### maxComponent

▸ **maxComponent**(): `number`

Returns the largest component within this Vector

#### Returns

`number`

Largest component

#### Inherited from

[Vector](vectors_vector.Vector.md).[maxComponent](vectors_vector.Vector.md#maxcomponent)

#### Defined in

[vectors/vector.ts:342](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L342)

___

### minComponent

▸ **minComponent**(): `number`

Returns the smallest component within this Vector

#### Returns

`number`

Minimum component

#### Inherited from

[Vector](vectors_vector.Vector.md).[minComponent](vectors_vector.Vector.md#mincomponent)

#### Defined in

[vectors/vector.ts:351](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L351)

___

### multiply

▸ **multiply**(`other`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably multiplies the components of two Vectors or a number together.

Any missing components (two different sized Vectors) are replaced with
0 values for the calculation.

If only a single number is used, then it is treated as the value for each
component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vector2Equiv`](../modules/vectors_vector2.md#vector2equiv) |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[multiply](vectors_vector.Vector.md#multiply)

#### Defined in

[vectors/vector2.ts:360](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L360)

___

### normalize

▸ **normalize**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably normalizes this vector so that the new magnitude is 1.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[normalize](vectors_vector.Vector.md#normalize)

#### Defined in

[vectors/vector2.ts:369](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L369)

___

### pow

▸ **pow**(`exp`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably raises each component by the given exponent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `exp` | `number` |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[pow](vectors_vector.Vector.md#pow)

#### Defined in

[vectors/vector2.ts:373](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L373)

___

### project

▸ **project**(`other`): [`Vector2`](vectors_vector2.Vector2.md)

Projects this Vector2 onto another Vector2 and returns a new Vector2 object
of the results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector2`](vectors_vector2.Vector2.md) | Other Vector2 object |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector2 object

#### Defined in

[vectors/vector2.ts:443](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L443)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[reduce](vectors_vector.Vector.md#reduce)

#### Defined in

[vectors/vector.ts:367](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L367)

___

### reset

▸ **reset**(): [`Vector2`](vectors_vector2.Vector2.md)

Resets the vector by setting all values to 0.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

`this` for method-chaining

#### Overrides

[Vector](vectors_vector.Vector.md).[reset](vectors_vector.Vector.md#reset)

#### Defined in

[vectors/vector2.ts:294](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L294)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[resize](vectors_vector.Vector.md#resize)

#### Defined in

[vectors/vector.ts:678](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L678)

___

### rotate

▸ **rotate**(`rad`): [`Vector2`](vectors_vector2.Vector2.md)

Rotates this Vector2 by the given radians.

**`see`** [Vector2.rotateDeg](vectors_vector2.Vector2.md#rotatedeg) for the degree version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | Radians |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector2 object

#### Defined in

[vectors/vector2.ts:455](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L455)

___

### rotateAround

▸ **rotateAround**(`other`, `ang`, `useDeg?`): [`Vector2`](vectors_vector2.Vector2.md)

Rotates this Vector2 around a circle centered at the point defined by
`other` with a radius being the distance between this Vector2 and the
other Vector2, using the angle provided. The results are a new Vector2
object that is a point on that circle.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector2`](vectors_vector2.Vector2.md) | `undefined` | Other Vector2 object as centering point |
| `ang` | `number` | `undefined` | Angle in radians (or degrees if `useDeg` is true) |
| `useDeg` | `boolean` | `false` | - |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector2 object

#### Defined in

[vectors/vector2.ts:476](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L476)

___

### rotateDeg

▸ **rotateDeg**(`deg`): [`Vector2`](vectors_vector2.Vector2.md)

Rotates this Vector2 by the given degrees.

**`see`** [Vector2.rotate](vectors_vector2.Vector2.md#rotate) for the radian version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deg` | `number` | Degrees |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector2 object

#### Defined in

[vectors/vector2.ts:494](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L494)

___

### round

▸ **round**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably rounds all components of this Vector and returns a new Vector
object.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[round](vectors_vector.Vector.md#round)

#### Defined in

[vectors/vector2.ts:377](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L377)

___

### scale

▸ **scale**(`mult`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably scales this Vector by multiplying all of the components by the
given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mult` | `number` |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[scale](vectors_vector.Vector.md#scale)

#### Defined in

[vectors/vector2.ts:381](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L381)

___

### set

▸ **set**(...`values`): [`Vector2`](vectors_vector2.Vector2.md)

Sets the components of this Vector using the variable arguments provided.
If either more or less values are provided than the number of components,
they are ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `number`[] |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

`this` for method-chaining

#### Overrides

[Vector](vectors_vector.Vector.md).[set](vectors_vector.Vector.md#set)

#### Defined in

[vectors/vector2.ts:298](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L298)

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

#### Inherited from

[Vector](vectors_vector.Vector.md).[setComponent](vectors_vector.Vector.md#setcomponent)

#### Defined in

[vectors/vector.ts:419](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L419)

___

### sqrt

▸ **sqrt**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably performs a square-rooting on each component of this Vector.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[sqrt](vectors_vector.Vector.md#sqrt)

#### Defined in

[vectors/vector2.ts:394](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L394)

___

### subtract

▸ **subtract**(`other`): [`Vector2`](vectors_vector2.Vector2.md)

Immutably subtracts the components of two Vectors or a number together.

Any missing components (two different sized Vectors) are replaced with
0 values for the calculation.

If only a single number is used, then it is treated as the value for each
component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Vector2Equiv`](../modules/vectors_vector2.md#vector2equiv) |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[subtract](vectors_vector.Vector.md#subtract)

#### Defined in

[vectors/vector2.ts:385](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L385)

___

### toArray

▸ **toArray**(): `number`[]

Converts this Vector into an Array of numbers.

#### Returns

`number`[]

Array of numbers

#### Inherited from

[Vector](vectors_vector.Vector.md).[toArray](vectors_vector.Vector.md#toarray)

#### Defined in

[vectors/vector.ts:283](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L283)

___

### toDegrees

▸ **toDegrees**(): `number`

Normalizes this Vector2 and calculates the angle from positive X-axis.
Shortcuts to `Math.atan2()`.

#### Returns

`number`

Angle from positive X-axis in Degrees

#### Defined in

[vectors/vector2.ts:515](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L515)

___

### toRadians

▸ **toRadians**(): `number`

Normalizes this Vector2 and calculates the angle from positive X-axis.
Shortcuts to `Math.atan2()`.

#### Returns

`number`

Angle from positive X-axis in Radians

#### Defined in

[vectors/vector2.ts:504](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L504)

___

### toString

▸ **toString**(): `string`

Converts this Vector into a string representation. Each component will be
comma deliminated with the whole string wrapped in square brackets.

Ex. `"[1, 2.5, 3.14]"`

#### Returns

`string`

String representation

#### Inherited from

[Vector](vectors_vector.Vector.md).[toString](vectors_vector.Vector.md#tostring)

#### Defined in

[vectors/vector.ts:274](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L274)

___

### toVector

▸ **toVector**(): [`Vector`](vectors_vector.Vector.md)

Converts this Vector2 to a Vector object explicitely.

#### Returns

[`Vector`](vectors_vector.Vector.md)

New Vector

#### Defined in

[vectors/vector2.ts:284](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L284)

___

### trunc

▸ **trunc**(): [`Vector2`](vectors_vector2.Vector2.md)

Immutably truncates all components of this Vector into integers and
returns a new Vector object.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector object

#### Overrides

[Vector](vectors_vector.Vector.md).[trunc](vectors_vector.Vector.md#trunc)

#### Defined in

[vectors/vector2.ts:398](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L398)

___

### fromVector

▸ `Static` **fromVector**(`vec`): [`Vector2`](vectors_vector2.Vector2.md)

Faster Vector to Vector2 conversion. Skips the type-checking and component
length negotiation. Any missing components (if Vector1) default to 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](vectors_vector.Vector.md) | Vector object |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector2

#### Defined in

[vectors/vector2.ts:76](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L76)

___

### random

▸ `Static` **random**(): [`Vector2`](vectors_vector2.Vector2.md)

Creates a Vector2 with both components being random units (0..1)

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector

#### Overrides

[Vector](vectors_vector.Vector.md).[random](vectors_vector.Vector.md#random)

#### Defined in

[vectors/vector2.ts:87](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L87)

___

### randomRange

▸ `Static` **randomRange**(`min?`, `max?`): [`Vector2`](vectors_vector2.Vector2.md)

Creates a Vector2 with each component being a random number within the
range specified.

The parameters will be sorted for actual min/max values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `1` | Maximum value |

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector

#### Overrides

[Vector](vectors_vector.Vector.md).[randomRange](vectors_vector.Vector.md#randomrange)

#### Defined in

[vectors/vector2.ts:115](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L115)

___

### randomUnit

▸ `Static` **randomUnit**(): [`Vector2`](vectors_vector2.Vector2.md)

Creates a Vector2 with each component being random. The magnitude of the
Vector is 1 (normalized).

This is performed by generating a random radian angle and then calculating
the sin/cos values.

#### Returns

[`Vector2`](vectors_vector2.Vector2.md)

New Vector

#### Overrides

[Vector](vectors_vector.Vector.md).[randomUnit](vectors_vector.Vector.md#randomunit)

#### Defined in

[vectors/vector2.ts:100](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector2.ts#L100)
