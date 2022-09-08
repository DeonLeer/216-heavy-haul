import { useState, useCallback, useEffect } from 'react';
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/DesktopNav.module.css'

const options = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Services', href: '/services'},
    {name: 'Careers', href: '/careers'},
    {name: 'Contact', href: '/contact'},
]



function DestopNav(props) {

    const [isShrunk, setShrunk] = useState(false)

    useEffect(() => {
        const handler = () => {
        setShrunk((isShrunk) => {
            if (
            !isShrunk &&
            (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
            ) {
            return true;
            }

            if (
            isShrunk &&
            document.body.scrollTop < 100 &&
            document.documentElement.scrollTop < 100
            ) {
            return false;
            }

            return isShrunk;
        });
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div
            className={isShrunk ? styles.headerWrapperActive : styles.headerWrapperInactive}
        >
            <Image src="/216Logo.png" width={100} height={100}/>
            {options.map((option) => (

                <Link href={option.href}><a style={{color: (isShrunk ? '#191b4b' : 'white'), width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{option.name}</a></Link>

            ))}
        </div>
    )
}

export default DestopNav