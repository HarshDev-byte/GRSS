import '../styles/globals.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Load without SSR to avoid hydration mismatch on random positions
const RoamingCrafts = dynamic(() => import('../components/RoamingCrafts'), { ssr: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="IEEE GRSS SIES GST — GeoScience & Remote Sensing Society. Drones, Satellites, and AI systems." />
        <link rel="icon" href="/grss_logo.png" />
        <meta property="og:title" content="IEEE GRSS SIES GST" />
        <meta property="og:description" content="Advancing Earth observation with drones, satellites and AI systems." />
        <meta property="og:image" content="/grss_logo.png" />
        <title>IEEE GRSS SIES GST</title>
      </Head>
      <a href="#main" className="skip-link sr-only focus:not-sr-only">Skip to content</a>
      <div className="dark relative min-h-screen">
        <RoamingCrafts count={30} />
        <Component {...pageProps} />
      </div>
    </>
  )
}
