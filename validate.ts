import Formify from ".";

const form = new Formify({
    name: {
        minlen: 5,
        maxLen: 15,
        type: 'String',
    },
    age: {
        minlen: 1,
        maxLen: 3,
        type: 'Number',
    }
});

console.log(form.validate('name', 'Guilhermdsfsfsffse'));
console.log(form.validate('age', 15));