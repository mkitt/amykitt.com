import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function AudiTDIPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Audi</h1>
      <h2 className={styles.h2}>TDI Brochure</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Audi TDI Cover" src="audi-tdi-cover.jpg" />
        <WorkImage alt="Audi TDI Spread" src="audi-tdi-spread.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('audi-tdi', ['collateral', 'printed matter']),
      label: 'Audi TDI Brochure',
      tileSize: 'sm',
    },
  }
}

export default AudiTDIPage
