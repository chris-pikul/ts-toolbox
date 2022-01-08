/**
 * Copyright © 2021 Chris Pikul, All Rights Reserved.
 * 
 * This code base (ts-toolbox or big-toolbox) is under the MIT license. See the 
 * file at the project root "LICENSE" for more information.
 * -----------------------------------------------------------------------------
 * 
 * Provides utilities for strings.
 * 
 * @module Strings
 */

/**
 * Regular expression testing for URI formats.
 * 
 * --------------------------------------------
 * - Passes: `/some/v4lu3s-go/here`
 * - Fails: `no/prefix/and/$ymbols`
 */
export const RegexpURI = /^(?:\/[a-z0-9\-_]+)+$/gi;

/**
 * Tests if a given input string matches the URI format.
 * 
 * --------------------------------------------
 * - Passes: `/some/v4lu3s-go/here`
 * - Fails: `no/prefix/and/$ymbols`
 * 
 * @see {@link RegexpURI}
 * @param {string} input String to test
 * @param {boolean} allowEmpty [default=true] Are empty strings allowed?
 * @returns {boolean} True if it passes the test
 */
export const isStringURI = (input:string, allowEmpty = false):boolean => {
  if(!input || typeof input !== 'string')
    return false;
  
  if(input.length === 0)
    return allowEmpty;
  return RegexpURI.test(input);
};

/**
 * Regular expression matching kabob-case text.
 * 
 * --------------------------------------------
 * - Passes: `any-values01-here`
 * - Fails: `Caps_and-symbols`
 */
export const RegexpKabob = /^[a-z0-9-]+$/g;

/**
 * Tests if a given input string matches the Kabob-case format.
 * 
 * 
 * --------------------------------------------
 * - Passes: `any-values01-here`
 * - Fails: `Caps_and-symbols`
 * 
 * @see {@link RegexpKabob}
 * @param {string} input String to test
 * @param {boolean} allowEmpty [default=true] Are empty strings allowed?
 * @returns {boolean} True if it passes the test
 */
export const isStringKabob = (input:string, allowEmpty = false):boolean => {
  if(!input || typeof input !== 'string')
    return false;
  
  if(input.length === 0)
    return allowEmpty;
  return RegexpKabob.test(input);
};

