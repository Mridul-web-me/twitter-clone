import Layout from '@/components/Layout'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import LoginModals from '@/components/modals/LoginModals'
import RegisterModals from '@/components/modals/RegistrationModals'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
    <LoginModals/>
    <RegisterModals/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}
