"use strict";
/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 *
 * This code base (ts-toolbox) is under the MIT license. See the file at the
 * project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 *
 * Provides utilities for strings.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringKabob = exports.RegexpKabob = exports.isStringURI = exports.RegexpURI = void 0;
/**
 * Regular expression testing for URI formats.
 *
 * --------------------------------------------
 * - Passes: `/some/v4lu3s-go/here`
 * - Fails: `no/prefix/and/$ymbols`
 */
exports.RegexpURI = /^(?:\/[a-z0-9\-_]+)+$/gi;
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
const isStringURI = (input, allowEmpty = false) => {
    if (!input || typeof input !== 'string')
        return false;
    if (input.length === 0)
        return allowEmpty;
    return exports.RegexpURI.test(input);
};
exports.isStringURI = isStringURI;
/**
 * Regular expression matching kabob-case text.
 *
 * --------------------------------------------
 * - Passes: `any-values01-here`
 * - Fails: `Caps_and-symbols`
 */
exports.RegexpKabob = /^[a-z0-9-]+$/g;
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
const isStringKabob = (input, allowEmpty = false) => {
    if (!input || typeof input !== 'string')
        return false;
    if (input.length === 0)
        return allowEmpty;
    return exports.RegexpKabob.test(input);
};
exports.isStringKabob = isStringKabob;
//# sourceMappingURL=strings.js.map