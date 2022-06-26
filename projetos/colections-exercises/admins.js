function getAdmins(map) {
  let admins = []

  for ([key, value] of map) {
    if (value === 'admin') {
      admins.push(key)
    }
  }

  return admins
}

const usersMap = new Map()
usersMap.set('Ismael', 'sudo')
usersMap.set('Larissa', 'support')
usersMap.set('Gabriel', 'support')
usersMap.set('Neide', 'admin')
usersMap.set('Josivan', 'admin')

console.log(getAdmins(usersMap))
