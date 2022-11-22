import React, { useContext } from 'react'
import { Container } from './styles'
import { ThemeContext } from '../../styles/themes/ThemeContext'
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch'
import { NavBar } from '../NavBar/NavBar'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Container>
      <NavBar />
      <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
    </Container>
  )
}
