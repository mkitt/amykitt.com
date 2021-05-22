import { InferGetStaticPropsType } from 'next'
import { StradaBlurb } from '../../components/Blurbs'
import WorkDetail, { styles } from '../../components/WorkDetail'
import WorkImage from '../../components/WorkImage'
import derivedWork from '../../lib/derivedWork'

type PropsType = InferGetStaticPropsType<typeof getStaticProps>

function SummersCornerAdPage(props: PropsType) {
  return (
    <WorkDetail {...props}>
      <h1 className={styles.h1}>Summers Corner</h1>
      <h2 className={styles.h2}>Brand Ad</h2>
      <StradaBlurb className={styles.p} />
      <div className={styles.imgs}>
        <WorkImage
          alt="Summers Corner Ad"
          src="summers-corner-brand-s-spread.jpg"
        />
      </div>
    </WorkDetail>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...derivedWork('summers-corner-brand', [
        'ads',
        'branding',
        'printed matter',
      ]),
      label: 'Summers Corner Brand Ad',
      tileSize: 'md',
    },
  }
}

export default SummersCornerAdPage
