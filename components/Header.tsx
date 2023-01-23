import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <Link href={'/'} className="text-4xl font-extrabold">
                📓Guestbook demo
            </Link>
        </header>
    )
}

export default Header
