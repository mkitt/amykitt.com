import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function FactoryBrandBookV11Page(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Factory Design Labs</h1>
      <h2 className={styles.h2}>Brand Book, V11</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Factory Brand Book V11 1"
          src="factory-brand-book-v11-1.jpg"
        />
        <WorkImage
          alt="Factory Brand Book V11 2"
          src="factory-brand-book-v11-2.jpg"
        />
        <WorkImage
          alt="Factory Brand Book V11 3"
          src="factory-brand-book-v11-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('factory-brand-book-v11', [
        'art',
        'branding',
        'package design',
      ]),
      label: 'Factory Design Labs Brand Book V11',
      tileSize: 'md',
    },
  }
}

export default FactoryBrandBookV11Page
