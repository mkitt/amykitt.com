import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function LiveForThisFitnessPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Live For This Fitness</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Live For This Fitness Identity 1"
          src="live-for-this-fitness-identity-1.jpg"
        />
        <WorkImage
          alt="Live For This Fitness Identity 2"
          src="live-for-this-fitness-identity-2.jpg"
          height={711}
        />
        <WorkImage
          alt="Live For This Fitness Identity 3"
          src="live-for-this-fitness-identity-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('live-for-this-fitness', ['branding', 'identity']),
      label: 'Live For This Fitness Brand Identity',
      tileSize: 'xs',
    },
  }
}

export default LiveForThisFitnessPage
