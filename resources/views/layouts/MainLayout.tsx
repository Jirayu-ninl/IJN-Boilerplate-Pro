import { useEffect } from 'react'
import { globalStyles } from 'views/theme/css/global'
import { UI } from '@store'

// IJN Components
import IJNconsole from './components/IJNconsole'

export default function IJNlayout({ children }) {
  const Darkmode = UI((state) => state.dark)

  useEffect(() => {
    console.log(IJNconsole)
  }, [])

  return (
    <>
      {globalStyles(Darkmode)}
      {children}
    </>
  )
}
