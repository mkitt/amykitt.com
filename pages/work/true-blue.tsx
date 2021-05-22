import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function TrueBluePage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>True Blue</h1>
      <h2 className={styles.h2}>Brand Identity/Packaging</h2>
      <div className={styles.imgs}>
        <WorkImage alt="TrueBlue 1" src="true-blue.jpg" />
        <WorkImage alt="TrueBlue 2" src="true-blue-jam.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('true-blue', ['branding', 'package design']),
      label: 'True Blue Packaging',
      tileSize: 'sm',
    },
  }
}

export default TrueBluePage
