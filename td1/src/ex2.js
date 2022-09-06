export function filter(array, condition) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
