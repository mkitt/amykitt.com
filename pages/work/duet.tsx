import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function DuetIdentityPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Duet</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Duet Identity 1" src="duet-identity-1.jpg" />
        <WorkImage alt="Duet Identity 2" src="duet-identity-2.jpg" />
        <WorkImage alt="Duet Identity 3" src="duet-identity-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('duet', ['branding', 'identity']),
      label: 'Duet Identity',
      tileSize: 'xs',
    },
  }
}

export default DuetIdentityPage
