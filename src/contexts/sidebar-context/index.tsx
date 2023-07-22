'use client'

import React, {ReactNode, useContext, useState, createContext} from 'react'
import { ISidebarContext } from './sidebar-context.types'

type Props = {
    children: ReactNode
}


// const MenuContext = createContext<IMenuContext | null>(null)
const MenuContext = createContext({} as ISidebarContext)

export function useSidebar() {
    return useContext(MenuContext)
}

export default function MenuProvider({children}: Props) {
  const [mobileMenu, setMobileMenu] = useState(false) 

  // Toggle mobile menu
   const openMenu = () => setMobileMenu(true)
   const closeMenu = () => setMobileMenu(false)

  const value = {
    openMenu,
    closeMenu,
    mobileMenu,
  }

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}