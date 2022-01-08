[big-toolbox](../README.md) / [Exports](../modules.md) / Random

# Module: Random

Copyright © 2021 Chris Pikul, All Rights Reserved.

This code base (ts-toolbox or big-toolbox) is under the MIT license. See the
file at the project root "LICENSE" for more information.
-----------------------------------------------------------------------------

Provides utilities for random operations.

## Table of contents

### Functions

- [createUID](Random.md#createuid)
- [randomAlphaNumericCharacter](Random.md#randomalphanumericcharacter)
- [randomBoolean](Random.md#randomboolean)
- [randomCharacter](Random.md#randomcharacter)
- [randomInteger](Random.md#randominteger)
- [randomIntegerRange](Random.md#randomintegerrange)
- [randomNegativeInteger](Random.md#randomnegativeinteger)
- [randomPositiveInteger](Random.md#randompositiveinteger)
- [randomRange](Random.md#randomrange)
- [randomString](Random.md#randomstring)

## Functions

### createUID

▸ `Const` **createUID**(): `string`

Generates a random Base-36 string.

#### Returns

`string`

Random identifier

#### Defined in

[random.ts:125](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L125)

___

### randomAlphaNumericCharacter

▸ `Const` **randomAlphaNumericCharacter**(): `string`

Generates a random alpha-numeric character. These are in range of
0-9, A-Z, a-z.

#### Returns

`string`

Random character

#### Defined in

[random.ts:82](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L82)

___

### randomBoolean

▸ `Const` **randomBoolean**(): `boolean`

Generates a random boolean.

#### Returns

`boolean`

Random boolean

#### Defined in

[random.ts:74](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L74)

___

### randomCharacter

▸ `Const` **randomCharacter**(`includeSpace?`): `string`

Generates a random character. These are in the range of the UTF-16 table
for 32..126 which includes the space character. This range maps to common
ASCII characters.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `includeSpace` | `boolean` | `false` | If true, the space character will be included |

#### Returns

`string`

Random character

#### Defined in

[random.ts:95](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L95)

___

### randomInteger

▸ `Const` **randomInteger**(): `number`

Generates a random integer that may be positive or negative. Within the
safe-integer boundaries.

#### Returns

`number`

Random integer

#### Defined in

[random.ts:47](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L47)

___

### randomIntegerRange

▸ `Const` **randomIntegerRange**(`min`, `max`): `number`

Generates a random integer within the boundaries supplied.

If floating-point numbers are provided they will be **rounded** to form an
integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Minimum value |
| `max` | `number` | Maximum value |

#### Returns

`number`

Random integer

#### Defined in

[random.ts:62](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L62)

___

### randomNegativeInteger

▸ `Const` **randomNegativeInteger**(): `number`

Generates a random integer that is negative. Within the safe-integer
boundaries.

#### Returns

`number`

Random negative integer

#### Defined in

[random.ts:39](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L39)

___

### randomPositiveInteger

▸ `Const` **randomPositiveInteger**(): `number`

Generates a random integer that is positive. Within the safe-integer
boundaries.

#### Returns

`number`

Random positive integer

#### Defined in

[random.ts:31](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L31)

___

### randomRange

▸ `Const` **randomRange**(`min`, `max`): `number`

Generates a random float within the boundaries specified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Minimum value |
| `max` | `number` | Maximum value |

#### Returns

`number`

Random float within range

#### Defined in

[random.ts:20](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L20)

___

### randomString

▸ `Const` **randomString**(`length`, `alphaNumeric?`): `string`

Generates a string of random length.

If the `alphaNumeric` option is true, then only the alpha-numeric characters
(0-9, A-Z, a-z) will be used. If false, then any ASCII character can be used.
Note, that if not alphaNumeric, spaces will not be included in the character
set.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `undefined` | Length of the string |
| `alphaNumeric` | `boolean` | `true` | If true, will only be alpha-numeric |

#### Returns

`string`

Random string

#### Defined in

[random.ts:113](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/random.ts#L113)
