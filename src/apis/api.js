
function delay(ms = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

export function isAdmin(user) {
  return delay().then(() => {
    return user
  })
}

export function login(email, password) {
  return delay().then(() => {
    return {
      email: email,
      name: 'Admin 1',
    }
  })
}

export function logOut() {
  return delay().then(() => {
    return {
      email: null,
      name: null,
    }
  })
}
