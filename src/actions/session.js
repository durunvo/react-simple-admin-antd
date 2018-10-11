import * as Constant from 'actions/constants'

export const setSession = session => ({
  type: Constant.SET_SESSION,
  session
})

export const logIn = (email, password) => ({
  type: Constant.LOGIN,
  email,
  password
})

export const logOut = () => ({
  type: Constant.LOGOUT,
})
