import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function GolfholicsIdentityPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Golfholics</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Golfholics Identity 1"
          src="golfholics-identity-1.jpg"
        />
        <WorkImage
          alt="Golfholics Identity 2"
          src="golfholics-identity-2.jpg"
        />
        <WorkImage
          alt="Golfholics Identity 3"
          src="golfholics-identity-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('golfholics', ['branding', 'identity']),
      label: 'Golfholics Identity',
      tileSize: 'xs',
    },
  }
}

export default GolfholicsIdentityPage
