import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function PresseryPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Pressery</h1>
      <h2 className={styles.h2}>Packaging Design</h2>
      <div className={styles.imgs}>
        <WorkImage alt="Pressery SPV" src="pressery-spv.jpg" />
        <WorkImage alt="Pressery Soup" src="pressery-soup.jpg" />
        <WorkImage alt="Pressery Juice Bar" src="pressery-wf-juice-bar.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('pressery', ['package design']),
      label: 'Pressery Package Design',
      tileSize: 'lg',
    },
  }
}

export default PresseryPage
