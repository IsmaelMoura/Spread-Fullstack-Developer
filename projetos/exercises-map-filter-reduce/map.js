/**
 * map utilizando this
 */

const apple = {
   value: 2,
};

const orange = {
   value: 3,
};

function mapComThis(arr, thisArg) {
   return arr.map(function (item) {
      return item * this.value;
   }, thisArg);
}

const nums = [1, 2];

console.log('this -> apple', mapComThis(nums, apple));
console.log('this -> orange', mapComThis(nums, orange));
// this -> apple [ 2, 4 ]
// this -> orange [ 3, 6 ]

/**
 * map sem usar o this
 */

function mapSemThis(arr) {
   return arr.map(function (item) {
      return item * 2;
   });
}

const numbers = [2, 4, 6, 8, 10];

console.log(mapSemThis(numbers));
// [ 4, 8, 12, 16, 20 ]
