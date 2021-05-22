import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function RothPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Roth</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Roth Identity 1" src="roth-identity-1.jpg" />
        <WorkImage alt="Roth Identity 2" src="roth-identity-2.jpg" />
        <WorkImage alt="Roth Identity 3" src="roth-identity-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('roth', ['branding', 'identity']),
      label: 'Roth Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default RothPage
