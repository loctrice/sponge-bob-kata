import { expect } from 'chai';
import { RandomNumbers } from '../app/utils/random-numbers';

describe('RandomNumbers', () => {
   describe('generate', () => {
       it('should return a number under the max', () => {
           const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 55, 66];
           numbers.forEach(number => {
               expect(RandomNumbers.generate(number)).to.be.lessThan(number);
           });
        });
   });

   describe('generateExcluding', () => {
       it('should return a number under the max but it should not be the excluded number', () => {
           const numberOfTries = 25;
           const max = 5;
           const excluded = 3;
            for(let i = 0; i < numberOfTries; i++) {
                const actual = RandomNumbers.generateExcluding(max, excluded);
                expect(actual).to.be.lessThan(max);
                expect(actual).to.not.equal(excluded);
            }
       });
   });
});