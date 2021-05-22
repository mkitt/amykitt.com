import { InferGetStaticPropsType } from 'next'
import { PowdrBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function BrewinBurroPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Brewin Burro at Lee Canyon Ski Area</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <PowdrBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Brewin Burro Identity 1"
          src="brewin-burro-identity-1.jpg"
        />
        <WorkImage
          alt="Brewin Burro Identity 2"
          src="brewin-burro-identity-2.jpg"
        />
        <WorkImage
          alt="Brewin Burro Identity 3"
          src="brewin-burro-identity-3.jpg"
        />
        <WorkImage
          alt="Brewin Burro Identity 4"
          src="brewin-burro-identity-4.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('brewin-burro', ['branding', 'identity']),
      label: 'Brewin Burro Identity',
      tileSize: 'xs',
    },
  }
}

export default BrewinBurroPage
