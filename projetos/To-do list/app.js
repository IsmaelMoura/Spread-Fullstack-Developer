'use strict'

// let database = []

const getLocalStorage = () => JSON.parse(localStorage.getItem('todoList')) ?? []
const setLocalStorage = database => localStorage.setItem('todoList', JSON.stringify(database))

const createItem = (task, status = '', index) => {
  const item = document.createElement('label')
  item.classList.add('todo__item')
  item.innerHTML = `
  <input type="checkbox" ${status} data-index=${index}>
  <div>${task}</div>
  <input type="button" value="X" data-index=${index}>
  `

  document.getElementById('todoList').appendChild(item)
}

const cleanTasks = () => {
  const todoList = document.getElementById('todoList')

  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}

const refreshScreen = () => {
  const database = getLocalStorage()
  cleanTasks()
  database.forEach((item, index) =>
    createItem(item.tarefa, item.status, index)
  )
}

const insertItem = evento => {
  const key = evento.key
  const taskText = evento.target.value

  if (key === 'Enter') {
    const database = getLocalStorage()
    database.push({ tarefa: taskText, status: '' })

    setLocalStorage(database)
    refreshScreen()
    evento.target.value = ''
  }
}

const updateItem = index => {
  const database = getLocalStorage()

  database[index].status = database[index].status === '' ? 'checked' : ''
  setLocalStorage(database)

  refreshScreen()
}

const deleteItem = index => {
  const database = getLocalStorage()

  database.splice(index, 1)
  setLocalStorage(database)
  refreshScreen()
}

const clickItem = evento => {
  const elemento = evento.target

  if (elemento.type === 'button') {
    const index = elemento.dataset.index
    deleteItem(index)
  } else if (elemento.type === 'checkbox') {
    const index = elemento.dataset.index
    updateItem(index)
  }
}

document.getElementById('newItem').addEventListener('keypress', insertItem)
document.getElementById('todoList').addEventListener('click', clickItem)

refreshScreen()
