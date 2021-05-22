import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function AudiR8Page(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Audi</h1>
      <h2 className={styles.h2}>R8 Coffee Table Book</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Audi R8 Cover" src="audi-r8-cover.jpg" />
        <WorkImage alt="Audi R8 Spread 1" src="audi-r8-spread-1.jpg" />
        <WorkImage alt="Audi R8 Spread 2" src="audi-r8-spread-2.jpg" />
        <WorkImage alt="Audi R8 Spread 3" src="audi-r8-spread-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('audi-r8', ['collateral', 'printed matter']),
      label: 'Audi R8 Coffee Table Book',
      tileSize: 'sm',
    },
  }
}

export default AudiR8Page
