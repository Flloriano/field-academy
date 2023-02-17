import { stringify } from 'csv-stringify';
const run = () => {
    const output = stringify([
        { test: 'oloco', test2: 'a'},
        { test: 'oloc2' },
    ], {
        header: true,
        objectMode: true
    });
    console.log(output);
}
run();
