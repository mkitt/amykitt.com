import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function BackyardSodaCompanyPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Backyard Soda Company</h1>
      <h2 className={styles.h2}>Brand Identity/Packaging</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Backyard Soda Company Syrup Trio"
          src="backyard-soda-company-syrup-trio.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('backyard-soda-company', ['package design']),
      label: 'Backyard Soda Company Packaging',
      tileSize: 'lg',
    },
  }
}

export default BackyardSodaCompanyPage
