import { expect } from 'chai';
import { SpongeBob }  from '../app/spongebob';

describe('Converter', () => {
  let spongeBob: SpongeBob;
  beforeEach(() => {
    spongeBob = new SpongeBob();
  })

  context('where there is one letter', () => {
    it('should return the opposite casing of that letter', () => {
      expect(spongeBob.convert('a')).equals('A');
      expect(spongeBob.convert('A')).equals('a');
    });
  });

  context('where there are two letters', () => {
    it('should have one of each case', () => {
      const letters = 'ab';
      const expectedResults = ['aB', 'Ab'];
      for(let i = 0; i < 20; i++) {
        const actual = spongeBob.convert(letters);
        expect(expectedResults).to.include(actual);
      }
    });
  });

  context('when there are three letters', () => {
    it('should randomly adjust them', () => {
      const letters = 'the';
      const expectedResults = ['The', 'tHe', 'thE', 'THe', 'tHE'];
      const results: Array<string> = [];
      for(let i = 0; i < 50; i++) 
        results.push(spongeBob.convert(letters));

      expectedResults.map(expected => {
        expect(results).to.include(expected);
      });
    });
  });

  context('when words have more than three letters', () => {
    it('should scramble letters in chunks of 2', () => {
      const letters = 'cushion';
      const expectedResults = [
        'CUshion', 
        'cUShion', 
        'cuSHion',
        'cusHIon',
        'cushIOn',
        'cushiON',
        'CUsHIon',
        'CUshIOn',
        'CUshiON',
        'cUShIOn',
        'cUShiON',
        'cuSHiON'
      ];

      const results: Array<string> = [];
      for(let i = 0; i < 50; i++) 
        results.push(spongeBob.convert(letters));

      expectedResults.map(expected => {
        expect(results).to.include(expected);
      });
    });
  });
});