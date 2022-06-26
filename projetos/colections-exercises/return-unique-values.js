function uniqueElements(arr) {
  let unique = new Set(arr)
  return [...unique]
}

const numbersArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(uniqueElements(numbersArray))