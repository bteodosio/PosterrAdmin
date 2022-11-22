import { useEffect, useState, Dispatch, SetStateAction } from 'react'

export function usePersistentState<S>(
  key: string,
  initialValue: any
): [S, Dispatch<SetStateAction<S>>] {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue != null) {
      return JSON.parse(storageValue)
    }

    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
