import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function FactoryBrandBookV10Page(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Factory Design Labs</h1>
      <h2 className={styles.h2}>Brand Book, V10</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Factory Brand Book V10 1"
          src="factory-brand-book-v10-1.jpg"
        />
        <WorkImage
          alt="Factory Brand Book V10 2"
          src="factory-brand-book-v10-2.jpg"
        />
        <WorkImage
          alt="Factory Brand Book V10 3"
          src="factory-brand-book-v10-3.jpg"
        />
        <WorkImage
          alt="Factory Brand Book V10 4"
          src="factory-brand-book-v10-4.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('factory-brand-book-v10', [
        'art',
        'branding',
        'package design',
      ]),
      label: 'Factory Design Labs Brand Book V10',
      tileSize: 'sm',
    },
  }
}
export default FactoryBrandBookV10Page
