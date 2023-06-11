import React from 'react'
import { Link } from 'react-router-dom'

function NavMobileMenu({menuState}) {

    const mobileMenu = menuState ? '' : 'hidden'
    const mobileAnim = menuState ? 'show' : ''

  return (
    <nav className={`nav-menu list-container absolute bg-white top-0 left-0  w-[50%] ${mobileMenu} desktop:hidden `}>
        <ul className={`${mobileAnim} list text-[1.125rem] font-kum h-screen font-bold flex flex-col gap-[1.25em] pl-[1.5em] pt-[5.75em] `}>
        <li className='list-item'><Link to="#">Collections</Link></li>
        <li className='list-item'><Link to="#">Men</Link></li>
        <li className='list-item'><Link to="#">Woman</Link></li>
        <li className='list-item'><Link to="#">About</Link></li>
        <li className='list-item'><Link to="#">Contact</Link></li>   
        </ul>
    </nav>
  )
}

export default NavMobileMenu