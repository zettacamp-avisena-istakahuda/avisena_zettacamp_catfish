type Custom = Array<number | string>;

function Day2(Data: Custom): string {
    return (Data.join(" "));
}

const arr: (string | number)[] = ['Bejo', 'has', '4', 'sport', 'cars'];
const arr2: (string | number)[] = [1, 'data', 3, 'results'];

console.log(Day2(arr));