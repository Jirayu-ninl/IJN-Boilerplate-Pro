/* eslint-disable indent */
import React, { useMemo, useReducer } from 'react'

interface State {
  Darkmode: boolean
}

type Action = { type: 'TOGGLE_THEME'; Darkmode: boolean } | { type: 'default' }

//Define Conext

const initialState = {
  Darkmode: true,
}

const GlobalDispatchContext = React.createContext<State | any>(initialState)
const GlobalStateContext = React.createContext<State | any>(initialState)

//Reducer
const globalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        Darkmode: action.Darkmode,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

//Provider
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch]: any = useReducer(globalReducer, initialState)

  const value = useMemo(
    () => ({
      ...state,
    }),
    [state]
  )

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => React.useContext(GlobalStateContext)
export const useGlobalDispatchContext = () =>
  React.useContext(GlobalDispatchContext)
