import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function BackyardSodaCBDPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Backyard Soda Company</h1>
      <h2 className={styles.h2}>CBD Can Design</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Backyard Soda Company CBD Cans"
          src="backyard-soda-company-cbd-cans.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('backyard-soda-company-cbd', ['package design']),
      label: 'Backyard Soda Company',
      tileSize: 'sm',
    },
  }
}

export default BackyardSodaCBDPage
