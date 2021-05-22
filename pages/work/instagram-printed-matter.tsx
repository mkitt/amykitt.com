import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function InstagramPrintedMatterPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Instagram</h1>
      <h2 className={styles.h2}>Printed Matter</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Instagram Winter Brochure 1"
          src="instagram-printed-matter-brochure-winter-1.jpg"
        />
        <WorkImage
          alt="Instagram Winter Brochure 2"
          src="instagram-printed-matter-brochure-winter-2.jpg"
        />
        <WorkImage
          alt="Instagram Winter Brochure 3"
          src="instagram-printed-matter-brochure-winter-3.jpg"
        />
        <WorkImage
          alt="Instagram Spring Brochure 1"
          src="instagram-printed-matter-brochure-spring-1.jpg"
        />
        <WorkImage
          alt="Instagram Spring Brochure 2"
          src="instagram-printed-matter-brochure-spring-2.jpg"
        />
        <WorkImage
          alt="Instagram Note Card 1"
          src="instagram-printed-matter-notecard-1.jpg"
        />
        <WorkImage
          alt="Instagram Note Card 2"
          src="instagram-printed-matter-notecard-2.jpg"
        />
        <p className={styles.p}>
          Print materials for Instagram utilized by the Global Marketing Team.
        </p>
        <p className={styles.p}>2016-2017</p>
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('instagram-printed-matter', [
        'branding',
        'collateral',
        'printed matter',
      ]),
      label: 'Instagram Printed Matter',
      tileSize: 'xs',
    },
  }
}

export default InstagramPrintedMatterPage
