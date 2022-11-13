function Day1(theWord: string, start: number, end: number): string {
    let result: string = theWord.slice(start, end);
    return result;
}

console.log(Day1('Learning Typescript is different than Javascript', 9, 19));