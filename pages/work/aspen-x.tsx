import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function AspenXPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Aspen Ski Co.</h1>
      <h2 className={styles.h2}>Brand Campaign</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Aspen X" src="aspen-x.jpg" />
        <WorkImage alt="Aspen Cold" src="aspen-cold.jpg" />
        <WorkImage alt="Aspen Cosmo" src="aspen-cosmo.jpg" />
        <WorkImage alt="Aspen Rookies" src="aspen-rookies.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('aspen-x', ['collateral', 'print campaign']),
      label: 'Aspen Ski Co. Brand Campaign',
      tileSize: 'xs',
    },
  }
}

export default AspenXPage
