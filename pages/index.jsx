import React from 'react'
import Head from 'next/head'
import { BsGithub } from 'react-icons/bs'
import { supabase } from '../lib/supabaseClient.js'

const index = () => {
    const [guestbookData, setGuestbookData] = React.useState(null)
    const messageInput = React.useRef()

    const fetchguestbook = async () => {
        const { data, error } = await supabase.from('guestbook').select()
        if (data) {
            setGuestbookData(data)
            console.log(data)
        }
    }
    React.useEffect(() => {
        fetchguestbook()
    }, [])
    return (
        <main className="">
            <Head>
                <title>Guestbook demo - ElasChen</title>
            </Head>
            <div className={`p-2 mt-5 mb-6`}>
                <p className="text-xl font-bold">Sign in</p>
                <button className="drop-shadow-sm text-lg px-2 py-1 bg-zinc-600 hover:bg-slate-700 duration-100 mt-1 text-white rounded-md flex items-center">
                    <BsGithub />
                    &thinsp;Github
                </button>
            </div>
            <div className={`p-2 mt-5 mb-6`}>
                <input
                    ref={messageInput}
                    type="text"
                    placeholder="Your message..."
                    className="w-full py-1 px-2 text-lg rounded-md bg-neutral-100 ring-1 ring-blue-300 focus:ring-[3px] focus:outline-none duration-75"
                />
                <div className="flex mt-2">
                    <button
                        onClick={() => {
                            messageInput.current.value = ''
                        }}
                        className="drop-shadow-sm px-2 py-1 bg-blue-400 hover:bg-blue-500 duration-100 rounded-md mr-2 w-full text-lg"
                    >
                        Send it
                    </button>
                    <button className="drop-shadow-sm px-2 py-1 w-[120px] bg-zinc-300 hover:bg-zinc-400 duration-100 rounded-md text-lg">
                        Sign out
                    </button>
                </div>
            </div>
            <div className=" my-5">
                <ul>
                    {guestbookData &&
                        guestbookData
                            .sort((a, b) => (a.id < b.id ? 1 : -1))
                            .map((guestbookData) => (
                                <li key={guestbookData.id} className="hover:bg-neutral-400 p-3 rounded-md duration-100">
                                    <p className="text-md">{guestbookData.message}</p>
                                    <div className="flex text-xs">
                                        <p>{guestbookData.username}</p>&thinsp;<p>/</p>&thinsp;
                                        <p>
                                            {guestbookData.created_at.slice(0, 10)}&thinsp;at&thinsp;
                                            {guestbookData.created_at.slice(11, 19)}
                                        </p>
                                    </div>
                                </li>
                            ))}
                </ul>
            </div>
        </main>
    )
}

export default index
