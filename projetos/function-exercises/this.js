const pessoa1 = {
  nome: 'Ismael',
  idade: 19
}

const pessoa2 = {
  nome: 'Josefa',
  idade: 50
}

const pessoa3 = {
  nome: 'Larissa',
  idade: 18
}

function calculaIdade(anos) {
  return `Daqui ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}


console.log(calculaIdade.apply(pessoa3, [50]))
console.log(calculaIdade.call(pessoa2, 25))
console.log(calculaIdade.apply(pessoa1, [50]))