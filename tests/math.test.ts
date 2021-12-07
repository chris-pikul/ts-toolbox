import { describe } from 'mocha';
import { expect } from 'chai';

import * as Math from '../src/math';

describe('Math', () => {
  describe('isInteger', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isInteger(false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isInteger('test' as unknown as number), 'allowed string').to.be.false;
      expect(Math.isInteger([123] as unknown as number), 'allowed array').to.be.false;
      expect(Math.isInteger({key: 'val'} as unknown as number), 'allowed object').to.be.false;
    });
    it('returns true for integers', () => {
      expect(Math.isInteger(123)).to.be.true;
      expect(Math.isInteger(-123)).to.be.true;
    });
    it('returns false on floats', () => {
      expect(Math.isInteger(3.14)).to.be.false;
      expect(Math.isInteger(Number.EPSILON)).to.be.false;
    });
  });

  describe('isFloat', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isFloat(false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isFloat('test' as unknown as number), 'allowed string').to.be.false;
      expect(Math.isFloat([123] as unknown as number), 'allowed array').to.be.false;
      expect(Math.isFloat({key: 'val'} as unknown as number), 'allowed object').to.be.false;
    });
    it('returns false for integers', () => {
      expect(Math.isFloat(123)).to.be.false;
      expect(Math.isFloat(-123)).to.be.false;
    });
    it('returns true on floats', () => {
      expect(Math.isFloat(3.14)).to.be.true;
      expect(Math.isFloat(Number.EPSILON)).to.be.true;
    });
  });
});