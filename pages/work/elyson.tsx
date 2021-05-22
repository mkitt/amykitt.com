import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function ElysonPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Elyson</h1>
      <h2 className={styles.h2}>Community Brochure</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="Elyson 1" src="elyson-1.jpg" />
        <WorkImage alt="Elyson 2" src="elyson-2.jpg" />
        <WorkImage alt="Elyson 3" src="elyson-3.jpg" />
        <WorkImage alt="Elyson 4" src="elyson-4.jpg" />
        <WorkImage alt="Elyson 5" src="elyson-5.jpg" />
        <WorkImage alt="Elyson 6" src="elyson-6.jpg" />
        <WorkImage alt="Elyson 7" src="elyson-7.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('elyson', ['collateral', 'printed matter']),
      label: 'Elyson Community Brochure',
      tileSize: 'sm',
    },
  }
}

export default ElysonPage
