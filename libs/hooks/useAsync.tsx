import React, { useState, useEffect, useCallback } from 'react'

// Hook
export default function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(() => {
    setStatus('pending')
    setValue(null)
    setError(null)

    return asyncFunction()
      .then((response) => {
        setValue(response)
        setStatus('success')
      })
      .catch((error) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}

// *! Usage
function App() {
  const { execute, status, value, error } = useAsync(myFunction, false)

  return (
    <div>
      {status === 'idle' && <div>Start your journey by clicking a button</div>}
      {status === 'success' && <div>{value}</div>}
      {status === 'error' && <div>{error}</div>}
      <button onClick={execute} disabled={status === 'pending'}>
        {status !== 'pending' ? 'Click me' : 'Loading...'}
      </button>
    </div>
  )
}

// *? An async function for testing our hook.
// *? Will be successful 50% of the time.

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10
      rnd <= 5
        ? resolve('Submitted successfully 🙌')
        : reject('Oh no there was an error 😞')
    }, 2000)
  })
}
