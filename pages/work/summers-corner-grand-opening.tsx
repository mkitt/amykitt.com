import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function SummersCornerGrandOpeningPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Summers Corner</h1>
      <h2 className={styles.h2}>Grand Opening Poster</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Summers Corner Grand Opening"
          src="summers-corner-grand-opening-1.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('summers-corner-grand-opening', [
        'ads',
        'branding',
        'printed matter',
      ]),
      label: 'Summers Corner Grand Opening Poster',
      tileSize: 'sm',
    },
  }
}

export default SummersCornerGrandOpeningPage
