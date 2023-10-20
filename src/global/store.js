import { useState, useEffect } from 'react'

let globalState = {}
let listeners = []
let actions = {}

const dispatch = (actionIdentifier, payload) => {
  const newState = actions[actionIdentifier](globalState, payload)
  globalState = { ...globalState, ...newState }

  for (const listener of listeners) {
    listener(globalState)
  }
}

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }
  }
  actions = { ...actions, ...userActions }
}

export const useStore = () => {
  const setState = useState(globalState)[1]

  useEffect(() => {
    listeners.push(setState)

    return () => {
      listeners = listeners.filter((li) => li !== setState)
    }
  }, [setState])

  return [globalState, dispatch]
}
