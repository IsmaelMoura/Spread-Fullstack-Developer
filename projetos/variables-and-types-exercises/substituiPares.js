function substituiPares(array) {
  if (!array) {
    return 'Adicione um array válido!'
  } else if (array.length === 0) {
    return -1
  } 

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(`Trocando ${array[i]} por 0...`)
      array[i] = 0
    }
  }

  return array
}


let array = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituiPares(array))
