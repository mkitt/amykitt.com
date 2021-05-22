import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function TrueNorthSyrupPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>True Blue Artisan Maple Syrup</h1>
      <h2 className={styles.h2}>Packaging</h2>
      <div className={styles.imgs}>
        <WorkImage alt="True Blue Syrup 1" src="true-blue-syrup-1.jpg" />
        <WorkImage alt="True Blue Syrup 2" src="true-blue-syrup-2.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('true-blue-syrup', ['branding', 'package design']),
      label: 'True Blue Artisan Maple Syrup / Packaging Design',
      tileSize: 'sm',
    },
  }
}

export default TrueNorthSyrupPage
