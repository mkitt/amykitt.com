import { InferGetStaticPropsType } from 'next'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function TrueBluePage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>True North</h1>
      <h2 className={styles.h2}>Brand Identity</h2>
      <div className={styles.imgs}>
        <WorkImage
          alt="True North Identity 1"
          src="true-north-identity-1.jpg"
        />
        <WorkImage
          alt="True North Identity 2"
          src="true-north-identity-2.jpg"
        />
        <WorkImage
          alt="True North Identity 3"
          src="true-north-identity-3.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('true-north', ['branding', 'package design']),
      label: 'True North Brand Identity',
      tileSize: 'sm',
    },
  }
}

export default TrueBluePage
