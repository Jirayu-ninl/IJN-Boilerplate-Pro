import { useEffect } from 'react'
import { globalStyles } from 'views/theme/css/global'
import { useGlobalStateContext } from '@contexts/globalContext'

// IJN Components
import IJNconsole from './components/IJNconsole'

export default function IJNlayout({ children }) {
  const { Darkmode } = useGlobalStateContext()

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
