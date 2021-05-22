import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function RevoPressKitPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Revo</h1>
      <h2 className={styles.h2}>Press Kit</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Revo Press Kit 1" src="revo-press-kit-1.jpg" />
        <WorkImage alt="Revo Press Kit 2" src="revo-press-kit-2.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('revo-press-kit', [
        'branding',
        'identity',
        'print campaign',
        'printed matter',
      ]),
      label: 'Revo Press Kit',
      tileSize: 'xs',
    },
  }
}

export default RevoPressKitPage
