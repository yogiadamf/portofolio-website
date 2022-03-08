import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Reservations">
    <Container>
      <Title>
        Web Reservation Caffe Sloor.in <Badge>2020</Badge>
      </Title>
      <P>
        A place and food reservation website for cafe sloor.in lamongan area
        with laravel framework.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/yogiadamf/Reservasi-tempat-caffe-sloor.in">
            https://github.com/yogiadamf/Reservasi-tempat-caffe-sloor.in{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Architecture</Meta>
          <span>Laravel, MySQL</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/sloorin.png" alt="sloorin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
