import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function RevoProductBrochurePage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Revo</h1>
      <h2 className={styles.h2}>Product Brochure</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Revo Product Brochure 1"
          src="revo-product-brochure-1.jpg"
        />
        <WorkImage
          alt="Revo Product Brochure 2"
          src="revo-product-brochure-2.jpg"
        />
        <WorkImage
          alt="Revo Product Brochure Rx"
          src="revo-product-brochure-rx.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('revo-brochure', [
        'branding',
        'identity',
        'print campaign',
        'printed matter',
      ]),
      label: 'Revo Product Brochure',
      tileSize: 'sm',
    },
  }
}

export default RevoProductBrochurePage
