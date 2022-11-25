import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function App({ Component, pageProps }: AppProps) {

  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
        
  );
}