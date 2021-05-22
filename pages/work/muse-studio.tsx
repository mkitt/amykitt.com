import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function MuseStudioPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Muse Studio</h1>
      <h2 className={styles.h2}>Brand Identity System/Website</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Muse Studio Identity 1"
          src="muse-studio-identity-1.jpg"
        />
        <WorkImage
          alt="Muse Studio Identity 2"
          src="muse-studio-identity-2.jpg"
        />
        <WorkImage
          alt="Muse Studio Identity 3"
          src="muse-studio-identity-3.jpg"
        />
        <WorkImage
          alt="Muse Studio Identity 4"
          src="muse-studio-identity-4.jpg"
        />
        <WorkImage
          alt="Muse Studio Website 1"
          src="muse-studio-website-1.jpg"
        />
        <WorkImage
          alt="Muse Studio Website 2"
          src="muse-studio-website-2.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('muse-studio', ['branding', 'identity', 'web']),
      label: 'Muse Studio Identity System/Website',
      tileSize: 'xs',
    },
  }
}

export default MuseStudioPage
