import React, { useContext } from 'react'
import { Container } from './styles'
import { ThemeContext } from '../../styles/themes/ThemeContext'
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch'

interface props {
  children: React.ReactNode
}

export const Header: React.FC<props> = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Container>
      {children}
      <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
    </Container>
  )
}
