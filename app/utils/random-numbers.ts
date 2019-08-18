
export class RandomNumbers {
    static generate(max: number): number {
        return Math.floor(Math.random() * max);
    }

    static generateExcluding(max: number, excluded: number): number {
        let randomNumber = excluded;
        while (randomNumber === excluded)
            randomNumber = this.generate(max);
        return randomNumber;
    }
}