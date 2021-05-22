import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function ObrienPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>O’brien</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="O’brien Identity 1" src="obrien-identity-1.jpg" />
        <WorkImage alt="O’brien Identity 2" src="obrien-identity-2.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('obrien', ['branding', 'identity']),
      label: 'O’brien Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default ObrienPage
