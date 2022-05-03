import Formify from "formi-formify";

const form = new Formify({
    name: {
        maxLen: 15,
        minlen: 5,
        type: 'string',
    },
    age: {
        maxLen: 3,
        minlen: 1,
        type: 'number',
    },
});

console.log(form.validate('name', 'Guilherme'));
console.log(form.validate('age', 15));