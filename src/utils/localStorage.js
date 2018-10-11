
export function saveSession(session) {
  if (typeof(Storage) !== 'undefined') {
      // Code for localStorage/sessionStorage.
    localStorage.setItem('session', JSON.stringify(session));
  } else {
      // Sorry! No Web Storage support..
  }
  return Promise.resolve()
}

export function removeSession(session) {
  if (typeof(Storage) !== 'undefined') {
      // Code for localStorage/sessionStorage.
    localStorage.removeItem('session');
  } else {
      // Sorry! No Web Storage support..
  }
  return Promise.resolve()
}

export function getSession() {
  if (typeof(Storage) !== 'undefined') {
      // Code for localStorage/sessionStorage.
    return Promise.resolve(localStorage.getItem('session'))
  } else {
      // Sorry! No Web Storage support..
    return Promise.resolve()
  }
}
