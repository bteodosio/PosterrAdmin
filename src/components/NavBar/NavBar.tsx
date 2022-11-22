import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import { BrowserRouter as Router } from 'react-router-dom'
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

export const NavBar: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  const [isSideBarActive, setIsSideBarActive] = React.useState(false)

  const showSideBar = (): void =>
    setIsSideBarActive(previousState => !previousState)
  return (
    <>
      <IconContext.Provider value={{ color: theme.colors.text }}>
        <Router>
          <NavBarIconDiv>
            <MenuBarsIconsLink to="#">
              <FaBars onClick={showSideBar} />
            </MenuBarsIconsLink>
          </NavBarIconDiv>
          <MenuNav hidden={isSideBarActive}>
            <MenuItems>
              <NavBarClose onClick={showSideBar}>
                <MenuCloseLink to="#">
                  <AiOutlineClose className="close-icon" />
                </MenuCloseLink>
              </NavBarClose>
              {SideBarData.map((item, index) => {
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
        </Router>
      </IconContext.Provider>
    </>
  )
}
