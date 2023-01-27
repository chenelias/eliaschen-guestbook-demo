# Build a guestbook with NextAuth and Supabase

### Stack

-   Next.js as a framework
-   NextAuth (Authentication for Next.js)
-   Supabase (guestbook database)

### Supabase

Install supabase

```bash
# npm
npm install @supabase/supabase-js
# yarn
yarn add @supabase/supabase-js
```

Sign up an account on https://supabase.com, create a new project (mine: `Guestbookdemo`).\
Create a table (mine: `guestbookdata`).

![img](/public/supabase-table-create.png)

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

### NextAuth
Install NextAuth
```bash
# npm
npm install next-auth
# yarn
yarn add next-auth
```