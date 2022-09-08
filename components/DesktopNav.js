import { useState, useCallback, useEffect } from 'react';
import * as React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const options = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Services', href: '/services'},
    {name: 'Careers', href: '/careers'},
    {name: 'Contact', href: '/contact'},
]

function DestopNav(props) {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: 'white',
                position: 'fixed',
                top: 0,
                paddingTop: '20px',
                paddingBottom: '10px',
                zIndex: 10
            }}
        >
            <Image src="/216Logo.png" width={100} height={100}/>
            {options.map((option) => (

                <Link href={option.href}><a style={{width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{option.name}</a></Link>

            ))}
        </div>
    )
}

export default DestopNav