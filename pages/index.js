import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/you.png'
import thumbWa from '../public/images/wa.png'
import Image from 'next/image'
import Typical from 'react-typical'
import Resume from './Resume/Resume'
import ContactMe from './Contact/ContactMe'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Typical
          loop={Infinity}
          steps={[
            'Hello, I am Yogi Adam Firdaus',
            1000,
            'Front End Developer 💻',
            1000,
            'UI & UX Design 📱',
            1000,
            'React JS/Laravel Dev 🌐',
            1000
          ]}
        />
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yogi Adam Firdaus
          </Heading>
          <p>Front End Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I&apos;m a passionate frontend developer with a keen interest in crafting
          engaging user experiences. My journey in web development began with
          HTML, CSS, and vanilla JavaScript, but I quickly found myself drawn to
          modern frameworks like React. Leveraging its component-based
          architecture, I&apos;ve built dynamic and responsive interfaces that bring
          ideas to life.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <a href="cv.pdf" download="Yogi cv.pdf">
          <Heading as="h3" variant="section-title">
            Resume ➲
          </Heading>
        </a>
        <Resume />
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Intereset
        </Heading>
        <Paragraph>
          Listening to soothing music is something i can never compromise with,
          skimming through Spotifys pop songs charts is at times the best stress
          reliever that i can get my hands on.
        </Paragraph>
        <Paragraph>
          I like to challenge my reflexes a lot while competing in football
          games, push rank and having interactive gaming sessions excites me the
          most.
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/yogiadamf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                yogiadamf
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/yogi-adam-firdaus-9bb34415b/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Yogi Aadam Firdadus
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/yogiadamfirdaus/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                yogiadamfirdaus
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Post
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCTVffD73xkgiMx8pAL3TRmA/featured"
            title="Yogi Adam F"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://yogiadamf.github.io/wa"
            title="WhatsApp"
            thumbnail={thumbWa}
          >
            Chat Without Save Phone Number
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Another posts
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <ContactMe />
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
