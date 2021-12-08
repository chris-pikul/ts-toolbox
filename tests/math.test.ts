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

  describe('isPositive', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isPositive(false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isPositive('test' as unknown as number), 'allowed string').to.be.false;
      expect(Math.isPositive([123] as unknown as number), 'allowed array').to.be.false;
      expect(Math.isPositive({key: 'val'} as unknown as number), 'allowed object').to.be.false;
    });
    it('returns true for positives', () => {
      expect(Math.isPositive(123)).to.be.true;
      expect(Math.isPositive(3.14159)).to.be.true;
    });
    it('returns false for negative', () => {
      expect(Math.isPositive(-123)).to.be.false;
      expect(Math.isPositive(-3.14159)).to.be.false;
    });
  });

  describe('isNegative', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isNegative(false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isNegative('test' as unknown as number), 'allowed string').to.be.false;
      expect(Math.isNegative([123] as unknown as number), 'allowed array').to.be.false;
      expect(Math.isNegative({key: 'val'} as unknown as number), 'allowed object').to.be.false;
    });
    it('returns false for positives', () => {
      expect(Math.isNegative(123)).to.be.false;
      expect(Math.isNegative(3.14159)).to.be.false;
    });
    it('returns true for negative', () => {
      expect(Math.isNegative(-123)).to.be.true;
      expect(Math.isNegative(-3.14159)).to.be.true;
    });
  });

  describe('isOdd', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isOdd(false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isOdd('test' as unknown as number), 'allowed string').to.be.false;
      expect(Math.isOdd([123] as unknown as number), 'allowed array').to.be.false;
      expect(Math.isOdd({key: 'val'} as unknown as number), 'allowed object').to.be.false;
    });
    it('returns false for evens', () => {
      expect(Math.isOdd(12)).to.be.false;
      expect(Math.isOdd(3.14)).to.be.false;
    });
    it('returns true for odds', () => {
      expect(Math.isOdd(9)).to.be.true;
      expect(Math.isOdd(-3.1415, 3)).to.be.true;
    });
  });

  describe('isEven', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isEven(false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isEven('test' as unknown as number), 'allowed string').to.be.false;
      expect(Math.isEven([123] as unknown as number), 'allowed array').to.be.false;
      expect(Math.isEven({key: 'val'} as unknown as number), 'allowed object').to.be.false;
    });
    it('returns true for evens', () => {
      expect(Math.isEven(12)).to.be.true;
      expect(Math.isEven(3.14)).to.be.true;
    });
    it('returns false for odds', () => {
      expect(Math.isEven(9)).to.be.false;
      expect(Math.isEven(-3.1415, 3)).to.be.false;
    });
  });

  describe('isMultiple', () => {
    it('returns false for non-numbers', () => {
      expect(Math.isMultiple(false as unknown as number, 5), 'allowed boolean').to.be.false;
      expect(Math.isMultiple('test' as unknown as number, 5), 'allowed string').to.be.false;
      expect(Math.isMultiple([123] as unknown as number, 5), 'allowed array').to.be.false;
      expect(Math.isMultiple({key: 'val'} as unknown as number, 5), 'allowed object').to.be.false;
      expect(Math.isMultiple(5, false as unknown as number), 'allowed boolean').to.be.false;
      expect(Math.isMultiple(5, 'test' as unknown as number), 'allowed string').to.be.false;
    });
    it('returns true for 10, 5', () => {
      expect(Math.isMultiple(10, 5)).to.be.true;
    });
    it('returns false for -3, 2', () => {
      expect(Math.isMultiple(-3, 2)).to.be.false;
    });
    it('returns true for -6, 2', () => {
      expect(Math.isMultiple(-6, 2)).to.be.true;
    });
    it('returns true for -8, -2', () => {
      expect(Math.isMultiple(-8, -2)).to.be.true;
    });
  });

  describe('positive', () => {
    it('returns -1 for non-numbers', () => {
      expect(Math.positive(false as unknown as number), 'allowed boolean').to.be.equal(-1);
      expect(Math.positive('test' as unknown as number), 'allowed string').to.be.equal(-1);
      expect(Math.positive([123] as unknown as number), 'allowed array').to.be.equal(-1);
      expect(Math.positive({key: 'val'} as unknown as number), 'allowed object').to.be.equal(-1);
    });

    it('works for negatives', () => {
      expect(Math.positive(-123)).to.equal(0);
    });

    it('works for positives', () => {
      expect(Math.positive(123)).to.equal(123);
    });
  });

  describe('clampFloat', () => {
    const MAX = Number.MAX_VALUE;
    it('returns MAX for non-numbers', () => {
      expect(Math.clampFloat(false as unknown as number), 'allowed boolean').to.equal(MAX);
      expect(Math.clampFloat('test' as unknown as number), 'allowed string').to.equal(MAX);
      expect(Math.clampFloat([123] as unknown as number), 'allowed array').to.equal(MAX);
      expect(Math.clampFloat({key: 'val'} as unknown as number), 'allowed object').to.equal(MAX);
    });

    it('returns properly', () => {
      expect(Math.clampFloat(-21.3, -100, 100)).to.equal(-21.3);
    });
  });

  describe('clampUnit', () => {
    it('returns 0 for non-numbers', () => {
      expect(Math.clampUnit(false as unknown as number), 'allowed boolean').to.equal(0);
      expect(Math.clampUnit('test' as unknown as number), 'allowed string').to.equal(0);
      expect(Math.clampUnit([123] as unknown as number), 'allowed array').to.equal(0);
      expect(Math.clampUnit({key: 'val'} as unknown as number), 'allowed object').to.equal(0);
    });

    it('returns properly', () => {
      expect(Math.clampUnit(0.5)).to.equal(0.5);
      expect(Math.clampUnit(-1)).to.equal(0);
      expect(Math.clampUnit(2)).to.equal(1);
    });
  });

  describe('clampDegree', () => {
    it('returns 0 for non-numbers', () => {
      expect(Math.clampDegree(false as unknown as number), 'allowed boolean').to.equal(0);
      expect(Math.clampDegree('test' as unknown as number), 'allowed string').to.equal(0);
      expect(Math.clampDegree([123] as unknown as number), 'allowed array').to.equal(0);
      expect(Math.clampDegree({key: 'val'} as unknown as number), 'allowed object').to.equal(0);
    });

    it('returns properly', () => {
      expect(Math.clampDegree(180)).to.equal(180);
      expect(Math.clampDegree(-90)).to.equal(0);
      expect(Math.clampDegree(480)).to.equal(360);
    });
  });

  describe('clampInteger', () => {
    const MAX = Number.MAX_VALUE;
    it('returns MAX for non-numbers', () => {
      expect(Math.clampInteger(false as unknown as number), 'allowed boolean').to.equal(MAX);
      expect(Math.clampInteger('test' as unknown as number), 'allowed string').to.equal(MAX);
      expect(Math.clampInteger([123] as unknown as number), 'allowed array').to.equal(MAX);
      expect(Math.clampInteger({key: 'val'} as unknown as number), 'allowed object').to.equal(MAX);
    });

    it('returns integer for negative float', () => {
      expect(Math.clampInteger(-3.14159)).to.equal(0);
    });

    it('returns integer for float values', () => {
      expect(Math.clampInteger(24.5, 26.5, 90)).to.equal(26);
    });
  });

  describe('clampByte', () => {
    const MAX = Number.MAX_VALUE;
    it('returns MAX for non-numbers', () => {
      expect(Math.clampByte(false as unknown as number), 'allowed boolean').to.equal(MAX);
      expect(Math.clampByte('test' as unknown as number), 'allowed string').to.equal(MAX);
      expect(Math.clampByte([123] as unknown as number), 'allowed array').to.equal(MAX);
      expect(Math.clampByte({key: 'val'} as unknown as number), 'allowed object').to.equal(MAX);
    });

    it('returns integer for negative float', () => {
      expect(Math.clampByte(-3.14159)).to.equal(0);
    });

    it('returns integer for float values', () => {
      expect(Math.clampByte(265.5)).to.equal(255);
    });
  });

  describe('precisionRound', () => {
    it('rounds PI', () => {
      expect(Math.precisionRound(3.14159, 2)).to.equal(3.14);
    });
  });

  describe('precisionFloor', () => {
    it('rounds PI', () => {
      expect(Math.precisionFloor(3.14159, 2)).to.equal(3.14);
    });
  });

  describe('precisionCeil', () => {
    it('rounds PI', () => {
      expect(Math.precisionCeil(3.14159, 2)).to.equal(3.15);
    });
  });

  describe('precisionModulo', () => {
    it('performs correctly', () => {
      expect(Math.precisionModulo(3.14, 2.5, 1)).to.equal(0.6);
    });
  });

  describe('wrapToPositive', () => {
    it('modulos positive values', () => {
      expect(Math.wrapToPositive(10, 5)).to.equal(0);
    });

    it('calculates on negatives without wrapping', () => {
      expect(Math.wrapToPositive(-5, 10)).to.equal(5);
    });

    it('calculates with overlap on negatives', () => {
      expect(Math.wrapToPositive(-95, 30)).to.equal(25);
    });
  });

  describe('equals', () => {
    it('works for integers', () => {
      expect(Math.equals(123, 123)).to.be.true;
    });

    it('works for floats', () => {
      expect(Math.equals(123.456789, 123.456789)).to.be.true;
    });
  });

  describe('degToRad', () => {
    it('converts properly', () => {
      expect(Math.precisionFloor(Math.degToRad(90), 6)).to.equal(1.570796);
    });
  });

  describe('radToDeg', () => {
    it('converts properly', () => {
      expect(Math.precisionFloor(Math.radToDeg(1.5708), 6)).to.equal(90.00021);
    });
  });

  describe('linearInterp', () => {
    it('calculates properly', () => {
      expect(Math.linearInterp(50, 100, 0.5)).to.equal(75);
    });
  });

  describe('inverseLinearInterp', () => {
    it('calculates properly', () => {
      expect(Math.inverseLinearInterp(50, 100, 75)).to.equal(0.5);
    });
  });

  describe('rescale', () => {
    it('calculates properly', () => {
      expect(Math.rescale(75, 50, 100, 0, 1)).to.equal(0.5);
    });
  });
});