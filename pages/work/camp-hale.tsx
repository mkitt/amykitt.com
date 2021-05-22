import { InferGetStaticPropsType } from 'next'
import { PowdrBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function CampHalePage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Camp Hale</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <PowdrBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="Camp Hale Identity 1" src="camp-hale-identity-1.jpg" />
        <WorkImage alt="Camp Hale Identity 2" src="camp-hale-identity-2.jpg" />
        <WorkImage alt="Camp Hale Identity 3" src="camp-hale-identity-3.jpg" />
        <WorkImage alt="Camp Hale Identity 4" src="camp-hale-identity-4.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('camp-hale', ['branding', 'identity']),
      label: 'Camp Hale Identity',
      tileSize: 'sm',
    },
  }
}

export default CampHalePage
