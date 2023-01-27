# Build a guestbook with NextAuth and Supabase
### Stack

-   Next.js as a framework
-   NextAuth (Authentication for Next.js)
-   Supabase (guestbook database)

## Supabase

### What is supabase?

Supabase is an open source Firebase alternative providing all the backend features you need to build a product and offer user more simple UI then Firebase.

Install supabase
```bash
# npm
npm install @supabase/supabase-js
# yarn
yarn add @supabase/supabase-js
```

Sign up an account on https://supabase.com, create a new project (mine: `Guestbookdemo`).\
Create a table (mine: `guestbookdata`).

> Remember to disable RLS(Row Level Security) for table

![supabase-table-create](inkdrop://file:oUV0GN5sm)

Create `supabaseClient.js` in `/lib` .

```js
// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('<project_url>', '<anon_public>')
```

Getting data from supabase data

```js
// pages/index.jsx
import React from 'react'
import { supabase } from '../lib/supabaseClient'

const index = () => {
    const [guestbookData, setGuestbookData] = React.useState(null)
    // fetch supabase table data
    const fetchguestbook = async () => {
        const { data, error } = await supabase.from('guestbook').select()
        if (data) {
            setGuestbookData(data)
            console.log(data)
        }
    }
    return (
        <div>
            <ul>{guestbookData && guestbookData.map((data) => <li>{data.message}</li>)}</ul>
        </div>
    )
}
export default index
```

Upload table data to supabase

```js
// pages/index.jsx
// ...
const uploaddata = async (e) => {
    let { data } = await supabase.from('guestbook').insert([
        {
            message: '<your message>',
            username: '<your username>',
            email: '<your email>',
        },
    ])
    fetchguestbook()
}
// ...
```

Remove table data from supabase

```jsx
// pages/index.jsx
// ...
const removedata = async (removeid) => {
    // removeid = table item you want to remove
    const { data } = await supabase.from('guestbook').delete().eq('id', removeid)
    fetchguestbook()
}
// ...
```

## NextAuth

Install NextAuth

```bash
# npm
npm install next-auth
# yarn
yarn add next-auth
```

To add NextAuth.js to a project create a file called [...nextauth].js in pages/api/auth

> All provider set up documentation of NextAuth on https://next-auth.js.org/providers/

```js
// pages/api/auth/[...nextauth].js
// Example for github provider
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)
```

Add NextAuth login in pages

```jsx
// ...
import { useSession, signIn, signOut } from 'next-auth/react'

const index = () => {
    const { data: session } = useSession()

    return(
      // ...
      <button onClick={()=>signIn('Login provider')}>Sign in</button>
      <button onClcik={()=>signOut()} >Sign out</button>
      // ...
    )
}
```

## Conclusion
Supabase and NextAuth are both a perfect choose for beginners who want to learn basic database or building a simple auth login application.

Guestbook demo: https://eliaschen-guestbook-demo.vercel.app \
Guestbook demo (github repository): https://github.com/chenelias/eliaschen-guestbook-demo \
My Guestbook: https://eliaschen.dev/guestbook

⚡Thanks for reading, see you in the next blog.