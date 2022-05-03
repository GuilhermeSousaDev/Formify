# Formify
Formify Framework

# To install the package
npm install formi-formify

# How Use

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
