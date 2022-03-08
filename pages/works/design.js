import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
 
  Heading,
  Center,
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="UI & UX My UISI">
    <Container>
      <Title>
      Design UI & UX My UISI <Badge>2019</Badge>
      </Title>
      <P>
      user interface and user experience design for My UISI application development
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/yogiadamf/mobile">
          https://github.com/yogiadamf/mobile <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Adobe XD</span>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      

      
      <WorkImage src="/images/works/ui.png" alt="ui" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
