import NavigationBar from '@/components/navigationbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='mx-20  font-[Ambit]'>
    <NavigationBar/>
     <Component {...pageProps} />
  </div>
}
