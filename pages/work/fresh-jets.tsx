import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function FreshJetsPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Fresh Jets</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Fresh Jets Identity 1"
          src="fresh-jets-identity-1.jpg"
        />
        <WorkImage
          alt="Fresh Jets Identity 2"
          src="fresh-jets-identity-2.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('fresh-jets', ['branding', 'identity']),
      label: 'Fresh Jets Brand Identity',
      tileSize: 'md',
    },
  }
}

export default FreshJetsPage
