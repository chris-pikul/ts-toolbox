import {
  describe
} from 'mocha';

import {
  expect
} from 'chai';

import Vector from '../../src/vectors/vector';

describe('Vector class', () => {
  describe('Vector::constructor', () => {
    it('accepts 1 number for zero-value', () => {
      const vec = new Vector(3);
      expect(vec.count).to.equal(3);
      expect(vec.toArray()).to.eql([0, 0, 0]);
    });

    it('throws on components less than 1', () => {
      expect(() => { new Vector(0) }).to.throw();
      expect(() => { new Vector(-3) }).to.throw();
    });

    it('accepts variable numbers', () => {
      expect((new Vector(3, 6)).toArray()).to.eql([3, 6]);
    });

    it('throws on non-number variable arguments', () => {
      expect(() => { new Vector(3, "str" as unknown as number) }).to.throw();
    });
    
    it('parses strings', () => {
      expect((new Vector('{3, 6}')).toArray()).to.eql([3, 6]);
      expect((new Vector('[ 3.0 6.0')).toArray()).to.eql([3, 6]);
      expect((new Vector('-3 6.0')).toArray()).to.eql([-3, 6]);
    });

    it('throws on bad strings', () => {
      expect(() => { new Vector('some string') }).to.throw();
    });

    it('accepts Array of numbers', () => {
      expect((new Vector([3, 6])).toArray()).to.eql([3, 6]);
    });

    it('throws on empty array', () => {
      expect(() => { new Vector([]) }).to.throw();
    });

    it('throws on array with non-numbers', () => {
      expect(() => { new Vector([3, "string"] as unknown[] as number[]) }).to.throw();
    });

    it('copied other Vector objects', () => {
      const vec = new Vector(3, 6);
      expect((new Vector(vec)).toArray()).to.eql([3, 6]);
    });

    it('clones Vectors and allows for appending', () => {
      const vec = new Vector(3, 6);
      expect((new Vector(vec, 9)).toArray()).to.eql([3, 6, 9]);
    });

    it('throws when appending Vector with a non-number', () => {
      const vec = new Vector(3, 6);
      expect(() => { new Vector(vec, "string" as unknown as number) }).to.throw();
    });

    it('throws on non-accepted types', () => {
      expect(() => { new Vector(new Date() as unknown as Vector) }).to.throw();
      expect(() => { new Vector({ x: 3, y: 6 } as unknown as Vector) }).to.throw();
    });
  });

  describe('Vector.count getter', () => {
    const vec = new Vector(3, 6);
    expect(vec.count).to.equal(2);
  });

  describe('Vector.toString()', () => {
    it('formats correctly on integers', () => {
      const vec = new Vector(3, 6);
      expect(vec.toString()).to.equal('[3, 6]');
    });
    
    it('formats correctly on floats', () => {
      const vec2 = new Vector(3.14159, -6.28);
      expect(vec2.toString()).to.equal('[3.14159, -6.28]');
    });
    
    it('parses a new Vector from the output of another toString', () => {
      const vec = new Vector(3.14159, 6);
      expect((new Vector(vec.toString())).toArray()).to.eql([3.14159, 6]);
    });
  });

  describe('Vector.toArray()', () => {
    it('outputs correctly', () => {
      expect((new Vector(3, 6.1234).toArray())).to.eql([3, 6.1234]);
    })
  });

  describe('Vector.get()', () => {
    it('returns correctly', () => {
      const vec = new Vector(3, 6);
      expect(vec.get(1)).to.eql(6);
    });

    it('throws on out-of-bound indices', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.get(-1)).to.throw();
      expect(() => vec.get(2)).to.throw();
    });
  });

  describe('Vector.magnitude()', () => {
    it('computes correctly', () => {
      const vec = new Vector(3, 6);
      expect(vec.magnitude()).to.equal(6.708203932499369);
    });
  });

  describe('Vector.magnitudeSqr()', () => {
    it('computes correctly', () => {
      const vec = new Vector(3, 6);
      expect(vec.magnitudeSqr()).to.equal(45);
    });
  });

  describe('Vector.maxComponent()', () => {
    it('returns the largest component', () => {
      const vec = new Vector(3, 6);
      expect(vec.maxComponent()).to.equal(6);
    });
  });

  describe('Vector.minComponent()', () => {
    it('returns the smallest component', () => {
      const vec = new Vector(3, 6);
      expect(vec.minComponent()).to.equal(3);
    });
  });

  describe('Vector.reduce()', () => {
    it('computes correctly', () => {
      const cb = (acc:number, cur:number):number => (acc + cur);
      const vec = new Vector(3, 6);
      expect(vec.reduce(cb)).to.equal(9);
    });
  });

  describe('Vector.fill()', () => {
    it('fills all components', () => {
      const vec = new Vector(3, 6);
      expect(vec.fill(9).toArray()).to.eql([9, 9]);
    });
  });

  describe('Vector.reset()', () => {
    it('fills all components with 0', () => {
      const vec = new Vector(3, 6);
      expect(vec.reset().toArray()).to.eql([0, 0]);
    });
  });

  describe('Vector.set()', () => {
    it('fills correctly with same number of components', () => {
      const vec = new Vector(3, 6);
      expect(vec.set(9, 12).toArray()).to.eql([9, 12]);
    });

    it('ignores extra components', () => {
      const vec = new Vector(3, 6);
      expect(vec.set(9, 12, 15).toArray()).to.eql([9, 12]);
    });

    it('skips components on less than # of components', () => {
      const vec = new Vector(3, 6);
      expect(vec.set(9).toArray()).to.eql([9, 6]);
    });

    it('throws on non-number arguments', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.set("str" as unknown as number)).to.throw();
    });
  });

  describe('Vector.setComponent()', () => {
    it('sets value when in-bounds', () => {
      const vec = new Vector(3, 6);
      expect(vec.setComponent(1, 9).toArray()).to.eql([3, 9]);
    });

    it('throws on out-of-bounds indices', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.setComponent(2, 9)).to.throw();
      expect(() => vec.setComponent(-1, 9)).to.throw();
    });
  });

  describe('Vector.abs()', () => {
    it('computes correctly', () => {
      const vec = new Vector(3, -6);
      expect(vec.abs().toArray()).to.eql([3, 6]);
    });
  });

  describe('Vector.add()', () => {
    it('works with Vectors', () => {
      const vecA = new Vector(3, 6);
      const vecB = new Vector(2, 2);
      expect(vecA.add(vecB).toArray()).to.eql([5, 8]);
    });

    it('works with Array of numbers', () => {
      const vec = new Vector(3, 6);
      expect(vec.add([2, 2]).toArray()).to.eql([5, 8]);
    });

    it('throws on Array of non-numbers', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.add([2, "str" as unknown as number])).to.throw();
    });

    it('works with single number', () => {
      const vec = new Vector(3, 6);
      expect(vec.add(2).toArray()).to.eql([5, 8]);
    });

    it('throws on invalid type', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.add('str' as unknown as number)).to.throw();
      expect(() => vec.add({ x: 2, y: 2 } as unknown as Vector)).to.throw();
    });
  });

  describe('Vector.append()', () => {
    it('appends new values', () => {
      const vec = new Vector(3, 6);
      expect(vec.append(9, 12).toArray()).to.eql([3, 6, 9, 12]);
    });

    it('throws on non-numbers', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.append('str' as unknown as number)).to.throw();
    });
  });

  describe('Vector.ceil()', () => {
    it('rounds up floats', () => {
      const vec = new Vector(-3.14, 6.9);
      expect(vec.ceil().toArray()).to.eql([-3, 7]);
    });
  });

  describe('Vector.clamp()', () => {
    it('clamps values', () => {
      const vec = new Vector(3, 6);
      expect(vec.clamp(0, 5).toArray()).to.eql([3, 5]);
    });

    it('by default makes units', () => {
      const vec = new Vector(0.25, 6);
      expect(vec.clamp().toArray()).to.eql([0.25, 1]);
    });

    it('properly sorts the larger and smaller arguments', () => {
      const vec = new Vector(3, 6);
      expect(vec.clamp(5, 0).toArray()).to.eql([3, 5]);
    });
  });

  describe('Vector.concat()', () => {
    it('works with Arrays of numbers', () => {
      const vec = new Vector(3, 6);
      expect(vec.concat([9, 12]).toArray()).to.eql([3, 6, 9, 12]);
      expect(vec.concat([9, 12], [15]).toArray()).to.eql([3, 6, 9, 12, 15]);
    });

    it('works with Vectors', () => {
      const vec = new Vector(3, 6);
      const vec2 = new Vector(9, 12);
      expect(vec.concat(vec2).toArray()).to.eql([3, 6, 9, 12]);
      expect(vec.concat(vec2, vec2).toArray()).to.eql([3, 6, 9, 12, 9, 12]);
    });

    it('works with mixed Array and Vectors', () => {
      const vec = new Vector(3, 6);
      const vec2 = new Vector(9, 12);
      expect(vec.concat(vec2, [15]).toArray()).to.eql([3, 6, 9, 12, 15]);
    });

    it('throws on invalid Array types', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.concat(['str'] as unknown as number[])).to.throw();
    });

    it('throws on invalid arguments', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.concat('str' as unknown as number[])).to.throw();
    });
  });

  describe('Vector.divide()', () => {
    it('divides valid Vectors', () => {
      const vec = new Vector(3, 6);
      const vecB = new Vector(3, 2);
      expect(vec.divide(vecB).toArray()).to.eql([1, 3]);
    });

    it('results in 0 for mis-alligned Vectors', () => {
      const vec = new Vector(3, 6);
      const vecB = new Vector([ 3 ]);
      expect(vec.divide(vecB).toArray()).to.eql([1, 0]);
    });

    it('divides with Array of numbers', () => {
      const vec = new Vector(3, 6);
      expect(vec.divide([3, 2]).toArray()).to.eql([1, 3]);
    });

    it('results in 0s for mis-alligned Arrays', () => {
      const vec = new Vector(3, 6);
      expect(vec.divide([ 3 ]).toArray()).to.eql([1, 0]);
    });

    it('throws on Array with non-number entries', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.divide([2, 'str' as unknown as number])).to.throw();
    });

    it('divides with a single-number', () => {
      const vec = new Vector(3, 6);
      expect(vec.divide(2).toArray()).to.eql([1.5, 3]);
    });

    it('throws on invalid argument', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.divide('str' as unknown as number)).to.throw();
      expect(() => vec.divide({x:2, y:2} as unknown as Vector)).to.throw();
    });
  });

  describe('Vector.floor()', () => {
    it('rounds down components', () => {
      const vec = new Vector(-3.14, 6.67);
      expect(vec.floor().toArray()).to.eql([-4, 6]);
    });
  });

  describe('Vector.map()', () => {
    it('maps components properly', () => {
      const vec = new Vector(3, 6);
      const cb = (val:number, ind:number):number => (ind);
      expect(vec.map(cb).toArray()).to.eql([0, 1]);
    });

    it('throws on non-number values returned', () => {
      const vec = new Vector(3, 6);
      const cb = (val:number):number => ('str' as unknown as number);
      expect(() => vec.map(cb)).to.throw();
    });
  });

  describe('Vector.mapWith()', () => {
    it('works with Vectors of the same size', () => {
      const vec = new Vector(3, 6);
      const vec2 = new Vector(2, 1);
      const cb = (valA:number, valB:number):number => (valA + valB);
      expect(vec.mapWith(vec2, cb).toArray()).to.eql([5, 7]);
    });

    it('substitutes missing components with 0', () => {
      const vec = new Vector(3, 6);
      const vec2 = new Vector([ 2 ]);
      const cb = (valA:number, valB:number):number => (valA + valB);
      expect(vec.mapWith(vec2, cb).toArray()).to.eql([5, 6]);
    });

    it('sizes to the larger Vector', () => {
      const vec = new Vector(3, 6);
      const vec2 = new Vector(2, 1, -3);
      const cb = (valA:number, valB:number):number => (valA + valB);
      expect(vec.mapWith(vec2, cb).toArray()).to.eql([5, 7, -3]);
    });

    it('produces an out-of-bounds flag for callbacks', () => {
      const vec = new Vector(3, 6);
      const vec2 = new Vector([ 2 ]);
      const cb = (valA:number, valB:number, _:number, out:boolean):number => (out ? valA : valB);
      expect(vec.mapWith(vec2, cb).toArray()).to.eql([2, 6]);
    });

    it('works with Arrays of numbers the same size', () => {
      const vec = new Vector(3, 6);
      const cb = (valA:number, valB:number):number => (valA + valB);
      expect(vec.mapWith([2, 1], cb).toArray()).to.eql([5, 7]);
    });

    it('throws on Arrays with non-number members', () => {
      const vec = new Vector(3, 6);
      const vec2:Array<number> = [2, 'str' as unknown as number];
      const cb = (valA:number, valB:number):number => (valA + valB);
      expect(() => vec.mapWith(vec2, cb)).to.throw();
    });
  });

  describe('Vector.multiply()', () => {
    it('works with Vectors', () => {
      const vecA = new Vector(3, 6);
      const vecB = new Vector(2, 2);
      expect(vecA.multiply(vecB).toArray()).to.eql([6, 12]);
    });

    it('works with Array of numbers', () => {
      const vec = new Vector(3, 6);
      expect(vec.multiply([2, 2]).toArray()).to.eql([6, 12]);
    });

    it('throws on Array of non-numbers', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.multiply([2, "str" as unknown as number])).to.throw();
    });

    it('works with single number', () => {
      const vec = new Vector(3, 6);
      expect(vec.multiply(2).toArray()).to.eql([6, 12]);
    });

    it('throws on invalid type', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.multiply('str' as unknown as number)).to.throw();
      expect(() => vec.multiply({ x: 2, y: 2 } as unknown as Vector)).to.throw();
    });
  });

  describe('Vector.normalize()', () => {
    it('computes correctly', () => {
      const vec = new Vector(3, 6);
      const res = [0.4472135954999579, 0.8944271909999159];
      expect(vec.normalize().toArray()).to.eql(res);
    });

    it('protects against 0 length Vector', () => {
      const vec = new Vector(0, 0, 0);
      expect(vec.normalize().toArray()).to.eql([0, 0, 0]);
    });
  });

  describe('Vector.pow()', () => {
    it('raises to the power', () => {
      const vec = new Vector(3, 6);
      expect(vec.pow(2).toArray()).to.eql([9, 36]);
    });
  });

  describe('Vector.resize()', () => {
    it('returns the same Vector if same size', () => {
      const vec = new Vector(3, 6);
      expect(vec.resize(vec.count).toArray()).to.eql([3, 6]);
    });

    it('fills new values on enlarging', () => {
      const vec = new Vector(3, 6);
      expect(vec.resize(3, 9).toArray()).to.eql([3, 6, 9]);
    });

    it('truncates on shortening', () => {
      const vec = new Vector(3, 6);
      expect(vec.resize(1).toArray()).to.eql([ 3 ]);
    });

    it('throws error on invalid number of components', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.resize(0)).to.throw();
    });
  });

  describe('Vector.round()', () => {
    it('rounds values appropriately', () => {
      const vec = new Vector(-3.14, 6.5);
      expect(vec.round().toArray()).to.eql([-3, 7]);
    });
  });

  describe('Vector.scale()', () => {
    it('multiplies components', () => {
      const vec = new Vector(3, 6);
      expect(vec.scale(2).toArray()).to.eql([6, 12]);
    });
  });

  describe('Vector.subtract()', () => {
    it('works with Vectors', () => {
      const vecA = new Vector(3, 6);
      const vecB = new Vector(2, 2);
      expect(vecA.subtract(vecB).toArray()).to.eql([1, 4]);
    });

    it('ignores components of mis-aligned Vectors', () => {
      const vecA = new Vector(3, 6);
      const vecB = new Vector([ 2 ]);
      expect(vecA.subtract(vecB).toArray()).to.eql([1, 6]);
    });

    it('works with Array of numbers', () => {
      const vec = new Vector(3, 6);
      expect(vec.subtract([2, 2]).toArray()).to.eql([1, 4]);
    });

    it('ignores components of mis-aligned Vectors', () => {
      const vec = new Vector(3, 6);
      expect(vec.subtract([ 2 ]).toArray()).to.eql([1, 6]);
    });

    it('throws on Array of non-numbers', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.subtract([2, "str" as unknown as number])).to.throw();
    });

    it('works with single number', () => {
      const vec = new Vector(3, 6);
      expect(vec.subtract(2).toArray()).to.eql([1, 4]);
    });

    it('throws on invalid type', () => {
      const vec = new Vector(3, 6);
      expect(() => vec.subtract('str' as unknown as number)).to.throw();
      expect(() => vec.subtract({ x: 2, y: 2 } as unknown as Vector)).to.throw();
    });
  });

  describe('Vector.sqrt()', () => {
    it('calculates correctly', () => {
      const vec = new Vector(9, 36);
      expect(vec.sqrt().toArray()).to.eql([3, 6]);
    });
  });

  describe('Vector.trunc()', () => {
    it('removes decimal places', () => {
      const vec = new Vector(-3.14, 6.1234);
      expect(vec.trunc().toArray()).to.eql([-3, 6]);
    });
  });

  describe('Vector.difference()', () => {
    it('calculates correctly with same sized Vectors', () => {
      const vec = new Vector(3, 6);
      const vecB = new Vector(-3, 2);
      expect(vec.difference(vecB)).to.equal(10);
    });

    it('treats smaller Vector components as 0s', () => {
      const vec = new Vector(3, 6);
      const vecB = new Vector([ -3 ]);
      expect(vec.difference(vecB)).to.equal(12);
    });

    it('treats larget Vector components as 0s', () => {
      const vec = new Vector(3, 6);
      const vecB = new Vector(-3, 2, 4);
      expect(vec.difference(vecB)).to.equal(14);
    });
  });

  describe('Vector.equals()', () => {
    it('works as default', () => {
      const vec = new Vector(3/4, 6/9);
      const vecB = new Vector(3/4, 6/9);
      expect(vec.equals(vecB)).to.be.true;
    });

    it('works with high-tolerance', () => {
      const vec = new Vector(3.123456, 6.123456);
      const vecB = new Vector(3.123999, 6.123999);
      expect(vec.equals(vecB, 0.01)).to.be.true;
    });
  });

  describe('Vector::random()', () => {
    it('generates units per-component 100x', () => {
      for(let i=0; i < 100; i++) {
        expect(Vector.random(2).maxComponent()).to.be.lessThanOrEqual(1.0);
        expect(Vector.random(2).minComponent()).to.be.greaterThanOrEqual(0.0);
      }
    });

    it('throws on invalid number of components', () => {
      expect(() => Vector.random(0)).to.throw();
    });
  });

  describe('Vector::randomUnit()', () => {
    it('generates unit-length vectors 100x', () => {
      const eql = (a:number, b:number):boolean => (Math.abs(a - b) <= Number.EPSILON);

      for(let i=0; i < 100; i++) {
        const mag = Vector.randomUnit(2).magnitude();
        expect(eql(mag, 1)).to.be.true;
      }
    });

    it('throws on invalid number of components', () => {
      expect(() => Vector.randomUnit(0)).to.throw();
    });
  });

  describe('Vector::randomRange()', () => {
    it('generates per-component 100x', () => {
      for(let i=0; i < 100; i++) {
        expect(Vector.randomRange(2, 3, 6).maxComponent()).to.be.lessThanOrEqual(6.0);
        expect(Vector.randomRange(2, 3, 6).minComponent()).to.be.greaterThanOrEqual(3.0);
      }
    });

    it('throws on invalid number of components', () => {
      expect(() => Vector.randomRange(0)).to.throw();
    });
  });
});