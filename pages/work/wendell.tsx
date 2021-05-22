import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function WendellPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Wendell</h1>
      <h2 className={styles.h2}>Community Brochure</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="Wendell 1" src="wendell-1.jpg" />
        <WorkImage alt="Wendell 2" src="wendell-2.jpg" />
        <WorkImage alt="Wendell 3" src="wendell-3.jpg" />
        <WorkImage alt="Wendell 4" src="wendell-4.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('wendell', ['printed matter']),
      label: 'Wendell Community Brochure',
      tileSize: 'sm',
    },
  }
}

export default WendellPage
