[big-toolbox](../README.md) / [Exports](../modules.md) / Objects

# Module: Objects

Copyright © 2021 Chris Pikul, All Rights Reserved.

This code base (ts-toolbox or big-toolbox) is under the MIT license. See the
file at the project root "LICENSE" for more information.
-----------------------------------------------------------------------------

Provides utilities for objects, their types, and object operations.

## Table of contents

### Classes

- [TypedMap](../classes/Objects.TypedMap.md)

### Functions

- [objectMatchesLayout](Objects.md#objectmatcheslayout)
- [objectNestedAssign](Objects.md#objectnestedassign)
- [objectsAreSameType](Objects.md#objectsaresametype)

## Functions

### objectMatchesLayout

▸ `Const` **objectMatchesLayout**(`input`, `layout`): `boolean`

Checks if the given object matches the supplied test layout in both keys,
key types, and value types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `Record`<`any`, `any`\> | Object to test |
| `layout` | `Record`<`any`, `any`\> | Layout to test against |

#### Returns

`boolean`

True if same keys and value types

#### Defined in

[objects.ts:92](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L92)

___

### objectNestedAssign

▸ `Const` **objectNestedAssign**(`target`, ...`sources`): `Record`<`string`, `unknown`\>

Takes a target object and recursively assigns source objects by traversing
their children and appling them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Record`<`string`, `unknown`\> | Target object to apply to |
| `...sources` | `Record`<`string`, `unknown`\>[] | Source objects to apply |

#### Returns

`Record`<`string`, `unknown`\>

New object

#### Defined in

[objects.ts:22](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L22)

___

### objectsAreSameType

▸ `Const` **objectsAreSameType**(`first`, `second`): `boolean`

Attempts to check if the two provided parameters are the same _type_.
For primitives this is a simple `typeof` check. Objects are a bit trickier.

For arrays, each entry will be checked against the corrisponding index on the
other object. Indices will loop to prevent overflows.

For objects, the prototypes constructor will be equated to cheat this.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `any` | Any object |
| `second` | `any` | Any object |

#### Returns

`boolean`

True if they are the same types

#### Defined in

[objects.ts:51](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L51)
