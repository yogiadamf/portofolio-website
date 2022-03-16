import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import RoomLoader from '../room-loader'
import Footer from '../footer'

const Room = dynamic(() => import('../room'), {
  ssr: false,
  loading: () => <RoomLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yogi Portofolio" />
        <meta name="author" content="Yogi Adam Firdaus" />
        <meta name="author" content="Portofolio" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yogiadamf19" />
        <meta name="twitter:creator" content="@yogiadamf19" />
        <meta name="twitter:image" content="/me.jpg" />
        <meta property="og:site_name" content="Yogi Adam Firdaus Portofolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/me.jpg" />
        <title>Yogi | Portofolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Room />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
