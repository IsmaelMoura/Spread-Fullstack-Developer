/**
 * primeira atividade
 * @param {Array} arr
 * @returns
 */
function sumNumbers(arr) {
   return arr.reduce(function (prev, current) {
      console.log({ prev });
      console.log({ current });
      return prev + current;
   });
}

const numbers = [1, 2];

console.log(sumNumbers(numbers));

const list = [
   {
      name: 'São em pó',
      preco: 30,
   },
   {
      name: 'cereal',
      preco: 12,
   },
   {
      name: 'toalha',
      preco: 30,
   },
];

const saldoDisponivel = 100;

/**
 * Segunda atividade
 * @param {Number} saldoDisponivel
 * @param {Array} list
 * @returns
 */
function calculaSaldo(saldoDisponivel, list) {
   return list.reduce(function (prev, current, index) {
      console.log('rodada ', index + 1);
      console.log({ prev });
      console.log({ current });
      return prev - current.preco;
   }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, list));
