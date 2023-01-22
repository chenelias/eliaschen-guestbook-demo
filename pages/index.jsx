import React from 'react'
import Head from 'next/head'
import { BsGithub } from 'react-icons/bs'
import { supabase } from '../lib/supabaseClient'

const index = () => {
    const [guestbookData, setGuestbookData] = React.useState(null)
    const messageInput = React.useRef()
    const fetchguestbook = async () => {
        const { data, error } = await supabase.from('guestbookdata').select()
        if (error) {
            alert('error to fetch guestbook data')
            setGuestbookData(error)
        }
        if (data) {
            setGuestbookData(data)
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
            <div className="">
                <ul>
                    {guestbookData&&
                        guestbookData
                            .sort((a, b) => (a.id < b.id ? 1 : -1))
                            .map((data) => (
                                <li key={data.id}>
                                    <p>{data.message}</p>
                                    <p>{data.username}</p>
                                </li>
                            ))}
                </ul>
            </div>
        </main>
    )
}

export default index
