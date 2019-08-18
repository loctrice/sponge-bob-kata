import { RandomNumbers } from "./utils/random-numbers";

export class SpongeBob {
  convert(words: string): string {
    let modifiedString = words;
    if (words.length === 1) {
      modifiedString = this.handleSingleLetter(words);
    } else if (words.length === 2) {
      modifiedString = this.handleTwoLetters(words);
    } else if (words.length === 3) {
      modifiedString = this.handleThreeLetters(words);
    } else {
      modifiedString = this.handleMoreThanThreeLetters(words);
    }
    return modifiedString;
  }

  private handleSingleLetter(letter: string): string {
    return (letter.toUpperCase() === letter) ? 
      letter.toLowerCase() : 
      letter.toUpperCase();
  }

  private handleTwoLetters(letters: string): string {
    const indexToModify = RandomNumbers.generate(letters.length);
    return this.transformWord(letters, [indexToModify]);
  }

  private handleThreeLetters(letters: string): string {
    const indexesToModify: Array<number> = [];
    const modifyOneOrTwo = RandomNumbers.generate(2) + 1;
    indexesToModify.push(RandomNumbers.generate(letters.length));
    if(modifyOneOrTwo === 2) {
      indexesToModify.push(RandomNumbers.generateExcluding(letters.length, indexesToModify[0]));
    }
    return this.transformWord(letters, indexesToModify);
  }

  private handleMoreThanThreeLetters(letters: string): string {
    let newWord = '';
    for(let index = 0; index < letters.length; index++) {
      if (letters[index + 1]) {
        const randomChanceToModify = RandomNumbers.generate(2);
        if(randomChanceToModify) {
          newWord += letters[index];
          newWord += letters[index + 1];
          index += 2;
        }
      }
    }
    return newWord;
  }

  private transformWord(letters: string, indexesToModify: Array<number>): string {
    return letters.split('').map((letter, index) => {
      return (indexesToModify.includes(index)) ?
      this.handleSingleLetter(letter):
      letter;
    }).join('');
  }
}