import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import { IconContext } from 'react-icons'
import { ThemeContext } from '../../styles/themes/ThemeContext'
import {
  NavBarIconDiv,
  MenuBarsIconsLink,
  MenuCloseLink,
  MenuNav,
  MenuItemText,
  MenuItemTextLink,
  MenuItems,
  NavBarClose,
  ItemTitleSpan
} from './styles'

export interface menuElement {
  title: string
  path: string
  icon: JSX.Element
}

interface props {
  menuItems: menuElement[]
}

export const NavBar: React.FC<props> = ({ menuItems }) => {
  const { theme } = useContext(ThemeContext)
  const [isSideBarActive, setIsSideBarActive] = React.useState(false)

  const showSideBar = (): void =>
    setIsSideBarActive(previousState => !previousState)

  return (
    <>
      <IconContext.Provider value={{ color: theme.colors.text }}>
        <NavBarIconDiv>
          <MenuBarsIconsLink to="#">
            <FaBars onClick={showSideBar} />
          </MenuBarsIconsLink>
        </NavBarIconDiv>
        <MenuNav hidden={isSideBarActive}>
          <MenuItems onClick={showSideBar}>
            <NavBarClose>
              <MenuCloseLink to="#">
                <AiOutlineClose className="close-icon" />
              </MenuCloseLink>
            </NavBarClose>
            {menuItems.map((item, index) => {
              return (
                <MenuItemText key={index}>
                  <MenuItemTextLink to={item.path}>
                    {item.icon}
                    <ItemTitleSpan>{item.title}</ItemTitleSpan>
                  </MenuItemTextLink>
                </MenuItemText>
              )
            })}
          </MenuItems>
        </MenuNav>
      </IconContext.Provider>
    </>
  )
}
