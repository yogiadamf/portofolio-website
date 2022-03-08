import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Personal">
    <Container>
      <Title>
        Personal Portofolio <Badge>2020</Badge>
      </Title>
      <P>
        My personal website portofolio include about me, resume, work, and contact me 
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://vigilant-pare-3949d4.netlify.app/">
          https://vigilant-pare-3949d4.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>React JS</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/personal1.png" alt="personal" />
      <WorkImage src="/images/works/personal2.png" alt="personal" />
      <WorkImage src="/images/works/personal3.png" alt="personal" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
