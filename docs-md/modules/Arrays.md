[big-toolbox](../README.md) / [Exports](../modules.md) / Arrays

# Module: Arrays

Copyright © 2021 Chris Pikul, All Rights Reserved.

This code base (ts-toolbox or big-toolbox) is under the MIT license. See the
file at the project root "LICENSE" for more information.
-----------------------------------------------------------------------------

Provides utilities for manipulating Arrays.

## Table of contents

### Functions

- [arrayEnsureSize](Arrays.md#arrayensuresize)
- [flattenArray](Arrays.md#flattenarray)
- [inPlaceConcat](Arrays.md#inplaceconcat)

## Functions

### arrayEnsureSize

▸ **arrayEnsureSize**(`arr`, `size`, `fillValue?`): `any`[]

Ensures that the input array is a given fixed-length size. The results are a
new array regardless of if sizing was needed.

If the input array is smaller than the desired size then new values are added
to the end of the given `fillValue` value.

If the input array is larger than the desired size, it is "cropped" to the
desired size and returned.

If the input array is the desired size, then it is cloned and returned.

**`throws`** {Error} If the size argument is negative

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `any`[] | `undefined` | Input array |
| `size` | `number` | `undefined` | Desired length |
| `fillValue` | `any` | `null` | - |

#### Returns

`any`[]

New array

#### Defined in

[arrays.ts:68](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/arrays.ts#L68)

___

### flattenArray

▸ **flattenArray**<`Type`\>(`arr`, `depth?`): `Type`[]

Attempts to flatten an array of sub-arrays into a single flat array.
This is mostly a polyfill for the `Array.flat()` function.

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `arr` | `any`[] | `undefined` | Parent array |
| `depth` | `number` | `1` | - |

#### Returns

`Type`[]

New array

#### Defined in

[arrays.ts:36](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/arrays.ts#L36)

___

### inPlaceConcat

▸ **inPlaceConcat**<`Type`\>(`target`, ...`argArr`): `number`

Performs an in-place concatenation using `Array.prototype.push()`.
This is useful for constant array variables.
Accepts multiple parameters, each array will be added individually.

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Type`[] | The "this" or target array |
| `...argArr` | `Type`[][] | - |

#### Returns

`number`

New length of the target array

#### Defined in

[arrays.ts:21](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/arrays.ts#L21)
