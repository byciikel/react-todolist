import {
  ADD_TODO
} from './types'

export const addTodo = (form) => {
  return {
    type: ADD_TODO,
    payload: form,
  }
}