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
  <Layout title="Forecast Rice Price">
    <Container>
      <Title>
        Forecasting Rice Price <Badge>2022</Badge>
      </Title>
      <P>
        Forecasting rice prices in the western part of Indonesia using a panel
        data regression approach.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://peramalanhargaberas.my.id/">
          https://peramalanhargaberas.my.id/ <ExternalLinkIcon mx="2px" />
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
      <WorkImage src="/images/works/forecast.png" alt="forecast" />
      <WorkImage src="/images/works/forecast1.png" alt="forecast" />
      <WorkImage src="/images/works/forecast2.png" alt="forecast" />
      <WorkImage src="/images/works/forecast3.png" alt="forecast" />
      <WorkImage src="/images/works/forecast4.png" alt="forecast" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
