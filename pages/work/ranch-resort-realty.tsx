import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function RanchResortRealtyPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Ranch & Resort Realty</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Ranch & Resort Realty 1"
          src="ranch-resort-realty-1.jpg"
        />
        <WorkImage
          alt="Ranch & Resort Realty 2"
          src="ranch-resort-realty-2.jpg"
        />
        <WorkImage
          alt="Ranch & Resort Realty 3"
          src="ranch-resort-realty-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('ranch-resort-realty', [
        'branding',
        'identity',
        'printed matter',
      ]),
      label: 'Ranch & Resort Realty Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default RanchResortRealtyPage
