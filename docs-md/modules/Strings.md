[big-toolbox](../README.md) / [Exports](../modules.md) / Strings

# Module: Strings

Copyright © 2021 Chris Pikul, All Rights Reserved.

This code base (ts-toolbox or big-toolbox) is under the MIT license. See the
file at the project root "LICENSE" for more information.
-----------------------------------------------------------------------------

Provides utilities for strings.

## Table of contents

### Variables

- [RegexpKabob](Strings.md#regexpkabob)
- [RegexpURI](Strings.md#regexpuri)

### Functions

- [isStringKabob](Strings.md#isstringkabob)
- [isStringURI](Strings.md#isstringuri)

## Variables

### RegexpKabob

• **RegexpKabob**: `RegExp`

Regular expression matching kabob-case text.

--------------------------------------------
- Passes: `any-values01-here`
- Fails: `Caps_and-symbols`

#### Defined in

[strings.ts:50](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/strings.ts#L50)

___

### RegexpURI

• **RegexpURI**: `RegExp`

Regular expression testing for URI formats.

--------------------------------------------
- Passes: `/some/v4lu3s-go/here`
- Fails: `no/prefix/and/$ymbols`

#### Defined in

[strings.ts:20](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/strings.ts#L20)

## Functions

### isStringKabob

▸ `Const` **isStringKabob**(`input`, `allowEmpty?`): `boolean`

Tests if a given input string matches the Kabob-case format.

--------------------------------------------
- Passes: `any-values01-here`
- Fails: `Caps_and-symbols`

**`see`** [RegexpKabob](Strings.md#regexpkabob)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | String to test |
| `allowEmpty` | `boolean` | `false` | Are empty strings allowed? |

#### Returns

`boolean`

True if it passes the test

#### Defined in

[strings.ts:65](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/strings.ts#L65)

___

### isStringURI

▸ `Const` **isStringURI**(`input`, `allowEmpty?`): `boolean`

Tests if a given input string matches the URI format.

--------------------------------------------
- Passes: `/some/v4lu3s-go/here`
- Fails: `no/prefix/and/$ymbols`

**`see`** [RegexpURI](Strings.md#regexpuri)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | String to test |
| `allowEmpty` | `boolean` | `false` | Are empty strings allowed? |

#### Returns

`boolean`

True if it passes the test

#### Defined in

[strings.ts:34](https://github.com/chris-pikul/ts-toolbox/blob/4caef08/src/strings.ts#L34)
