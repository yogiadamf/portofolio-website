import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbReview from '../public/images/contents/review.png'
import thumbReviewJurnal from '../public/images/contents/review-jurnal.jpg'
import thumbPenjelasan from '../public/images/contents/penjelasan.jpg'
import thumbSimulasi from '../public/images/contents/simulasi.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Review Jurnal Information Retrieval"
            thumbnail={thumbReview}
            href="https://youtu.be/rNZOWIvARS4"
          />
          <GridItem
            title="Review Jurnal Analisis Sentimen"
            thumbnail={thumbReviewJurnal}
            href="https://youtu.be/dhBdYCaKZyg"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Penjelasan Edgar F. Codd's 12 Rules"
            thumbnail={thumbPenjelasan}
            href="https://youtu.be/mX0jMnlDoEo"
          />
          <GridItem
            title="Cara Membuat Simulasi Model Matematika berbasis GUI Menggunakan Aplikasi Scilab"
            thumbnail={thumbSimulasi}
            href="https://youtu.be/awELrznvhmk"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
