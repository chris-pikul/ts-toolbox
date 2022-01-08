[big-toolbox](../README.md) / [Exports](../modules.md) / [Objects](../modules/Objects.md) / TypedMap

# Class: TypedMap<T\>

[Objects](../modules/Objects.md).TypedMap

Typed map acts as a `Map` type but with trivial type-checking on values.
Each key entered **must** be a string, and the value types must match for all
existing values. Until the first value is applied, any type is accepted.
After an entry is saved, all future additions will be type-checked against
the existing entries. If the map is cleared, then any typings are reset.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- `Iterable`<[`string`, `T`]\>

## Table of contents

### Constructors

- [constructor](Objects.TypedMap.md#constructor)

### Properties

- [#dict](Objects.TypedMap.md##dict)
- [#hasEntries](Objects.TypedMap.md##hasentries)

### Methods

- [[iterator]](Objects.TypedMap.md#[iterator])
- [checkType](Objects.TypedMap.md#checktype)
- [clear](Objects.TypedMap.md#clear)
- [delete](Objects.TypedMap.md#delete)
- [entries](Objects.TypedMap.md#entries)
- [forEach](Objects.TypedMap.md#foreach)
- [forEachKey](Objects.TypedMap.md#foreachkey)
- [forEachvalue](Objects.TypedMap.md#foreachvalue)
- [get](Objects.TypedMap.md#get)
- [has](Objects.TypedMap.md#has)
- [keys](Objects.TypedMap.md#keys)
- [set](Objects.TypedMap.md#set)
- [toString](Objects.TypedMap.md#tostring)
- [values](Objects.TypedMap.md#values)

## Constructors

### constructor

• **new TypedMap**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[objects.ts:109](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L109)

## Properties

### #dict

• `Private` `Readonly` **#dict**: `Object`

#### Index signature

▪ [key: `string`]: `T`

#### Defined in

[objects.ts:105](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L105)

___

### #hasEntries

• `Private` **#hasEntries**: `boolean` = `false`

#### Defined in

[objects.ts:107](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L107)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<[`string`, `T`], `any`, `undefined`\>

#### Returns

`Iterator`<[`string`, `T`], `any`, `undefined`\>

#### Implementation of

Iterable.\_\_@iterator@80

#### Defined in

[objects.ts:114](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L114)

___

### checkType

▸ `Protected` `Readonly` **checkType**(`value`): `boolean`

Checks that the provided object is the same type as what exists in this
SimpleMap. If nothing exists, then true is returned anyways.

**`see`** [objectsAreSameType](../modules/Objects.md#objectsaresametype)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | Object to test |

#### Returns

`boolean`

True if they are the same type

#### Defined in

[objects.ts:227](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L227)

___

### clear

▸ **clear**(): `void`

Removes all keys and values from this SimpleMap.

#### Returns

`void`

#### Defined in

[objects.ts:193](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L193)

___

### delete

▸ **delete**(`key`): `boolean`

Deletes (removes) a key and it's value from this SimpleMap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Entry key |

#### Returns

`boolean`

True if found and deleted

#### Defined in

[objects.ts:182](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L182)

___

### entries

▸ **entries**(): [`string`, `T`][]

#### Returns

[`string`, `T`][]

#### Defined in

[objects.ts:153](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L153)

___

### forEach

▸ `Readonly` **forEach**(`cb`): `void`

Iterate over each entry in this SimpleMap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`cur`: [`string`, `T`], `ind`: `number`, `arr`: [`string`, `T`][]) => `void` | Callback receiving current value, index, and array |

#### Returns

`void`

#### Defined in

[objects.ts:203](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L203)

___

### forEachKey

▸ `Readonly` **forEachKey**(`cb`): `void`

Iterate over each string key in this SimpleMap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`cur`: `string`, `ind`: `number`, `arr`: `string`[]) => `void` | Callback receiving current value, index, and array |

#### Returns

`void`

#### Defined in

[objects.ts:210](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L210)

___

### forEachvalue

▸ `Readonly` **forEachvalue**(`cb`): `void`

Iterate over each value in this SimpleMap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | (`cur`: `T`, `ind`: `number`, `arr`: `T`[]) => `void` | Callback receiving current value, index, and array |

#### Returns

`void`

#### Defined in

[objects.ts:217](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L217)

___

### get

▸ **get**(`key`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[objects.ts:147](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L147)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[objects.ts:145](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L145)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[objects.ts:149](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L149)

___

### set

▸ **set**(`key`, `value`): `void`

Sets a value within this SimpleMap. The value must be of the same type as
any previous values. If it is the first value, this will set the precedent
for future types.

**`throws`** {TypeError} If the key is not provided or not a string

**`throws`** {TypeError} If the value is not provided or not the same type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Entry key |
| `value` | `T` | Entry value |

#### Returns

`void`

#### Defined in

[objects.ts:165](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L165)

___

### toString

▸ **toString**(): `string`

Converts this SimpleMap into a string representation. Follows the format:
`{ key1: value1, key2:value2 }`

#### Returns

`string`

String representation of the SimpleMap

#### Defined in

[objects.ts:135](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L135)

___

### values

▸ **values**(): `T`[]

#### Returns

`T`[]

#### Defined in

[objects.ts:151](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/objects.ts#L151)
