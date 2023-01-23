import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="flex text-md">
            <p>MIT&nbsp;2023&thinsp;©&thinsp;</p>
            <Link href="https://github.com/chenelias/" className="underline underline-offset-4 decoration-dotted">
                EliasChen
            </Link>
        </div>
    )
}

export default Footer
