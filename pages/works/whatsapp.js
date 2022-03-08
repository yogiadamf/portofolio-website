import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="WhatsApp">
    <Container>
      <Title>
        WhatsApp <Badge>2022</Badge>
      </Title>
      <P>
        A website chat WhatsApp without save phone number using link api WhatsApp.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://yogiadamf.github.io/wa">
          https://yogiadamf.github.io/wa <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/wa.png" alt="WhatsApp" />
      <WorkImage src="/images/works/wa1.png" alt="WhatsApp" />
      <WorkImage src="/images/works/wa2.png" alt="WhatsApp" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
