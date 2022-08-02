

import Link from 'next/link'
import React, { useEffect } from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

const Navbar = () => {


    return (
        <nav className={styles.menu}>
            {
                menuItems.map(({text,href})=> {
                    return <ActiveLink key={href} text={text} href={href}/>

                })
            }



            {/* <ActiveLink text="Home" href='/'/>
            <ActiveLink text="About" href='/about'/>
            <ActiveLink text="Contact" href='/contact'/>
            <ActiveLink text='pricing' href='/pricing'/> */}
        </nav>
    )
}

export default Navbar