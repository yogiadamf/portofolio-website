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
  <Layout title="Traffic Sign Classifications">
    <Container>
      <Title>
      Traffic Sign Classifications <Badge>2019</Badge>
      </Title>
      <P>
      Implementation of deep learning in traffic sign classification with python programming language
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/yogiadamf/Klasisfikasi-Rambu-Lalu-Lintas-dengan-deep-Learning">
          https://github.com/yogiadamf/Klasisfikasi-Rambu-Lalu-Lintas-dengan-deep-Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Programminng</Meta>
          <span>Python</span>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <WorkImage src="/images/works/sign.png" alt="sign" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
