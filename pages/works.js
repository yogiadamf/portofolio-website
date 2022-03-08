import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWa from '../public/images/wa.png'
import thumbSloor from '../public/images/works/sloorin.png'
import thumbForcast from '../public/images/works/forecast.png'
import thumbCita from '../public/images/works/cita.png'
import thumbSearch from '../public/images/works/search.png'
import thumbTraffic from '../public/images/works/sign.png'
import thumbUi from '../public/images/works/ui.png'
import thumbPersonal from '../public/images/works/personal.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="whatsapp" title="WhatsApp" thumbnail={thumbWa}>
            Chat WhatsApp Without Save Phone Number
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="forecast"
            title="Forecasting Rice Price"
            thumbnail={thumbForcast}
          >
            Forecasting Rice Price Using Panel Data Regression
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="reservation"
            title="Web Reservation Sloor.in"
            thumbnail={thumbSloor}
          >
            Place and Food Reservation Website
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="personal"
            thumbnail={thumbPersonal}
            title="Personal Portofolio"
          >
            Peronal Portofolio Website Using React JS
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.5}>
          <WorkGridItem
            id="citacita"
            thumbnail={thumbCita}
            title="App Cita-Citaku"
          >
            Application for the introduction of various kinds of ideals
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="search"
            thumbnail={thumbSearch}
            title="Search Repository"
          >
            The thesis title search system using the boolean retrieval
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="traffic"
            thumbnail={thumbTraffic}
            title="Traffic Sign Classiffication"
          >
            Implementation of deep learning in traffic sign classification
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="design"
            thumbnail={thumbUi}
            title="Design Ui & UX My UISI"
          >
            Design for My UISI application development
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
