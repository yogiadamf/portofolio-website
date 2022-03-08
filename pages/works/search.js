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
  <Layout title="Search Repository">
    <Container>
      <Title>
        Search RepositorySearch Repository<Badge>2019</Badge>
      </Title>
      <P>
        The thesis title search system using the boolean retrieval method with
        the python programming language
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/yogiadamf/Sistem-Temu-Kembali-Pencarian-Judul-Skripsi-dengan-Boolean-Retrieval">
          https://github.com/yogiadamf/Sistem-Temu-Kembali-Pencarian-Judul-Skripsi-dengan-Boolean-Retrieval <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Programminng Language</Meta>
          <span>Python</span>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/search.png" alt="search" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
