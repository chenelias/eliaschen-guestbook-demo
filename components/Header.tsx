import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="block md:flex items-center">
            <Link href={'/'} className="text-4xl font-extrabold">
                📓Guestbook Demo
            </Link>
            <div className="flex-1"></div>
            <div className="block mt-2 ml-1 md:mt-0">
                <Link
                    href={'https://github.com/chenelias/eliaschen-guestbook-demo'}
                    target="_blank"
                    className="flex font-bold items-center duration-100 p-1 hover:bg-slate-200 rounded-lg"
                >
                    GitHub Repo
                </Link>
                <Link
                    href={'https://www.eliaschen.dev/guestbook'}
                    target="_blank"
                    className="flex font-bold items-center duration-100 mt-1 p-1 hover:bg-slate-200 rounded-lg"
                >
                    My GuestBook
                </Link>
            </div>
        </header>
    )
}

export default Header
