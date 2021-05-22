import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function FactoryIdentityPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Factory Design Labs</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Factory Identity 3" src="factory-identity-3.jpg" />
        <WorkImage alt="Factory Identity 2" src="factory-identity-2.jpg" />
        <WorkImage alt="Factory Identity 1" src="factory-identity-1.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('factory', ['branding', 'identity']),
      label: 'Factory Design Labs Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default FactoryIdentityPage
