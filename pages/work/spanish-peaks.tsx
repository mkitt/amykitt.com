import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function SpanishPeaksPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Spanish Peaks</h1>
      <h2 className={styles.h2}>Printed Matter</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage alt="Spanish Peaks 1" src="spanish-peaks-brochure-1.jpg" />
        <WorkImage alt="Spanish Peaks 2" src="spanish-peaks-brochure-2.jpg" />
        <WorkImage alt="Spanish Peaks 3" src="spanish-peaks-brochure-3.jpg" />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('spanish-peaks', ['printed matter']),
      label: 'Spanish Peaks Printed Matter',
      tileSize: 'sm',
    },
  }
}

export default SpanishPeaksPage
