// Exo 1


export function sum(...args) {
    if (args.length === 0) {
        throw Error('At least one number is expected');
    }
    return args.reduce((total, current) => total + current);
}