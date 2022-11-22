import React from 'react'
import Switch from 'react-switch'
import { shade } from 'polished'
import { DefaultTheme } from 'styled-components'
import { SwitchLabel, SwitchSpan } from './styles'

interface props {
  theme: DefaultTheme
  toggleTheme: () => void
}

export const ThemeSwitch: React.FC<props> = ({ theme, toggleTheme }) => {
  return (
    <>
      <SwitchLabel>
        <SwitchSpan>Dark Mode</SwitchSpan>
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
      </SwitchLabel>
    </>
  )
}
