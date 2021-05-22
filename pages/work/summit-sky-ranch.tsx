import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function SummitSkyRanchPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Summit Sky Ranch</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Summit Sky Ranch Identity 1"
          src="summit-sky-ranch-identity-1.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('summit-sky-ranch', ['branding', 'identity']),
      label: 'Summit Sky Ranch Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default SummitSkyRanchPage
