import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function HappyBunnyPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Happy Bunny</h1>
      <h2 className={styles.h2}>Brand Identity & App Design/Concept</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Happy Bunny 1" src="happy-bunny-1.jpg" />
        <WorkImage alt="Happy Bunny 2" src="happy-bunny-2.jpg" />
        <WorkImage alt="Happy Bunny 3" src="happy-bunny-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('happy-bunny', [
        'branding',
        'concept',
        'identity',
        'mobile',
        'web',
      ]),
      label: 'Happy Bunny Brand Identity & App Design/Concept',
      tileSize: 'sm',
    },
  }
}

export default HappyBunnyPage
