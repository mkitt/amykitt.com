import { InferGetStaticPropsType } from 'next'
import { PowdrBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function BighornPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Bighorn Grille at Lee Canyon Ski Area</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <PowdrBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="Bighorn Identity 1" src="bighorn-identity-1.jpg" />
        <WorkImage alt="Bighorn Identity 2" src="bighorn-identity-2.jpg" />
        <WorkImage alt="Bighorn Identity 3" src="bighorn-identity-3.jpg" />
        <WorkImage alt="Bighorn Identity 4" src="bighorn-identity-4.jpg" />
        <WorkImage alt="Bighorn Identity 5" src="bighorn-identity-5.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('bighorn', ['branding', 'identity']),
      label: 'Bighorn Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default BighornPage
