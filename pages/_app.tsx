import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="mx-auto max-w-4xl md:px-20 px-5 py-5">
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp
