# Build a guestbook with NextAuth and Supabase

### Stack

-   Next.js as a framework
-   NextAuth (Authentication for Next.js)
-   Supabase (guestbook database)
-   Tailwindcss for styling
-   react-icon as a icon provider

### Supabase

Install supabase

```bash
//npm
npm install @supabase/supabase-js
//yarn
yarn add @supabase/supabase-js
```

SignUp a account on https://supabase.com\
Create a new project (mine: `Guestbookdemo`)\
Create a table (mine: `guestbookdata`)\
Create `supabaseClient.js` in `/lib`

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
  const [guestbookData,setGuestbookData] = React.useState(null)

  return (

  )
}
export default index
```
