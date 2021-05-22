import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function FlingIdentityPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Fling</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Fling Identity 1" src="fling-identity-1.jpg" />
        <WorkImage
          alt="Fling Identity 2"
          src="fling-identity-2.jpg"
          height={1195}
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('fling', ['branding', 'identity']),
      label: 'Fling Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default FlingIdentityPage
