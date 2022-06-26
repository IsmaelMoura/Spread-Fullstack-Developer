/**
 * filter sem o this
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(arr) {
   return arr.filter(function (item) {
      return item % 2 === 0;
   });
}

console.log(filterEvenNumbers(nums));

/**
 * filter com o this
 */

const users = [
   'Ismael de Sousa',
   'Gabriel de Sousa',
   'José Santos',
   'Roberto Ramires',
];
const lastNameAccepeted = {
   lastName: 'Sousa',
};

function filterLastName(arr) {
   return arr.filter(function (item) {
      return item.includes('Sousa');
   });
}

console.log(filterLastName(users));
