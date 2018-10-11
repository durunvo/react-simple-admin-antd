import { push, replace } from 'react-router-redux'

export const replaceToLogin = () => replace('/login')
export const replaceToError = () => replace('/error')
export const replaceToDashboard = () => replace('/dashboard')
export const replaceToProject = id => replace(`/project/${id}`)
export const replaceToProperty = id => replace(`/property/${id}`)
export const pushTo = pushTo => push(pushTo)
