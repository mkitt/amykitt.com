import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function AudiPrintedMatterPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Audi</h1>
      <h2 className={styles.h2}>Printed Matter</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Audi Cover" src="audi-printed-matter-covers.jpg" />
        <WorkImage alt="Audi TT Cover" src="audi-printed-matter-tt-cover.jpg" />
        <WorkImage
          alt="Audi TT Spread 1"
          src="audi-printed-matter-tt-spread-1.jpg"
        />
        <WorkImage
          alt="Audi TT Spread 2"
          src="audi-printed-matter-tt-spread-2.jpg"
        />
        <WorkImage
          alt="Audi All Models"
          src="audi-printed-matter-all-models-cover.jpg"
        />
        <WorkImage
          alt="Audi All Models Spread"
          src="audi-printed-matter-all-models-spread.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('audi-printed-matter', ['collateral', 'printed matter']),
      label: 'Audi Printed Matter',
      tileSize: 'md',
    },
  }
}

export default AudiPrintedMatterPage
