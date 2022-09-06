export function map(array, condition) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(condition(array[i]));
    }
    return mappedArray;
}