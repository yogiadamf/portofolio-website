/* eslint-disable @next/next/inline-script-id */
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import './Resume/Resume.css'
import './Contact/ContactMe.css'
import Script from 'next/script'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}://www.googletagmanager.com/gtag/js?id=G-X1Z2S1J58Z`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});  
        `}
      </Script>
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
      
    </>
  )
}

export default Website
