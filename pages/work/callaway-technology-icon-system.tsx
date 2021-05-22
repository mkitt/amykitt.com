import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function CallawayTechPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Callaway</h1>
      <h2 className={styles.h2}>Technology Icons System</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Callaway Technology Icon System"
          src="callaway-technology-icons-1.jpg"
        />
        <WorkImage
          alt="Callaway Technology Icon System"
          src="callaway-technology-icons-2.jpg"
          height={856}
        />
      </div>
      <h2 className="uppercase">Brand Ads</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="Callaway Phil Mickelson Ad"
          src="callaway-phil-mickelson.jpg"
        />
        <WorkImage
          alt="Callaway Alvaro Quiros Ad"
          src="callaway-alvaro-quiros.jpg"
          height={1095}
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('callaway-technology-icon-system', [
        'ads',
        'branding',
        'collateral',
        'print campaign',
      ]),
      label: 'Callaway Technology Icon System',
      tileSize: 'xs',
    },
  }
}

export default CallawayTechPage
