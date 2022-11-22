import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPaper, IoMdPeople } from 'react-icons/io'
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIosPaper />
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaCartPlus />
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaEnvelopeOpenText />
  }
]
