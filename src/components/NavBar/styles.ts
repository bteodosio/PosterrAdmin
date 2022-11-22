import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarIconDiv = styled.div`
  background: none;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`
export const MenuBarsIconsLink = styled(Link)`
  padding-left: 10%;
  font-size: 1.5rem;
  background: none;
  display: flex;
  align-items: center;
`
export const MenuCloseLink = styled(Link)`
  padding-left: 80%;
  font-size: 2rem;
  background: none;
`

export const MenuNav = styled.nav`
  background-color: ${props => props.theme.colors.background};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${props => (!(props.hidden ?? false) ? '-100%' : '0')};
  transition: ${props => (!(props.hidden ?? false) ? '850ms' : '350ms')}; ;
`

export const MenuItemText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`

export const MenuItemTextLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  border-radius: 4px;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`
export const MenuItems = styled.ul`
  width: 100%;
`
export const NavBarClose = styled.li`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
`
export const ItemTitleSpan = styled.span`
  margin-left: 16px;
`
