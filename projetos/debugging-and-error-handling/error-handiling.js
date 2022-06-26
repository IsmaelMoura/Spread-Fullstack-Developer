function validaParametros(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if (typeof arr !== 'object')
      throw new TypeError('O array precisa ser do tipo object');

    if (typeof num !== 'number')
      throw new TypeError('O parâmetro num precisa ser do tipo number ');

    if (arr.length !== num)
      throw new RangeError('O tamanho do array é diferente do número enviado');

    return arr;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Esse erro é um ReferenceError');
      console.log(error.message);
    } else if (error instanceof TypeError) {
      console.log('Esse erro é um TypeError');
      console.log(error.message);
    } else if (error instanceof RangeError) {
      console.log('Esse erro é um RangeError');
      console.log(error.message);
    } else {
      console.log('Tipo de erro não esperado: ' + error);
    }
  }
}

console.log(validaParametros([1,2,3,4,5], 5));
