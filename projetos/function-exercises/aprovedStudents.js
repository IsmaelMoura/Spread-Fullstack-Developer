const alunos = [
  {
    nome: 'Ismael',
    nota: 8,
    turma: '3L'
  },
  {
    nome: 'Larissa',
    nota: 8,
    turma: '3A'
  },
  {
    nome: 'Rafael',
    nota: 2,
    turma: '3A'
  }
]

function aprovarAlunos(alunos, media) {
  let alunosAprovados = []

  for (let i = 0; i < alunos.length; i++) {
    let {nota, nome} = alunos[i]
    if (nota >= media) {
      alunosAprovados.push(nome)
    }
  }

  return alunosAprovados
}

console.log(aprovarAlunos(alunos, 5))
// console.log(alunos[1].nome)
