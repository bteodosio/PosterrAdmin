import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoCarSportSharp, IoAirplaneSharp } from 'react-icons/io5'
import { FaMotorcycle } from 'react-icons/fa'
import { GiMaterialsScience } from 'react-icons/gi'
import { menuElement } from './components/NavBar/NavBar'

export const SideBarData: menuElement[] = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />
  },
  {
    title: 'Cars',
    path: '/cars',
    icon: <IoCarSportSharp />
  },
  {
    title: 'Bikes',
    path: '/bikes',
    icon: <FaMotorcycle />
  },
  {
    title: 'Planes',
    path: '/planes',
    icon: <IoAirplaneSharp />
  },
  {
    title: 'Science',
    path: '/science',
    icon: <GiMaterialsScience />
  }
]
