import {
  describe
} from 'mocha';

import {
  expect
} from 'chai';

import * as Arrays from '../src/arrays';

describe('Arrays', () => {
  describe('inPlaceConcat', () => {
    it('concats in-place', () => {
      const existing = ['apple'];
      expect(existing).to.deep.equal(['apple']);

      let newLen = Arrays.inPlaceConcat(existing, ['orange']);
      expect(existing).to.deep.equal(['apple', 'orange']);
      expect(newLen).to.equal(2);

      newLen = Arrays.inPlaceConcat(existing, ['pear', 'lemon'], ['bananna']);
      expect(existing).to.deep.equal(['apple', 'orange', 'pear', 'lemon', 'bananna']);
      expect(newLen).to.equal(5);
    });
  });

  describe('flattenArray', () => {
    it('rejects non-Array types', () => {
      const res = Arrays.flattenArray(123 as unknown as any[]);
      expect(res).to.deep.equal([]);
    });

    it('returns as-is for empty depth', () => {
      const arr = ['apple', ['orange', 'lemon']];
      const res = Arrays.flattenArray(arr, -1);
      expect(res).to.deep.equal(arr);
    });

    it('flattens to one on default', () => {
      const arr = ['apple', ['orange', 'lemon', ['grapefruit']]];
      const res = Arrays.flattenArray(arr);
      expect(res).to.deep.equal(['apple', 'orange', 'lemon', ['grapefruit']]);
    });

    it('flattens past first', () => {
      const arr = ['apple', ['orange', 'lemon', ['grapefruit']]];
      const res = Arrays.flattenArray(arr, 10);
      expect(res).to.deep.equal(['apple', 'orange', 'lemon', 'grapefruit']);
    });
  });
});