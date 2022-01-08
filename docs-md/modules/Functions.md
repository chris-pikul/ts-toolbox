[big-toolbox](../README.md) / [Exports](../modules.md) / Functions

# Module: Functions

Copyright © 2021 Chris Pikul, All Rights Reserved.

This code base (ts-toolbox or big-toolbox) is under the MIT license. See the
file at the project root "LICENSE" for more information.
-----------------------------------------------------------------------------

Provides utilities for functions, and event callbacks.

## Table of contents

### Type aliases

- [CallbackFunction](Functions.md#callbackfunction)
- [CallbackFunctionVoid](Functions.md#callbackfunctionvoid)
- [WrappedFunction](Functions.md#wrappedfunction)
- [WrappedFunctionVoid](Functions.md#wrappedfunctionvoid)

### Functions

- [debounce](Functions.md#debounce)
- [throttle](Functions.md#throttle)

## Type aliases

### CallbackFunction

Ƭ **CallbackFunction**: (...`args`: `any`) => `any`

#### Type declaration

▸ (...`args`): `any`

Simple type for anonymous functions, intended for use with callbacks

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`any`

#### Defined in

[functions.ts:16](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/functions.ts#L16)

___

### CallbackFunctionVoid

Ƭ **CallbackFunctionVoid**: (...`args`: `any`) => `void`

#### Type declaration

▸ (...`args`): `void`

Simple type for anonymous functions, where no return is expected

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`void`

#### Defined in

[functions.ts:21](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/functions.ts#L21)

___

### WrappedFunction

Ƭ **WrappedFunction**<`T`\>: (...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CallbackFunction`](Functions.md#callbackfunction) |

#### Type declaration

▸ (...`args`): `ReturnType`<`T`\>

Describes a function that has been wrapped by another function

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`T`\> |

##### Returns

`ReturnType`<`T`\>

#### Defined in

[functions.ts:26](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/functions.ts#L26)

___

### WrappedFunctionVoid

Ƭ **WrappedFunctionVoid**<`T`\>: (...`args`: `Parameters`<`T`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CallbackFunctionVoid`](Functions.md#callbackfunctionvoid) |

#### Type declaration

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`T`\> |

##### Returns

`void`

#### Defined in

[functions.ts:28](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/functions.ts#L28)

## Functions

### debounce

▸ **debounce**<`CB`\>(`cb`, `delay`): [`WrappedFunctionVoid`](Functions.md#wrappedfunctionvoid)<`CB`\>

Debounces a function using the given millisecond delay.

This means, that until the given delay has elapsed with no further calls
to this event, nothing will be performed. Once no more calls to this event
are performed for the delay duration, then the function will be called.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CB` | extends [`CallbackFunctionVoid`](Functions.md#callbackfunctionvoid) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | `CB` | Callback to execute |
| `delay` | `number` | illiseconds to delay |

#### Returns

[`WrappedFunctionVoid`](Functions.md#wrappedfunctionvoid)<`CB`\>

New callback function

#### Defined in

[functions.ts:65](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/functions.ts#L65)

___

### throttle

▸ **throttle**<`CB`\>(`cb`, `delay`): [`WrappedFunction`](Functions.md#wrappedfunction)<`CB`\>

Throttles a function by a given millisecond delay.

This means that any subsequent calls during this delay are ignored until
enough time has elapsed. The first call will be executed as normal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CB` | extends [`CallbackFunction`](Functions.md#callbackfunction) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | `CB` | Callback to execute |
| `delay` | `number` | Milliseconds to delay |

#### Returns

[`WrappedFunction`](Functions.md#wrappedfunction)<`CB`\>

New function

#### Defined in

[functions.ts:40](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/functions.ts#L40)
