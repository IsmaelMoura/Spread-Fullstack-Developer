function finalAnswer(num1, num2) {
  if (num1 || num2 === undefined || null) {
    return 'Defina números válidos'
  }

  const firstPhrase = createFirstPhrase(num1, num2)
  const secondPhrase = createSecondPhrase(num1, num2)

  return `${firstPhrase} ${secondPhrase}`
}

function createFirstPhrase(num1, num2) {
  let yesOrNot = 'não'

  if (num1 == num2) {
    yesOrNot = ''
  }

  return `Os número ${num1} e ${num2} ${yesOrNot} são iguais.`
}

function createSecondPhrase(num1, num2) {
  const sum = num1 + num2
  let compare10
  let compare20

  if (sum > 10) {
    compare10 = 'maior que'
  } else {
    compare10 = 'menor que'
  }

  if (sum > 20) {
    compare20 = 'maior que'
  } else {
    compare20 = 'menor que'
  }

  if (sum === 10) {
    compare10 = 'igual a'
  }

  if (sum === 20) {
    compare20 = 'igual a'
  }

  return `A soma é ${sum}, que é ${compare10} 10 e ${compare20} 20.`
}

console.log(finalAnswer(1,3))
