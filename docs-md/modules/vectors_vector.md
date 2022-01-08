[big-toolbox](../README.md) / [Exports](../modules.md) / vectors/vector

# Module: vectors/vector

## Table of contents

### References

- [default](vectors_vector.md#default)

### Classes

- [Vector](../classes/vectors_vector.Vector.md)

### Type aliases

- [VectorMapCallback](vectors_vector.md#vectormapcallback)
- [VectorMapWithCallback](vectors_vector.md#vectormapwithcallback)

### Variables

- [regexpNumbers](vectors_vector.md#regexpnumbers)

### Functions

- [vecToArray](vectors_vector.md#vectoarray)

## References

### default

Renames and re-exports [Vector](../classes/vectors_vector.Vector.md)

## Type aliases

### VectorMapCallback

Ƭ **VectorMapCallback**: (`val`: `number`, `ind?`: `number`, `arr?`: `number`[]) => `number`

#### Type declaration

▸ (`val`, `ind?`, `arr?`): `number`

Callback signature for a Vector.map() operation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | Incoming value |
| `ind?` | `number` | Index of the component |
| `arr?` | `number`[] | Array of Vectors components |

##### Returns

`number`

New value to apply

#### Defined in

[vectors/vector.ts:21](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L21)

___

### VectorMapWithCallback

Ƭ **VectorMapWithCallback**: (`valA`: `number`, `valB`: `number`, `ind?`: `number`, `outBounds?`: `boolean`) => `number`

#### Type declaration

▸ (`valA`, `valB`, `ind?`, `outBounds?`): `number`

Callback for usage with [Vector.mapWith](../classes/vectors_vector.Vector.md#mapwith).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valA` | `number` | First value |
| `valB` | `number` | Second value |
| `ind?` | `number` | Index of the component |
| `outBounds?` | `boolean` | True if the component index is out-of-bounds with one of the Vectors. |

##### Returns

`number`

New value

#### Defined in

[vectors/vector.ts:34](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L34)

## Variables

### regexpNumbers

• **regexpNumbers**: `RegExp`

#### Defined in

[vectors/vector.ts:37](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L37)

## Functions

### vecToArray

▸ **vecToArray**(`obj`, `count?`): `number`[]

Attempts to negotiate the incoming object into an array of numbers with the
given length.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `number` \| [`Vector`](../classes/vectors_vector.Vector.md) \| `number`[] | `undefined` | Either a Vector, an Array of numbers, or a number value |
| `count` | `number` | `2` | Number of components to ensure |

#### Returns

`number`[]

Array of numbers

#### Defined in

[vectors/vector.ts:827](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/vectors/vector.ts#L827)
