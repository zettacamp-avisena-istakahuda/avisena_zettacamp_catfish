function Day1(theWord, start, end) {
    var result = theWord.slice(start, end);
    return result;
}
console.log(Day1('Learning Typescript is different than Javascript', 9, 19));
