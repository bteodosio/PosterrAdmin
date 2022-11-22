import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { usePersistentState } from '../../hooks/usePersistentState'
import { light, dark } from './index'

export const ThemeContext = React.createContext({
  theme: light,
  toggleTheme: () => {}
})

interface props {
  children: React.ReactNode
}

export const ThemeContextProvider: React.FC<props> = ({ children }) => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>('theme', light)

  const toggleTheme = (): void => {
    setTheme(previousTheme => {
      return previousTheme.title === light.title ? dark : light
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
