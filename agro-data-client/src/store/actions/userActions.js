import { beginApiCall, apiCallError } from './apiStatusActions'
import * as types from './actionTypes'
import * as authApi from '../../api/authApi'

export function apiTypeCallSuccess(callType, payload) {
  return { type: callType, payload }
}

export function loginSuccess(payload) {
  return { type: types.LOGIN_SUCCESS, payload }
}

export function registerSuccess(payload) {
  return { type: types.REGISTER_SUCCESS, payload }
}

export function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS }
}

export function login(credentials) {
  return function (dispatch) {
    dispatch(beginApiCall())
    return authApi
      .login(credentials)
      .then((data) => {
        dispatch(loginSuccess(data))
      })
      .catch((error) => {
        dispatch(apiCallError(error))
        throw error
      })
  }
}

export function register(dto) {
  return function (dispatch) {
    dispatch(beginApiCall())
    return authApi
      .register(dto)
      .then((data) => {
        dispatch(registerSuccess(data))
      })
      .catch((error) => {
        dispatch(apiCallError(error))
        throw error
      })
  }
}

export function logout() {
  return function (dispatch) {
    dispatch(beginApiCall())
    return authApi
      .logout()
      .then(() => {
        dispatch(logoutSuccess())
      })
      .catch((error) => {
        dispatch(apiCallError(error))
        throw error
      })
  }
}
