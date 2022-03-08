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
  <Layout title="Cita-Citaku">
    <Container>
      <Title>
        App Cita-Citaku <Badge>2020</Badge>
      </Title>
      <P>
        My ideals application is an application for the introduction of various
        kinds of ideals
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/yogiadamf/App-Cita-citaku">
          https://github.com/yogiadamf/App-Cita-citaku <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>Flutter</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/cita.png" alt="cita" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
