/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for strings.
 */
/**
 * Regular expression testing for URI formats.
 *
 * --------------------------------------------
 * - Passes: `/some/v4lu3s-go/here`
 * - Fails: `no/prefix/and/$ymbols`
 */
export declare const RegexpURI: RegExp;
/**
 * Tests if a given input string matches the URI format.
 *
 *
 * --------------------------------------------
 * - Passes: `/some/v4lu3s-go/here`
 * - Fails: `no/prefix/and/$ymbols`
 *
 * @see `RegexpURI`
 * @note Performs type-checking regardless of TypeScript
 * @param input [string] String to test
 * @param allowEmpty [boolean] [default=true] Are empty strings allowed?
 * @returns [boolean] True if it passes the test
 */
export declare const isStringURI: (input: string, allowEmpty?: boolean) => boolean;
/**
 * Regular expression matching kabob-case text.
 *
 * --------------------------------------------
 * - Passes: `any-values01-here`
 * - Fails: `Caps_and-symbols`
 */
export declare const RegexpKabob: RegExp;
/**
 * Tests if a given input string matches the Kabob-case format.
 *
 *
 * --------------------------------------------
 * - Passes: `any-values01-here`
 * - Fails: `Caps_and-symbols`
 *
 * @see `RegexpKabob`
 * @note Performs type-checking regardless of TypeScript
 * @param input [string] String to test
 * @param allowEmpty [boolean] [default=true] Are empty strings allowed?
 * @returns [boolean] True if it passes the test
 */
export declare const isStringKabob: (input: string, allowEmpty?: boolean) => boolean;
