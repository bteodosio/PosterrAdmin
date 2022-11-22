import React from 'react'
import Switch from 'react-switch'
import { shade } from 'polished'
import { DefaultTheme } from 'styled-components'

interface props {
  theme: DefaultTheme
  toggleTheme: () => void
}

export const ThemeSwitch: React.FC<props> = ({ theme, toggleTheme }) => {
  return (
    <>
      <label style={{ display: 'flex', justifyContent: 'center' }}>
        <span>Dark Mode</span>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={15}
          onColor={theme.colors.secondary}
          offColor={shade(0.2, theme.colors.primary)}
        />
      </label>
    </>
  )
}
